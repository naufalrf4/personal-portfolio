
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid p-16 place-content-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-foreground">404</h1>

        <p className="text-2xl font-bold tracking-tight text-muted-foreground sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-muted-foreground">We can&apos;t find that page.</p>
        <Button className="mt-6">
          <Link href="/">
          Go Back Home
          </Link>
        </Button>
      </div>
    </div>
  );
}