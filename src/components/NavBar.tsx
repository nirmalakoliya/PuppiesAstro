export default function NavBar() {
  return (
    <>
      <div className="border-t-4 border-purple-600">
        <div className="flex items-center justify-between bg-white p-3 shadow-md">
          <div className="hidden space-x-8 sm:flex">
            <a href="#" className="font-medium text-black">
              Our Puppies
            </a>
            <a href="#" className="font-medium text-black">
              Financing
            </a>
            <a href="/#AboutUs" className="font-medium text-black">
              About Us
            </a>
          </div>

          <a href="#">
            <div className="flex justify-center text-center">
              <img
                src="/Images/Logo.png"
                alt="Puppies Logo"
                className="h-[80px] w-[80px] sm:h-[80px] sm:w-[80px]"
              />
            </div>
          </a>

          <div className="flex space-x-8">
            <span className="font-medium text-black">(855) 775-0552</span>
            <div className="sm:hidden">
              <button className="font-medium text-black">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <a href="#" className="hidden font-medium text-black sm:block">
              Contact us
            </a>
            <a href="#" className="hidden font-medium text-black sm:block">
              Our Locations
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
