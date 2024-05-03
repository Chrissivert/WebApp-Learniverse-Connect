import axios from "axios";

/**
 * The API key for the base url for the website.
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Sends an HTTP GET REST-API request to the backend.
 * 
 * @param {string} url The URL that will be used for the request.
 * @returns The response from the request.
 */
export async function sendApiGetRequest(url) {
  return sendApiJsonRequest('get', url);
}

/**
 * Sends an HTTP POST REST-API request to the backend.
 * 
 * @param {string} url The URL that will be used for the request.
 * @param {json} requestBody The JSON data to be sent with the request.
 * @returns The response from the request.
 */
export async function sendApiPostRequest(url, requestBody) {
  return sendApiJsonRequest('post', url, requestBody);
}

/**
 * Sends an HTTP PUT REST-API request to the backend.
 * 
 * @param {string} url The URL that will be used for the request.
 * @param {json} requestBody The JSON data to be sent with the request.
 * @returns The response from the request.
 */
export async function sendApiPutRequest(url, requestBody) {
  return sendApiJsonRequest('put', url, requestBody);
}

/**
 * Sends an HTTP DELETE REST-API request to the backend.
 * 
 * @param {string} url The URL that will be used for the request.
 * @returns The response from the request.
 */
export async function sendApiDeleteRequest(url) {
  return sendApiJsonRequest('delete', url);
}

/**
 * 
 * 
 * @param {string} url The URL that will be used for the request.
 * @param {byte[]} file
 * @returns The response from the request.
 */
export async function sendApiFileUploadRequest(url, file) {
  // sendApiRequest("post", url, callback, null, errorCallback, fileContent);
}

/**
 * Sends a REST-API request to the backend, generic function.
 *
 * @param {string} method The request method to be used when making the request. Methods to be used: POST, GET, PUT, DELETE.
 * @param {string} url The URL that will be used for the request.
 * @param {json} requestBody The JSON data to be sent with the request.
 * @param {byte[]} file The BLOB data to be sent with the request.
 * @returns The response from the request.
 */
async function sendApiJsonRequest(method, url, requestBody) {
  try {
    const config = {
      method: method,
      baseURL: API_BASE_URL,
      url: url,
      data: (method === 'get' || 'delete') ? null : requestBody,
      // responseType: (file === null) ? 'json' : 'blob'
    };

    const response = await axios(config);
    return response;
  } catch (error) {
    console.error("Error in sendApiJsonRequest:", error);
  }
};

/**
 * 
 * @param {string} method 
 * @param {string} url 
 * @param {formData} file 
 */
async function sendApiBlobRequest(method, url, file) {
  try {
    const config = {
      method: method,
      baseURL: API_BASE_URL,
      url: url,
      responseType: 'blob'
    };

    if (method === 'post') {
      await axios.post(config.baseURL + config.url, file, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("File uploaded successfully");
    }
  } catch (error) {
    console.error("Error in sendApiBlobRequest:", error);
  }
}