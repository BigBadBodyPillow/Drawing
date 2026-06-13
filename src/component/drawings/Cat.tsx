export default function Cat() {
  return (
    <div className="cat w-20 h-20 relative">
      <div className="ears">
        <div className="ear-left absolute -left-2.5 -top-2 w-0 h-0 border-l-20 border-r-20 border-b-30 border-l-transparent border-r-transparent border-b-orange-300 -rotate-33"></div>
        <div className="ear-right absolute -right-2.5 -top-2 w-0 h-0 border-l-20 border-r-20 border-b-30 border-l-transparent border-r-transparent border-b-orange-300 rotate-33"></div>
      </div>
      <div className="head bg-orange-300 w-full h-full rounded-full relative">
        <div className="face">
          <div className="eyes mx-4 w-12 absolute flex justify-between top-6">
            <div className="left-eye w-3 h-3 rounded-full bg-black"></div>
            <div className="right-eye w-3 h-3 rounded-full bg-black"></div>
          </div>
          <div className="nose w-full flex justify-center absolute top-10">
            <div className="rounded-full w-2 h-2 bg-black"></div>
          </div>
          <div className="mouth w-full font-segoe-ui absolute top-13 left-[0.04em] text-4xl/0 rotate-90">
            3
          </div>
        </div>
      </div>
    </div>
  );
}
