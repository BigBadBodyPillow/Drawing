export default function Shark() {
  return (
    <div className="relative flex items-center justify-center gap0">
      <div
        className="head w-13 h-7 bg-cyan-600 relative"
        style={{
          clipPath:
            "shape(from 0 70%, curve to 100% 0 with 50% 0, hline to 100% , vline to 100%, hline to 60%, curve to 0 70% with 20% 110%)",
        }}
      >
        <div className="eye w-1 h-1 rounded-full bg-black absolute top-2.5 left-5"></div>
        <div className="mouth w-5 h-0.5 bg-black absolute top-6 -rotate-12"></div>
      </div>
      <div
        className="body w-20 h-7 bg-cyan-600 "
        style={{
          clipPath:
            "shape(from 0 0, curve to 100% 45% with 50% 0, vline to 75%, curve to 0 100% with 40% 100% ",
        }}
      ></div>
      <div
        className="top-big-fin w-5 h-5 bg-cyan-600 absolute -top-1 left-13"
        style={{
          clipPath:
            "shape(from 0 100%, curve to 100% 0 with 20% 20%, curve to 100% 100% with 80% 50%)",
        }}
      ></div>
      <div
        className="top-small-back-fin w-2 h-1.5 bg-cyan-600 absolute top-4.75 right-9 "
        style={{
          clipPath:
            "shape(from 0 100%, curve to 100% 0 with 20% 20%, vline to 100%)",
        }}
      ></div>
      <div
        className="side-fin w-4 h-7 bg-cyan-600  absolute top-8 left-11 rotate-156 scale-x-[-1]"
        style={{
          clipPath:
            "shape(from 0 100%, curve to 100% 0 with 20% 20%, curve to 100% 100% with 80% 50%)",
        }}
      ></div>
      <div
        className="side-behind-fin w-4 h-7 bg-cyan-600  absolute top-6 left-14 rotate-156 scale-x-[-1]"
        style={{
          clipPath:
            "shape(from 0 100%, curve to 100% 0 with 20% 20%, curve to 100% 100% with 80% 50%)",
        }}
      ></div>
      <div
        className="small-side-back-fin w-3 h-4 bg-cyan-600 absolute top-7.5 right-11 rotate-156 scale-x-[-1]"
        style={{
          clipPath:
            "shape(from 0 100%, curve to 100% 0 with 20% 20%, curve to 100% 100% with 80% 50%)",
        }}
      ></div>
      <div
        className="tail w-7 h-14 bg-cyan-600 "
        style={{
          clipPath:
            "shape(from 0 48%,curve to 100% 5% with 40% 20%, curve to 40% 60% with 60% 45%, curve to 66% 90% with 55% 70%, curve to 0 61% with 5% 70%)",
          // "shape(from 0 48%,curve to 100% 5% with 40% 20%, curve to 40% 60% with 60% 45%, line to 66% 90%, line to 0 63%)",
          // "shape(from 0 45%,curve to 100% 0 with 0 30%, curve to 80% 100% with 20% 60%, curve to 0 65% with 80% 100%)",
        }}
      ></div>
    </div>
  );
}
