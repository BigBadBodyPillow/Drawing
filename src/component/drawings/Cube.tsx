export default function Cube() {
  return (
    <div className="cube w-20 h-20 relative flex flex-col items-center justify-center">
      <div className="top w-15 h-15 absolute -top-6 rotate-z-45 rotate-x-75 bg-gray-300 "></div>
      <div className="flex items-center justify-center">
        <div className="left w-15 h-15 absolute top-2.5 right-7.75  bg-gray-200 rotate-y-45 rotate-x-15"></div>
        <div className="right w-15 h-15 absolute  top-2.5  left-7.75  bg-slate-100 rotate-y-45 -rotate-x-15"></div>
      </div>
    </div>
  );
}
