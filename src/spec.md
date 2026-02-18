# Specification

## Summary
**Goal:** Require users to log in (via Internet Identity) before any cart, subscription, or WhatsApp checkout actions; capture and persist customer profile details; and include those details in WhatsApp checkout messages with saved order/subscription history.

**Planned changes:**
- Add a mandatory authentication gate that blocks logged-out users from Add to Cart, Subscribe, Proceed to Checkout, and any WhatsApp ordering actions.
- For any blocked action, show a popup with the exact text "Please Login to Continue" and provide the login UI within the same flow.
- Integrate Internet Identity login into the existing Header "Login" button, and add logged-in header state with account options and logout.
- Implement profile capture/edit for Full Name, Email Address, Mobile Number, and Delivery Address, persisted per authenticated user; require these fields before allowing WhatsApp checkout and prompt completion if missing.
- Add an account area for logged-in users: View Profile, Edit Address, View Order History, View Active Subscriptions, and Logout.
- Update WhatsApp checkout message generation to include customer details (name/email/mobile/address), selected items with quantities, and total amount; open `https://wa.me/918999844337?text=` with a URL-encoded message.
- Add backend storage in the single Motoko main actor for per-user profile data and per-user order/subscription history records, with access restricted to the authenticated caller.

**User-visible outcome:** Logged-out users are prevented from ordering actions until they log in; logged-in users can manage their profile and account area, and WhatsApp checkout/subscription messages include their saved delivery and contact details plus full order information, with order/subscription history available in-app.
