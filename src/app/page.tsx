"use client"
import useTelegram from "@/hooks/useTelegram";
export default function Home() {
  const { userId, userName, telegram } = useTelegram();


  return (
    <main className="flex h-full overflow-x-hidden  flex-col items-center justify-between 
    ">
      {userId && <div>userId: {telegram?.initDataUnsafe.user?.id}</div>}
      {userName && <div>userName: {telegram?.initDataUnsafe.user?.username}</div>}
      {
        JSON.stringify(telegram)
      }

      {/* <button
        onClick={() => {
          telegram?.close();
        }}
      >
        Close
      </button> */}
    </main>
  );
}
