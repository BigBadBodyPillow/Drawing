export default function Youtube() {
  return (
    <div className="youtube w-26 h-18 bg-red-600 rounded-2xl flex items-center justify-center relative">
      <div
        className="play-button absolute left-10 bg-white w-7 h-6 clip-path-[circle(50%_at_50%_50%)]"
        style={{ clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)" }}
      ></div>
    </div>
  );
}
