function GamesList({ children }) {
  return (
    <div className="w-full mx-auto md:w-full">
      <div className="flex flex-col items-center md:items-start p-5">
        <h1 className="text-5xl md:text-6xl font-bold">New & Trending</h1>
        <p className="mt-4 text-neutral-400 text-sm">
          New & trending games this month...
        </p>
      </div>
      <div className="flex flex-row justify-center md:justify-start flex-wrap p-5">
        {children}
      </div>
      {/* <button className="bg-red-500 flex justify-center">Load more</button> */}
    </div>
  );
}

export default GamesList;
