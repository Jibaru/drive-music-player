import { createFormUrlEncoded } from "../../utils/fetch.utils.js";
import { UPDATE_USER_ROOT_DRIVE_KEY } from "../../config/api-uri.js";

const updateUserRootDriveKeyService = async (userId, rootDriveKey, token) => {
  const uri = UPDATE_USER_ROOT_DRIVE_KEY.replace(":userId", `${userId}`);
  const response = await fetch(process.env.VUE_APP_API_BASE + uri, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      token: token,
    },
    body: createFormUrlEncoded({
      rootDriveKey,
    }),
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(data.error);
  }
};

export default updateUserRootDriveKeyService;
