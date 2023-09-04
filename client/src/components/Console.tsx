function Console({
  consoleOutput,
  error,
}: {
  consoleOutput: string;
  error: boolean;
}) {
  return (
    <div className="border-t border-gray-200 overflow-y-auto h-[35%]">
      <pre className={`font-mono m-4 ${error && 'text-red-600'}`}>
        {consoleOutput}
      </pre>
    </div>
  );
}

export default Console;
