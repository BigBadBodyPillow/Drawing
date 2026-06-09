export default function Saturn() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <svg width="0" height="0">
        <defs>
          <clipPath id="rings" clipPathUnits="objectBoundingBox">
            <path d="M 0.28 0.4  Q -0.15 0.5 0.17 0.75 C 0.5 0.9 0.5 0.9 0.83 0.75 Q 1.15 0.5 0.72 0.4 L 0.725 0.5 Q 0.9 0.55 0.8 0.6 C 0.5 0.7  0.5 0.7 0.2 0.6 Q 0.1 0.53 0.275 0.5 Z " />
            {/* <path d="M 0.16 0.4  Q -0.15 0.5 0.17 0.75 C 0.5 0.9 0.5 0.9 0.83 0.75 Q 1.15 0.5 0.84 0.4 Q 0.85 0.55 0.8 0.6 C 0.5 0.7  0.5 0.7 0.2 0.6 Q 0.15 0.55 0.16 0.4  " /> */}
          </clipPath>
        </defs>
      </svg>

      <div
        className="planet w-10 h-10 rounded-full "
        style={{
          background:
            "linear-gradient(180deg,rgba(255, 236, 217, 1) 0%, rgba(189, 175, 161, 1) 13%, rgba(250, 217, 200, 1) 27%, rgba(255, 209, 179, 1) 38%, rgba(242, 222, 201, 1) 54%, rgba(245, 218, 193, 1) 69%, rgba(255, 255, 255, 1) 83%, rgba(255, 236, 217, 1) 100%)",
        }}
      ></div>
      <div
        className="rings w-22 h-10 absolute rotate-12  bg-cyan-400"
        style={{
          clipPath: "url(#rings)",
          backgroundSize: "100% 112%",
          backgroundPosition: "0px 0px",
          background:
            "radial-gradient(50% 25% at 50% 55%, #00000000 0%, #00000000 48%, #00000000 59%, #BABABA 65%, #00000000 70%, #FFFFFF 70%, #FFFFFF 74%, #00000000 76%, #FFE1B5 81%, #FFE1B5 84%, #00000000 89%, #BABAE0 94%, #BABAE0 100%)",
        }}
      ></div>
    </div>
  );
}
