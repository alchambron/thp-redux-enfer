import Cookies from "js-cookie";
import useFetch from "../Tools/useFetch";

const initialState = {
  username: "",
  email: "",
  description: "",
};

export function reducer(state = initialState, action) {
  const token = Cookies.get("token");

  console.log(action.type);

  switch (action.type) {
    case "LOGGED":
      async () => {
        const sendData = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const data = await useFetch(
          "http://localhost:1337/api/users/me",
          sendData
        );
        return {
          ...state,
          username: data.username,
          email: data.email,
          description: data.description,
        };
      };
      default: {
        state
      }
  }
}
