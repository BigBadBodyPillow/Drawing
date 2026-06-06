export default function Apple() {
  return (
    <div className="w-20 h-20 relative flex flex-col items-center justify-center">
      <div className="w-18 h-18 rounded-full bg-lime-400 relative">
        <div className="stem bg-amber-900 h-10 w-2 absolute left-10 -top-4 rotate-12"></div>
        <div className="leaf bg-green-700 w-8 h-6 absolute left-3.5 -top-2 -rotate-15"></div>
      </div>
      <div
        className="bg-zinc-900  absolute -bottom-3 w-full h-5"
        style={{
          clipPath:
            "shape( from 0% 0%,  arc to 50% 0% of 75%, arc to 100% 0% of 75%, line to 100% 100%, line to 0 100%",
          // "shape( from 0% 0%,  line to 100% 0%,  line to 100% 80%, arc to 0% 80% of 50%, close",
        }}
      ></div>
    </div>
  );
}
