import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
function Navbar() {
  return (
    <div className=" sticky z-30    top-0  flex items-center justify-between px-4 md:px-6 py-4">
      <div className="self-center">
        <Link href="/" className="text-white text-3xl  font-semibold">
          typed.ai
        </Link>
      </div>
      <div className="self-centr">
        <SignOutButton>
          <button className="px-4 py-2 bg-pink-500 text-white font-bold rounded shadow-sm shadow-rose-600 hover:shadow-md hover:shadow-pink-700">
            Logout
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}

export default Navbar;
