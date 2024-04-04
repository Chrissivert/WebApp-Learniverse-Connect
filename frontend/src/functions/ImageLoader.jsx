export function loadImage(courseTitle) {
    return import(`../images/${courseTitle}.jpg`).then(module => module.default);
  }
  