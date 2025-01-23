import Image from "next/image";
import React from "react";
import logo from "../../public/Picsart_25-01-23_12-02-16-268.png";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const NavBer = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  return (
    <div className="bg-slate-800 text-white py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Image className="w-24" src={logo} alt="" />
        </div>
        <div className="flex items-center gap-5 list-none">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          {user ? (
            <li className="border px-4 py-1 rounded-md bg-gray-500/80">
              <LogoutLink>Logout</LogoutLink>
            </li>
          ) : (
            <>
              <li className="border px-4 py-1 rounded-md bg-gray-500/80">
                <LoginLink>Login</LoginLink>
              </li>
              <li className="border px-4 py-1 rounded-md bg-gray-500/80">
                <RegisterLink>Sign up</RegisterLink>
              </li>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBer;
