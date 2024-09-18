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
              preserveAspectRatio="none"
              viewBox="0 0 940 700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[170%] w-[250%] bg-black bg-opacity-60 md:h-[170%] md:w-full"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M940 0H0V70C0 35 39 0.5 94 0.5C149 0.5 188 34.7482 188 70C188 35 227 0.5 282 0.5C337 0.5 376 34.7482 376 70C376 35 415 0.5 470 0.5C525 0.5 564 34.7482 564 70C564 35 603 0.5 658 0.5C713 0.5 752 34.7482 752 70C752 35 791 0.5 846 0.5C901 0.5 940 34.7482 940 70V0ZM940 343C940 378.252 901 412.5 846 412.5C791 412.5 752 378 752 343C752 378.252 713 412.5 658 412.5C603 412.5 564 378 564 343C564 378.252 525 412.5 470 412.5C415 412.5 376 378 376 343C376 378.252 337 412.5 282 412.5C227 412.5 188 378 188 343C188 378.252 149 412.5 94 412.5C39 412.5 0 378 0 343V413H940V343Z"
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
