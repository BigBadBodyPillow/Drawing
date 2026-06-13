export default function Bread() {
  return (
    <div className=" w-full h-20 flex items-center justify-center">
      <div className="toast scale-x-120">
        <svg
          viewBox="0 0 120 140"
          width="100"
          height="100"
          fill="#f4d19b"
          stroke="#a67c52"
          stroke-width="6"
        >
          <path
            d="
            M 25,60
            A 20,20 0 0 1 60,20
            A 20,20 0 0 1 100,60
            L 97,80
            L 100,120
            Q 100,130 90,130
            Q 60,126 30,130
            Q 20,130 20,120
            Z"
          />
        </svg>
      </div>
    </div>
  );
}
