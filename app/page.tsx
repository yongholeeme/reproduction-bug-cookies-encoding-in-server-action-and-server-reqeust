'use client'
import Link from "next/link";
import { move } from "./_action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    document.cookie = 'AAAA=this:is:non:encoded:value'
    document.cookie = 'BBBB=this%3Ais%3Aencoded%3Avalue'
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Link href="/test">{'<Link />'} to /test</Link>
      <button onClick={() => {router.push('/test')}}>router.push to /test</button>
      <button onClick={move}>redirect in server action to /test</button>
    </div>
  );
}
