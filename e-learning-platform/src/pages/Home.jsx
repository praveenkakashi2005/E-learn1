import React, { useEffect, useState } from "react";
import api from "../utils/api";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/").then((response) => {
      setMessage(response.data.message);
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default Home;
