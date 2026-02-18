import { CartItem } from '../features/cart/cartTypes';
import type { UserProfile } from '../backend';

/**
 * Generates a WhatsApp checkout URL with a formatted message containing customer details, cart items and total.
 * @param items - Array of cart items
 * @param total - Total cart amount
 * @param userProfile - User profile with customer details
 * @returns WhatsApp deep link URL with encoded message
 */
export function generateWhatsAppCheckoutUrl(items: CartItem[], total: number, userProfile: UserProfile): string {
  const phoneNumber = '918999844337';
  
  // Build the message with customer details
  let message = 'Hello Fresh Bites 49,\n\n';
  message += 'I would like to place an order:\n\n';
  
  // Customer details
  message += '--- Customer Details ---\n';
  message += `Customer Name: ${userProfile.fullName}\n`;
  message += `Email: ${userProfile.email}\n`;
  message += `Mobile Number: ${userProfile.mobileNumber}\n`;
  message += `Delivery Address: ${userProfile.deliveryAddress}\n\n`;
  
  // Order items
  message += '--- Selected Items ---\n';
  items.forEach((item) => {
    message += `${item.name}\n`;
    message += `Quantity: ${item.quantity}\n`;
    message += `Price: ${item.priceDisplay}\n\n`;
  });
  
  // Total
  message += `--- Total Amount ---\n`;
  message += `₹${total}\n\n`;
  message += 'Please confirm availability and final price.';
  
  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
