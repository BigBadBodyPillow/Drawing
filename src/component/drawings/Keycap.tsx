export default function Keycap() {
  return (
    <div className="w-25 h-25 flex justify-center items-center relative">
      <svg className="keycap" viewBox="0 0 1 1" width="100">
        <foreignObject width="100" height="100">
          <div
            id="sides(back)"
            style={{
              width: "1px",
              height: "1px",
              borderRadius: "10%",
              background:
                "conic-gradient(from 0deg at 50% 50%, #FFFFFFFF 9%, #D4D4D4FF 10%, #D4D4D4FF 37%, #C2C2C2FF 39%, #C2C2C2FF 60%, #E1E1E1FF 63%, #E1E1E1FF 89%, #FFFFFFFF 91%, #FFFFFFFF 100%)",
            }}
          ></div>
        </foreignObject>
        <g
          fill="#E1E1E1FF"
          id="top"
          stroke="url(#keycap-ring)"
          strokeWidth="0.005"
        >
          <rect x="0.15" y="0.08" width="0.7" height="0.7" rx="0.1" ry="0.1" />
        </g>

        <defs>
          <linearGradient id="keycap-ring" gradientTransform="rotate(45)">
            <stop offset="60%" stop-color="white" />
            <stop offset="1000%" stop-color="#C2C2C2FF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="letter absolute top-3.5 text-4xl font-segoe-ui text-[#474747]">
        W
      </div>
    </div>
  );
}
