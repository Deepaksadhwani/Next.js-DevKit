import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black items-center  gap-2 p-24">
      <h1 className=" rounded-lg  bg-white p-2  font-semibold text-black">
        Deepak Sadhwani
      </h1>
      <Button variant="destructive" size="lg" >Shadcn button</Button>
    </main>
  );
}
