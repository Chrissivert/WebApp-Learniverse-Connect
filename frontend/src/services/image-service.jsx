import { API_BASE_URL, sendApiDeleteRequest, sendApiFileUploadRequest, sendApiGetRequest } from "./api-requests";

const IMAGE_URL = "/images";

/**
 * 
 *
 * @param {int} imageId
 * @returns
 */
export function deleteImageOnServer(imageId) {
  return sendApiDeleteRequest(IMAGE_URL + "/" + imageId);
}

/**
 * 
 *
 * @param {*} imageId 
 * @param {*} image 
 * @returns 
 */
export function updateImageOnServer(imageId, image) {
  return null
}

/**
 * 
 *
 * @param {byte[]} image 
 * @returns
 */
export function uploadImageToServer(image) {
  return sendApiFileUploadRequest(IMAGE_URL, image);
}

/**
 * 
 *
 * @param {int} imageId 
 * @returns 
 */
export function getImageDataFromServer(imageId) {
  return sendApiGetRequest(IMAGE_URL + "/" + imageId);
}

/**
 * 
 *
 * @param {int} imageId 
 * @returns 
 */
export function generateImageUrl(imageId) {
  if (imageId > 0) {
    return API_BASE_URL + IMAGE_URL + "/" + imageId + "/data";
  } else {
    return null;
  }
}