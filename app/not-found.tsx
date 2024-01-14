import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container p-10 py-48 flex flex-col items-center justify-center">
      <h1 className="font-bold text-xl">404 - Page Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Go back home</Link>
    </div>
  );
}
