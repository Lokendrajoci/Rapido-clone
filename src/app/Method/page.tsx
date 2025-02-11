"use client";

import { useSearchParams } from "next/navigation";
import Post from "@/components/Post";

export default function Page() {
  const searchParams = useSearchParams();
  
  return (
    <div>
      <Post searchParams={searchParams} />
    </div>
  );
}