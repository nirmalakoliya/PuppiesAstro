import { GiSniffingDog } from "react-icons/gi";

export default function DogVideo() {
  return (
    <>
      <section className=" relative top-1 flex h-screen flex-col items-center justify-center px-4 py-0 text-center text-white">
        <div className="video-docker absolute inset-0 h-full w-full overflow-hidden">
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
          <img
            src="/Images/Wave2.png"
            alt="wave"
            style={{ transform: "scaleY(-1)" }}
            className="WaveImage"
          />
        </div>

        <div className="video-content z-10 space-y-4">
          <h1 className="dogvideofont mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            OUR PUPPIES FOR <br /> SALE FROM
            <span className="text-purple-500"> $495!</span>
          </h1>

          <div className=" PuppyDealsFonts flex justify-center">
            <button className="flex items-center justify-center rounded-full bg-white px-6 py-2 text-lg text-black shadow-md transition duration-300 hover:bg-purple-500 hover:text-white">
              Puppy deals <GiSniffingDog size={30} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
