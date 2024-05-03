import { API_BASE_URL, sendApiDeleteRequest, sendApiFileUploadRequest, sendApiGetRequest } from "./api-requests";

const IMAGE_URL = "/images";

/**
 * 
 *
 * @param {int} imageId
 */
export function deleteImageOnServer(imageId) {
  return sendApiDeleteRequest(IMAGE_URL + "/" + imageId);
}

/**
 * 
 *
 * @param {byte[]} image 
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
export function generateImageUrl(imageId) {
  if (imageId > 0) {
    return API_BASE_URL + IMAGE_URL + "/" + imageId;
  } else {
    return null;
  }
}