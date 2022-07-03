/* eslint-disable @next/next/no-img-element */

function SmGameCard({ bgImg, title, rating }) {
  return (
    <div
      className="flex flex-col bg-neutral-800 m-5 rounded-lg w-80 hover:transition hover:ease-in-out 
      hover:scale-105 cursor-pointer hover:ring-2 hover:ring-violet-500"
    >
      <div className="relative h-40 rounded-t-lg text-center">
        <img
          src={bgImg}
          alt={title}
          className="overflow-hidden h-full w-full rounded-t-lg"
        />
      </div>
      <div className="h-20 p-5">
        <div className="flex flex-row justify-between items-start mb-3 -mt-3">
          <h1 className="text-sm font-bold tracking-wide">{title}</h1>
          <p className="text-xs bg-gradient-to-b from-indigo-500 to-violet-800 rounded-md p-1">
            {rating}
          </p>
        </div>
        <div className="flex flex-row justify-between items-start mt-5">
          <h1 className="text-xs font-thin">PC - PS4 - PS5 - Xbox</h1>
          {/* <p className="text-xs">{rating}</p> */}
        </div>
      </div>
    </div>
  );
}

export default SmGameCard;

// bg-gradient-to-b from-violet-500 to-indigo-700 to bg-purple-900
