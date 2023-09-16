import { BugAntIcon } from '@heroicons/react/24/solid';

function Navbar() {
  return (
    <nav className="flex h-16 border-b border-gray-200 py-4 px-6">
      <div className="container flex items-center">
        <BugAntIcon className="h-8 w-8" />
        <h1 className="text-3xl font-semibold">Online Debugger</h1>
      </div>
    </nav>
  );
}

export default Navbar;
