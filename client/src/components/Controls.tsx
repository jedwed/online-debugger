import { ForwardIcon, BackwardIcon } from '@heroicons/react/24/solid';

function Controls({
  currIndex,
  numOfStates,
  handleSetCurrIndex,
}: {
  currIndex: number;
  numOfStates: number;
  handleSetCurrIndex: (newIndex: number) => void;
}) {
  const backwardDisabled = currIndex <= 0;
  const forwardDisabled = currIndex >= numOfStates - 1;
  return (
    <div className="flex h-12 border-b border-gray-200 items-center">
      <button
        className={`text-white rounded p-2 m-2 inline-flex items-center ${
          backwardDisabled
            ? 'bg-blue-200 cursor-not-allowed'
            : 'bg-blue-400 hover:bg-blue-500 active:bg-blue-600 '
        }`}
        type="button"
        disabled={backwardDisabled}
        onClick={() => handleSetCurrIndex(Math.max(0, currIndex - 1))}
      >
        <BackwardIcon className="h-4 w-4" />
      </button>

      <button
        className={`text-white rounded p-2 m-2 inline-flex items-center ${
          forwardDisabled
            ? 'bg-blue-200 cursor-not-allowed'
            : 'bg-blue-400 hover:bg-blue-500 active:bg-blue-600 '
        }`}
        type="button"
        disabled={forwardDisabled}
        onClick={() =>
          handleSetCurrIndex(Math.min(currIndex + 1, numOfStates - 1))
        }
      >
        <ForwardIcon className="h-4 w-4" />
      </button>
      <span className="p-2 m-2">
        {currIndex}/{numOfStates - 1}
      </span>
    </div>
  );
}

export default Controls;
