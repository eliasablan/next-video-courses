import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="max-w-5xl m-auto w-full px-4 py-2">
        <div className="text-center py-20">
          <h1 className="text-xl">Not Found</h1>
          <p className="py-5">Could not find requested resource</p>
          <div className="block py-10">
            <Link href="/" className={buttonVariants({ variant: "outline" })}>
              Return Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
