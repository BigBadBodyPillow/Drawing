export default function Arrow() {
  return (
    <div className=" w-full h-20 flex items-center justify-center">
      <svg
        className="arrow"
        viewBox="0 0 1 1"
        width="120"
        preserveAspectRatio="none"
      >
        <path
          d="
           M 0.5 0.1
           Q 0.8 0.6 0.9 0.9
           Q 0.5 0.8 0.1 0.9
           Q 0.2 0.6 0.5 0.1
           Z"
          fill="white"
          stroke="white"
          stroke-width="0.04"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}
