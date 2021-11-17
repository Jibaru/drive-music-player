const createFormUrlEncoded = (body) => {
  const formBody = [];
  for (var property in body) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(body[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  return formBody.join("&");
};

export { createFormUrlEncoded };
