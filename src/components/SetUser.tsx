"use client";

import { api } from "@/lib/api";
import { useEffect } from "react";

const SetUser = () => {
  useEffect(() => {
    const postData = async () => {
      try {
        const res = await api.post("/users");
      } catch (err: any) {
        console.log(err?.message || "An unknown error occurred");
      }
    };

    postData();
  }, []);

  return <div></div>;
};

export default SetUser;
