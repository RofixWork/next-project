import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <section>
      <h1>Sorry, This page Not Found...</h1>
      <p>
        Back to{" "}
        <Link href="/">
          <a>HomePage</a>
        </Link>
      </p>
    </section>
  );
};

export default NotFound;
