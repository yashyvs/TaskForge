"use client";
import { Button } from "@/components/Button";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  return (
<<<<<<< Updated upstream
    <div>
      <Button onClick={signIn}>Login</Button>
=======
    <div className="pt-16">
      <Button onClick={signIn} label="Login" />
>>>>>>> Stashed changes
      <br />
      {status}
    </div>
  );
}
