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
            {/* SVG for Big Screens */}
            <svg
              width="1254"
              height="542"
              viewBox="0 0 1254 542"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden h-full w-full xl:block"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1254 0H0V542H1254V0ZM266 101C282 1.99984 487 1.49983 504 101C520 1.99991 725 1.49976 742 101C758 1.99984 963 1.49983 980 101C996 1.99991 1201 1.49985 1218 101V443.562C1201 543.062 996 542.562 980 443.562C963 543.062 758 542.562 742 443.562C725 543.062 520 542.562 504 443.562C487 543.062 282 542.562 266 443.562C249 543.062 44 542.562 28 443.562V100.999C44 1.9995 249 1.49976 266 101Z"
                fill="rgba(243, 239, 230, 1)"
              />
            </svg>

            {/* SVG for Laptop Screens */}
            <svg
              width="1008"
              height="542"
              viewBox="0 0 1008 542"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden h-full w-full lg:block xl:hidden"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1008 0H0V542H1008V0ZM266 101C282 1.99976 487 1.49975 504 101C520 1.99982 725 1.49968 742 101C758 1.99976 963 1.49984 980 101V443.562C963 543.062 758 542.562 742 443.562C725 543.062 520 542.562 504 443.562C487 543.062 282 542.562 266 443.562C249 543.062 44 542.562 28 443.562V100.999C44 1.99942 249 1.49968 266 101Z"
                fill="#FF3030"
              />
            </svg>

            {/* SVG for Tablet Screens */}
            <svg
              width="770"
              height="542"
              viewBox="0 0 770 542"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden h-full w-full md:block lg:hidden"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M770 0H0V542H770V0ZM266 101C282 1.99976 487 1.49975 504 101C520 1.99982 725 1.49968 742 101V443.562C725 543.062 520 542.562 504 443.562C487 543.062 282 542.562 266 443.562C249 543.062 44 542.562 28 443.562V100.999C44 1.99942 249 1.49968 266 101Z"
                fill="#FF3030"
              />
            </svg>

            {/* SVG for Small Mobile Screens */}
            <svg
              width="533"
              height="542"
              viewBox="0 0 533 542"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block h-full w-full md:hidden"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M770 0H0V542H770V0ZM266 101C282 1.99976 487 1.49975 504 101V443.562C487 543.062 282 542.562 266 443.562C249 543.062 44 542.562 28 443.562V100.999C44 1.99942 249 1.49968 266 101Z"
                fill="#FF3030"
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
