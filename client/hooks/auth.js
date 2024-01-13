"use client";

import API, { setCSRF } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

export const useAuth = ({ middleware } = {}) => {
  const router = useRouter();
  // loading
  const [isLoading, setIsLoading] = useState(false);

  // user
  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/v1/user", () =>
    API.get("/api/v1/user")
      .then((res) => res.data.data)
      .catch((err) => {
        if (error.response.status !== 409) {
          throw error;
        }
      })
  );
  //csrf

  //login
  const login = async ({ setErrors, ...props }) => {
    setErrors([]);

    // wait for csrf to be set first
    await setCSRF();

    await API.post("/login", props)
      .then(() => mutate() && router.push("/dashboard"))
      .catch((err) => {
        if (err.response.status !== 422) {
          throw err;
        }
        setErrors(Object.values(err.response.data.errors).flat());
      });
  };

  //logout
  const logout = async () => {
    await API.post("/logout");
    mutate(null);
    router.push("/login");
  };

  useEffect(() => {
    if (user || error) {
      setIsLoading(false);
    }
    if (middleware === "guest" && user) {
      router.push("/");
    }
    if (middleware === "auth" && error) {
      router.push("/login");
    }
  }, []);

  return {
    user,
    isLoading,
    login,
    logout,
  };
};
