export default function Twitch() {
  return (
    <div className="cube w-20 h-20 relative flex flex-col items-center justify-center">
      <div className="twitch w-full h-full ">
        <div className="background-top w-22 h-14 bg-[#9147ff] absolute -top-2 -left-4"></div>
        <div className="background-bottom w-14.5 h-7.75 bg-[#9147ff] absolute top-12 -left-4"></div>
        <div className="background-45deg-on-right w-7 h-11 bg-[#9147ff] absolute top-8 right-4.75 rotate-45"></div>
        <div className="logo-shadow drop-shadow-[-7px_14px_0_#9147ff] w-full h-full">
          <div
            className="logo bg-white  w-full h-full relative z-20"
            style={{
              clipPath:
                "polygon(0% 0%, 80% 0,80% 60%, 60% 80%,40% 80%,20% 95%,20% 80%, 0% 80%)",
            }}
          >
            <div className="eyes w-7 h-5  absolute left-5 top-5 flex justify-between">
              <div className="left w-2 h-full bg-[#9147ff]"></div>
              <div className="right w-2 h-full bg-[#9147ff]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 9147ff
