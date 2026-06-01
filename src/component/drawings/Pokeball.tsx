export default function Pokeball() {
  return (
    <div className="pokeball w-20 h-20 relative">
      <div className="top bg-red-600 w-full h-10 rounded-t-full border-5 border-gray-600"></div>

      <div className="middle relative ">
        <div className="line absolute ml-[1%] w-[98%] bg-gray-600 h-3 top-1/2 -translate-y-1/2"></div>

        <div className="button relative">
          <div className="outside absolute w-7 h-7 bg-white top-1/2 left-1/2 -translate-1/2 rounded-full border-3 border-gray-600"></div>
          <div className="inside absolute w-4 h-4 top-1/2 left-1/2 -translate-1/2 rounded-full border border-gray-300"></div>
        </div>
      </div>

      <div className="bottom bg-white w-full h-10 rounded-b-full border-5 border-gray-600"></div>
    </div>
  );
}
