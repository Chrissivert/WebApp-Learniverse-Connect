import { sendApiPostRequest } from "./api-requests";

const EMAIL_URL = "/purchased";

console.log('send-email.jsx');

/**
 * Sends an email.
 *
 * @param {string} toEmail The email address of the recipient.
 * @param {string} subject The subject of the email.
 * @param {string} text The content of the email.
 * @returns The outcome of the post request.
 */
export function sendEmail(toEmail, subject, text) {
    console.log('sendEmail');
  return sendApiPostRequest(EMAIL_URL, { toEmail, subject, text });
}
