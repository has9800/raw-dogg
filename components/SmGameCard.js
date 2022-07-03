import Image from "next/image";

function SmGameCard({}) {
  return (
    <div className="flex flex-col bg-neutral-800 m-5 rounded-lg w-80">
      <div className="bg-gradient-to-b from-violet-500 to-indigo-700 to bg-purple-900 h-40 rounded-t-lg">
        {/* <Image src="" alt="" objectFit="" /> */}
        Game cover
      </div>
      <div className="h-20">
        <h1>Game Title</h1>
      </div>
    </div>
  );
}

export default SmGameCard;
