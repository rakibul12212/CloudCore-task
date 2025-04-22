import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-100 py-4 shadow-md text-center sticky top-0 z-1">
      <div className="container mx-auto px-4">
        <Link href='/' className=" text-2xl font-bold">CloudCore</Link>
      </div>
    </header>
  );
};

export default Header;
