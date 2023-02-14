import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import useFetch from "../../Tools/useFetch";

export default function Profile() {
  const token = Cookies.get("token");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const sendData = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      setData(await useFetch("http://localhost:1337/api/users/me", sendData));
    }

    fetchData();
    setIsLoading(false);
  }, []);

  return isLoading ? (
    "loading"
  ) : (
    <>
      <div>Profile</div>
      <h1>Bonjour {data.username}</h1>
      <h5>Email : {data.email}</h5>
    </>
  );
}
