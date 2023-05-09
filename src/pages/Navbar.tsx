import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 bg-gray-900">
      <Link href="/">
        <a className="text-2xl font-bold text-gray-300 hover:text-white ml-6">
          Home
        </a>
      </Link>
      <ul className="flex justify-between items-center">
        <li>
          <Link href="/products">
            <a className="text-xl text-gray-300 hover:text-white px-4">
              Products
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-xl text-gray-300 hover:text-white px-4">
              About
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
