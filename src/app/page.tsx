"use client"
import useTelegram from "@/hooks/useTelegram";
export default function Home() {
  const { userId, userName } = useTelegram();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {userId && <div>userId: {userId}</div>}
        {userName && <div>userName: {userName}</div>}
      </div>
    </main>
  );
}
