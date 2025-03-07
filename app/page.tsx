'use client'
import Link from "next/link";
import { move } from "./_action";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/test">link</Link>
      <button onClick={() => {router.push('/test')}}>router.push</button>
      <button onClick={move}>redirect in server action</button>
    </div>
  );
}
