export default function Deadlock() {
  return (
    <div className="deadlock w-30 h-30 relative bg-[#efdebf] rounded-full flex items-center justify-center">
      <div className="crosshairs w-full h-full relative z-10">
        <div className="vertical w-1 h-full absolute inset-x-0 mx-auto bg-[#231f20]"></div>
        <div className="horizontal w-full h-1 absolute inset-y-0 my-auto bg-[#231f20]"></div>
      </div>

      <div className="ring w-25 h-25  absolute inset-0 m-auto border-2 border-[#231f20] rounded-full z-10">
        <div className="crosshairs w-full h-full relative z-10 rotate-45">
          <div className="vertical w-1 h-full absolute inset-x-0 mx-auto bg-[#231f20]"></div>
          <div className="horizontal w-full h-1 absolute inset-y-0 my-auto bg-[#231f20]"></div>
        </div>

        <div className="notch-top-left w-4 h-4 absolute rotate-45 top-1/5 left-1/5 -translate-x-1/2 -translate-y-1/2 z-11 ">
          <svg viewBox="0 0 4 4">
            <path
              d="
                M 0 0 
                L 0.2 0
                Q 2 2 4 1.5 
                L 4 2.5
                Q 2 2 0.2 4 
                L 0 4
                Z"
              fill="#231f20"
            />
          </svg>
        </div>
        <div className="notch-top-right  w-4 h-4 absolute rotate-135 top-1/5 left-4/5 -translate-x-1/2 -translate-y-1/2 z-11 ">
          <svg viewBox="0 0 4 4">
            <path
              d="
                M 0 0 
                L 0.2 0
                Q 2 2 4 1.5 
                L 4 2.5
                Q 2 2 0.2 4 
                L 0 4
                Z"
              fill="#231f20"
            />
          </svg>
        </div>

        <div className="notch-bottom-left w-4 h-4 absolute -rotate-45 top-4/5 left-1/5 -translate-x-1/2 -translate-y-1/2 z-11 ">
          <svg viewBox="0 0 4 4">
            <path
              d="
                M 0 0 
                L 0.2 0
                Q 2 2 4 1.5 
                L 4 2.5
                Q 2 2 0.2 4 
                L 0 4
                Z"
              fill="#231f20"
            />
          </svg>
        </div>
        <div className="notch-bottom-right w-4 h-4 absolute -rotate-135 top-4/5 left-4/5 -translate-x-1/2 -translate-y-1/2 z-11 ">
          <svg viewBox="0 0 4 4">
            <path
              d="
                M 0 0 
                L 0.2 0
                Q 2 2 4 1.5 
                L 4 2.5
                Q 2 2 0.2 4 
                L 0 4
                Z"
              fill="#231f20"
            />
          </svg>
        </div>
      </div>

      <div className="eye w-18 h-10 absolute inset-0 m-auto z-20">
        <svg viewBox="0 0 18 10">
          <path
            d="
            M 0 5
            L 4 2
            Q 9 -2 14 2
            L 18 5 
            L 14 8 
            Q 9 12 4 8
            Z"
            fill="#231f20"
          />
        </svg>
        <div className="cornea w-7.5 h-7.5 absolute inset-0 m-auto rounded-full bg-[#efdebf] z-30">
          <div className="pupil w-5 h-5 absolute inset-0 m-auto rounded-full bg-[#231f20] z-40"></div>
        </div>
      </div>
    </div>
  );
}
