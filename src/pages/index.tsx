import Head from "next/head";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Moon, Sun } from "lucide-react"

import { api } from "~/utils/api";
import { useTheme } from "next-themes";

export default function Home() {
  const hello = api.post.hello.useQuery({ messages: "from tRpc" });

  const { setTheme } = useTheme()

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-background gap-y-6">
        <h1 className="text-3xl text-primary">Hello World</h1>
        <Button>Ayo Sentuh Aku</Button>
        <Button onClick={() => setTheme("dark")} size="icon"><Moon /></Button>
        <Button onClick={() => setTheme("light")} size="icon"><Sun /></Button>
      </main>
    </>
  );
}
