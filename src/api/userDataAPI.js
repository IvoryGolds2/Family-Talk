import axios from "axios";

export const getUserData = async () => {
  try {
    const response = await axios.get(`https://my-json-server.typicode.com/IvoryGolds2/familyApp-DB/db`)

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error (`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};