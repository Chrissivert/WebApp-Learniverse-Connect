import { sendApiPostRequest, sendApiGetRequest, sendApiPutRequest, sendApiDeleteRequest } from "./api-requests";

const USER_URL = "/user";

/**
 * Adds a user to the server.
 *
 * @param {FormData} user The user to be added.
 * @returns The outcome of the post request.
 */
export function addUserToServer(user) {
  return sendApiPostRequest(USER_URL, user);
}

/**
 * Retrieves the users from the server.
 *
 * @returns The outcome of the get request.
 */
export function getUsersFromServer() {
  return sendApiGetRequest(USER_URL);
}

/**
 * Retrieves a user from the server.
 *
 * @param {int} userId The ID of the user to be retrieved.
 * @returns The outcome of the get request.
 */
export function getUserFromServer(userId) {
  return sendApiGetRequest(USER_URL + "/" + userId);
}

/**
 * Updates a user on the server.
 *
 * @param {int} userId The ID of the user to be updated.
 * @param {FormData} user The updated user to be sent.
 * @returns The outcome of the put request.
 */
export function updateUserOnServer(userId, user) {
  return sendApiPutRequest(USER_URL + "/" + userId, user);
}

/**
 * Deletes a user from the server.
 *
 * @param {int} userId The ID of the user to be deleted. 
 * @returns The outcome of the delete request.
 */
export function deleteUserOnServer(userId) {
  return sendApiDeleteRequest(USER_URL + "/" + userId);
}

const REGISTER_URL = "/api/signup";

/**
 * 
 *
 * @param {FormData} data 
 * @returns 
 */
export function postSignupToServer(data) {
  return sendApiPostRequest(REGISTER_URL, data);
}

const AUTH_URL = "/api/authenticate";

/**
 * 
 *
 * @param {FormData} data 
 * @returns 
 */
export function postAuthToServer(data) {
  return sendApiPostRequest(AUTH_URL, data);
}