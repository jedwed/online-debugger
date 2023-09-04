import { WrenchIcon, BugAntIcon } from '@heroicons/react/24/solid';

function Toolbar({
  handleCompile,
  loading,
}: {
  handleCompile: () => void;
  loading: boolean;
}) {
  return (
    <div className="flex h-12 border-b border-gray-200">
      <button
        className={`text-white rounded px-2 py-2 mx-2 my-2 inline-flex items-center ${
          loading
            ? 'bg-blue-200 cursor-not-allowed'
            : 'bg-blue-400 hover:bg-blue-500 active:bg-blue-600 '
        }`}
        type="button"
        disabled={loading}
        onClick={handleCompile}
      >
        <WrenchIcon className="h-4 w-4" />
        <span>Compile & Run</span>
      </button>

      <button
        className={`text-white rounded px-2 py-2 mx-2 my-2 inline-flex items-center ${
          loading
            ? 'bg-blue-200 cursor-not-allowed'
            : 'bg-blue-400 hover:bg-blue-500 active:bg-blue-600 '
        }`}
        type="button"
        disabled={loading}
        onClick={handleCompile}
      >
        <BugAntIcon className="h-4 w-4" />
        <span>Debug</span>
      </button>
    </div>
  );
}

export default Toolbar;
