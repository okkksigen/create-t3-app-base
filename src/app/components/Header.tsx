import Link from 'next/link';

const Header = () => (
  <Link href="/">
    <h1 className="my-4 pb-4 pt-2 text-center text-5xl font-semibold text-gray-800 hover:bg-blue-100">
      My Blog
    </h1>
  </Link>
);

export default Header;
