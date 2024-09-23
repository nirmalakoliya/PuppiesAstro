import { GiSniffingDog } from "react-icons/gi";

export default function DogVideo() {
  return (
    <>
      <section className="relative top-1 flex h-[60vh] flex-col items-center justify-center px-4 py-0 text-center text-white">
        <div className="video-docker absolute inset-0 left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 transform object-cover"
            autoPlay
            muted
            loop
          >
            <source
              src="https://videos.pexels.com/video-files/3144446/3144446-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1254 542"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden h-[100%] w-[100%] bg-black bg-opacity-60 md:h-[100%] md:w-full xl:block"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1254 0H0V542H1254V0ZM266 101C282 1.99984 487 1.49983 504 101C520 1.99991 725 1.49976 742 101C758 1.99984 963 1.49983 980 101C996 1.99991 1201 1.49985 1218 101V443.562C1201 543.062 996 542.562 980 443.562C963 543.062 758 542.562 742 443.562C725 543.062 520 542.562 504 443.562C487 543.062 282 542.562 266 443.562C249 543.062 44 542.562 28 443.562V100.999C44 1.9995 249 1.49976 266 101Z"
                fill="rgba(243, 239, 230, 1)"
              />
            </svg>

            <svg
              width="1279px"
              height="563px"
              viewBox="0 0 1279 563"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden h-full w-full bg-black bg-opacity-60 lg:block xl:hidden"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 1278.886719 0 L 0.113281 0 L 0.113281 562.667969 L 1278.886719 562.667969 Z M 337.566406 104.851562 C 357.867188 2.074219 617.933594 1.558594 639.5 104.851562 C 659.796875 2.074219 919.863281 1.554688 941.433594 104.851562 C 961.730469 2.074219 1221.796875 1.558594 1243.363281 104.851562 L 1243.363281 460.476562 C 1221.796875 563.769531 961.730469 563.25 941.433594 460.476562 C 919.863281 563.769531 659.796875 563.25 639.5 460.476562 C 617.933594 563.769531 357.867188 563.25 337.566406 460.476562 C 316 563.769531 55.933594 563.25 35.636719 460.476562 L 35.636719 104.851562 C 55.933594 2.074219 316 1.554688 337.566406 104.851562 Z M 337.566406 104.851562"
                fill="rgba(243, 239, 230, 1)"
              />
            </svg>

            <svg
              width="1023px"
              height="562px"
              viewBox="0 0 1023 562"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden h-full w-full bg-black bg-opacity-60 md:block lg:hidden"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 1023 0 L 0 0 L 0 562 L 1023 562 Z M 353.398438 104.726562 C 374.65625 2.074219 647.015625 1.554688 669.601562 104.726562 C 690.855469 2.074219 963.214844 1.554688 985.800781 104.726562 L 985.800781 459.929688 C 963.214844 563.101562 690.855469 562.582031 669.601562 459.929688 C 647.015625 563.101562 374.65625 562.582031 353.398438 459.929688 C 330.8125 563.101562 58.457031 562.582031 37.199219 459.929688 L 37.199219 104.726562 C 58.457031 2.074219 330.8125 1.554688 353.398438 104.726562 Z M 353.398438 104.726562 "
                fill="rgba(243, 239, 230, 1)"
              />
            </svg>

            <svg
              width="766px"
              height="562px"
              viewBox="0 0 766 562"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block h-full w-full bg-black bg-opacity-60 md:hidden"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 1106.605469 0 L 0 0 L 0 562 L 1106.605469 562 Z M 382.28125 104.726562 C 405.277344 2.074219 699.890625 1.554688 724.324219 104.726562 L 724.324219 459.929688 C 699.890625 563.101562 405.277344 562.582031 382.28125 459.929688 C 357.851562 563.101562 63.234375 562.582031 40.238281 459.929688 L 40.238281 104.726562 C 63.234375 2.074219 357.851562 1.554688 382.28125 104.726562 Z M 382.28125 104.726562 "
                fill="rgba(243, 239, 230, 1)"
              />
            </svg>
          </div>
        </div>

        <div className="video-content z-10 space-y-4">
          <h1 className="FontTwo mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            OUR PUPPIES FOR <br /> SALE FROM
            <span className="text-purple-500"> $495!</span>
          </h1>

          <div className=" FontThree flex justify-center">
            <button className="flex items-center justify-center rounded-full bg-white px-6 py-2 text-lg text-black shadow-md transition duration-300 hover:bg-purple-500 hover:text-white">
              Puppy deals <GiSniffingDog size={30} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
