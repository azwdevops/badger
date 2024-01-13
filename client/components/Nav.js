"use client";
import { useAuth } from "@/hooks/auth";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center space-x-2 bg-indigo-500 py-4 px-5 text-white font-semibold h-[8vh]">
      <h1 className="flex-[0.2] text-2xl">Badger</h1>
      <ul className="flex justify-end space-x-5 flex-[0.8]">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
        {user ? (
          <li onClick={logout}>Logout</li>
        ) : (
          <li>
            <Link
              href="/login"
              className="border border-sky-100 px-3 py-2 rounded-full"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
