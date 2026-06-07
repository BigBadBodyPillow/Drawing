export default function Shark() {
  return (
    <div className="relative flex items-center justify-center">
      <svg width="0" height="0">
        <defs>
          <clipPath id="head-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0 0.7 Q 0.5 0 1 0 L 1 1 L 0.6 1 Q 0.2 1.1 0 0.7 Z" />
          </clipPath>
          <clipPath id="body-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 Q 0.5 0 1 0.45 L 1 0.75 Q 0.4 1 0 1 Z" />
          </clipPath>
          <clipPath id="big-fin-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0 1 Q 0.2 0.2 1 0 Q 0.8 0.5 1 1 Z" />
          </clipPath>
          <clipPath id="small-fin-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0 1 Q 0.2 0.2 1 0 L 1 1 Z" />
          </clipPath>
          <clipPath id="tail-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0 0.48 Q 0.4 0.2 1 0.05 Q 0.6 0.45 0.4 0.6 Q 0.55 0.7 0.66 0.9 Q 0.05 0.7 0 0.61 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="head w-13 h-7 bg-cyan-600 relative"
        style={{ clipPath: "url(#head-clip)" }}
      >
        <div className="eye w-1 h-1 rounded-full bg-black absolute top-2.5 left-5"></div>
        <div className="mouth w-5 h-0.5 bg-black absolute top-6 -rotate-12"></div>
      </div>
      <div
        className="body w-20 h-7 bg-cyan-600"
        style={{ clipPath: "url(#body-clip)" }}
      ></div>
      <div
        className="top-big-fin w-5 h-5 bg-cyan-600 absolute -top-1 left-13"
        style={{ clipPath: "url(#big-fin-clip)" }}
      ></div>
      <div
        className="top-small-back-fin w-2 h-1.5 bg-cyan-600 absolute top-4.75 right-9"
        style={{ clipPath: "url(#small-fin-clip)" }}
      ></div>
      <div
        className="side-fin w-4 h-7 bg-cyan-600 absolute top-8 left-11 rotate-156 scale-x-[-1]"
        style={{ clipPath: "url(#big-fin-clip)" }}
      ></div>
      <div
        className="side-behind-fin w-4 h-7 bg-cyan-600 absolute top-6 left-14 rotate-156 scale-x-[-1]"
        style={{ clipPath: "url(#big-fin-clip)" }}
      ></div>
      <div
        className="small-side-back-fin w-3 h-4 bg-cyan-600 absolute top-7.5 right-11 rotate-156 scale-x-[-1]"
        style={{ clipPath: "url(#big-fin-clip)" }}
      ></div>
      <div
        className="tail w-7 h-14 bg-cyan-600"
        style={{ clipPath: "url(#tail-clip)" }}
      ></div>
    </div>
  );
}
