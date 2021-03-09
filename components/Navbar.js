import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Image src="/logo.jpg" width="125" height="50" />
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
