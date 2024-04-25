import { sendApiPostRequest, sendApiGetRequest, sendApiPutRequest, sendApiDeleteRequest } from "./api-requests";

const COURSE_URL = "/courses";

/**
 * 
 *
 * @returns 
 */
export function getCoursesFromServer() {
  return sendApiGetRequest(COURSE_URL);
}

/**
 * 
 *
 * @param {int} id 
 * @returns 
 */
export function getOneCourseFromServer(id) {
  return sendApiGetRequest(COURSE_URL + "/" + id);
}

/**
 * 
 *
 * @param {json} course 
 * @returns 
 */
export function addCourseToServer(course) {
  return sendApiPostRequest(COURSE_URL, course);
}

/**
 * 
 *
 * @param {json} course 
 * @returns 
 */
export function updateCourseOnServer(course) {
  return sendApiPutRequest(COURSE_URL + "/" + course.id, course);
}

/**
 * 
 *
 * @param {int} id 
 * @returns 
 */
export function deleteCourseOnServer(id) {
  return sendApiDeleteRequest(COURSE_URL + "/" + id);
}