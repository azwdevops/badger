"use client";
import Button from "@/components/Button";
import Errors from "@/components/Errors";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useAuth } from "@/hooks/auth";
import Head from "next/head";
import React, { useState } from "react";

const Login = () => {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // auth hook
  const { login, isLoading, user } = useAuth({ middleware: "guest" });

  // check loading and user
  if (isLoading || user) {
    return <p className="text-center z-50">Loading...</p>;
  }

  // submit login form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    login({ email, password, setErrors });
  };

  return (
    <>
      <Head>
        <title>Badger | Login</title>
      </Head>
      <div className="w-[400px] mx-auto bg-white shadow p-4 rounded">
        <Errors errors={errors} />
        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              className="w-full"
              onChange={(e) => setEmail(e.target.value)}
              //   required
              autoFocus
              autoComplete="off"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              className="w-full"
              onChange={(e) => setPassword(e.target.value)}
              //   required
              autoComplete="off"
            />
          </div>
          <div>
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
