import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Subscription {
    id: bigint;
    status: string;
    details: string;
}
export type Time = bigint;
export interface Order {
    id: bigint;
    timestamp: Time;
    details: string;
}
export interface UserProfile {
    deliveryAddress: string;
    fullName: string;
    mobileNumber: string;
    email: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addOrder(details: string): Promise<void>;
    addSubscription(details: string): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    cancelSubscription(subscriptionId: bigint): Promise<void>;
    getActiveSubscriptions(): Promise<Array<Subscription>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getOrderHistory(): Promise<Array<Order>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    updateDeliveryAddress(newAddress: string): Promise<void>;
}
