import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center  p-24">
            <h1 className="text-3xl font-bold mb-10">Hello World</h1>
            <Button variant="outline">Button</Button>
        </main>
    );
}
