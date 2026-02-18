import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Text "mo:core/Text";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

import List "mo:core/List";

// Specify the data migration function in with-clause

actor {
  public type UserProfile = {
    fullName : Text;
    email : Text;
    mobileNumber : Text;
    deliveryAddress : Text;
  };

  public type Order = {
    id : Nat;
    timestamp : Time.Time;
    details : Text;
  };

  public type Subscription = {
    id : Nat;
    status : Text;
    details : Text;
  };

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let userProfiles = Map.empty<Principal, UserProfile>();
  let userOrders = Map.empty<Principal, List.List<Order>>();
  let userSubscriptions = Map.empty<Principal, List.List<Subscription>>();
  var nextOrderId = 0;
  var nextSubscriptionId = 0;

  // User Profile Functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public shared ({ caller }) func updateDeliveryAddress(newAddress : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update addresses");
    };

    switch (userProfiles.get(caller)) {
      case (null) { Runtime.trap("Profile not found") };
      case (?profile) {
        let updatedProfile = { profile with deliveryAddress = newAddress };
        userProfiles.add(caller, updatedProfile);
      };
    };
  };

  // Order Management
  public shared ({ caller }) func addOrder(details : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can add orders");
    };

    let order = {
      id = nextOrderId;
      timestamp = Time.now();
      details;
    };
    nextOrderId += 1;

    let orders = switch (userOrders.get(caller)) {
      case (null) { List.empty<Order>() };
      case (?existing) { existing };
    };
    orders.add(order);
    userOrders.add(caller, orders);
  };

  public query ({ caller }) func getOrderHistory() : async [Order] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view order history");
    };

    switch (userOrders.get(caller)) {
      case (null) { [] };
      case (?orders) { orders.toArray() };
    };
  };

  // Subscription Management
  public shared ({ caller }) func addSubscription(details : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can add subscriptions");
    };

    let subscription = {
      id = nextSubscriptionId;
      status = "active";
      details;
    };
    nextSubscriptionId += 1;

    let subscriptions = switch (userSubscriptions.get(caller)) {
      case (null) { List.empty<Subscription>() };
      case (?existing) { existing };
    };
    subscriptions.add(subscription);
    userSubscriptions.add(caller, subscriptions);
  };

  public query ({ caller }) func getActiveSubscriptions() : async [Subscription] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view subscriptions");
    };

    switch (userSubscriptions.get(caller)) {
      case (null) { [] };
      case (?subs) {
        subs.filter(func(sub) { sub.status == "active" }).toArray();
      };
    };
  };

  public shared ({ caller }) func cancelSubscription(subscriptionId : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can cancel subscriptions");
    };

    switch (userSubscriptions.get(caller)) {
      case (null) { Runtime.trap("No subscriptions found") };
      case (?subscriptions) {
        let updatedSubs = subscriptions.map<Subscription, Subscription>(
          func(sub) {
            if (sub.id == subscriptionId) {
              { sub with status = "cancelled" };
            } else { sub };
          }
        );
        userSubscriptions.add(caller, updatedSubs);
      };
    };
  };
};
