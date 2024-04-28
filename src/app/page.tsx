"use client"
import { Button } from '@/components/Button'
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div className='h-screen'>
      <Button onClick={() => signIn()}>Login</Button>
      {status}
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
}
