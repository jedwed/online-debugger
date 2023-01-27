import { BugAntIcon } from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <nav className="flex h-12 border-b border-gray-200 py-4 px-6">
      <div className="container flex items-center">
        <BugAntIcon className="h-6 w-6" />
        <span className="text-xl font-semibold">Online Debugger</span>
      </div>
    </nav>
  );
}

export default Navbar;
