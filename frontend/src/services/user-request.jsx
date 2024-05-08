import { sendApiPostRequest, sendApiGetRequest, sendApiPutRequest, sendApiDeleteRequest } from "./api-requests";

const PROFILE_URL = "/user"

/**
 * Retrieves a user from the server.
 *
 * @param {int} userId The ID of the user to be retrieved.
 * @returns The outcome of the get request.
 */
export function getUserFromServer(userId) {
  return sendApiGetRequest(PROFILE_URL + "/" + userId)
}

const REGISTER_URL = "/api/signup"

/**
 * 
 *
 * @param {FormData} data 
 * @returns 
 */
export function postSignupToServer(data) {
  return sendApiPostRequest(REGISTER_URL, data);
}

const AUTH_URL = "/api/authenticate"

/**
 * 
 *
 * @param {FormData} data 
 * @returns 
 */
export function postAuthToServer(data) {
  return sendApiPostRequest(AUTH_URL, data);
}