export default function Apple() {
  return (
    <div className="w-20 h-20 relative flex flex-col items-center justify-center">
      <div className="w-18 h-18 rounded-full bg-lime-400 relative">
        <div
          className="stem-indent w-4 h-4  rounded-full absolute left-7.75  top-1 "
          style={{
            background: "radial-gradient(circle, #008236 15%, #9ae600 40%)",
          }}
        ></div>
        <div
          className="stem h-7 w-1 absolute left-10 -top-4 rotate-12"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, oklch(41.4% 0.112 45.904) 70%,oklch(52.7% 0.154 150.069))",
          }}
        ></div>
        <div
          className="leaf bg-green-700 w-6 h-4 absolute left-4 -top-2 -rotate-35"
          style={{
            clipPath:
              "shape(from 0 50%,vline to 0, hline to 50%, curve to 100% 50% with 100% 0, vline to 100%, hline to 50%, curve to 0 50% with 0% 100%",
          }}
        ></div>
      </div>
      <div
        className="bg-zinc-900  absolute -bottom-3 w-full h-5"
        style={{
          clipPath:
            "shape( from 0% 0%,  arc to 50% 0% of 75%, arc to 100% 0% of 75%, line to 100% 100%, line to 0 100%",
        }}
      ></div>
    </div>
  );
}
