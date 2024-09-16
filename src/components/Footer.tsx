import { FaArrowTrendUp } from "react-icons/fa6";
import { FaSortUp, FaAngleDown } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillTikTok } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <div>
        <div className="mx-auto bg-[#FFFBF5] p-4">
          <div className="flex flex-col items-start justify-between border-b border-gray-300 pb-8 md:flex-row">
            <div className="w-full md:w-1/4">
              <h1 className="text-4xl font-bold">Forever Love Puppies</h1>
              <p className="FontOne mt-2">Where puppy love begins</p>
              <div className="mt-4 flex space-x-4">
                <BiLogoInstagramAlt className="text-2xl" />
                <AiFillTikTok className="text-2xl" />
                <SiFacebook className="text-2xl" />
                <FaSquareXTwitter className="text-2xl" />
                <IoLogoPinterest className="text-2xl" />
              </div>
              <div className="mt-8">
                <h2 className="FontOne font-bold">
                  SUBSCRIBE FOR PUPPY UPDATES
                </h2>
                <p className="FontOne mt-2">
                  Do you want to be the first to know what's happening at
                  Forever Love Puppies? Sign up here to receive exclusive
                  updates on new puppies, offers, and other fun stuff.
                </p>

                <div className="FontOne relative right-3 mt-4 flex items-center rounded border border-gray-400 p-2">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="flex-grow outline-none"
                  />
                  <button className="rounded bg-gray-200 p-2">
                    <FaArrowTrendUp />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 grid w-full grid-cols-2 gap-4 md:mt-0 md:w-3/4 md:grid-cols-4">
              <div>
                <h2 className="FontTwo font-bold">OUR PUPPIES</h2>
                <ul className="FontOne mt-4 space-y-2">
                  <li>Designer Hybrid</li>
                  <li>Purebred</li>
                  <li>All Breeds</li>
                  <li>Hypoallergenic And Low Shed</li>
                  <li>Large Sized</li>
                  <li>Medium Sized</li>
                  <li>Small Sized</li>
                  <li>New Arrival</li>
                  <li>Special Deals</li>
                </ul>
              </div>

              <div>
                <h2 className="FontTwo font-bold">ABOUT US</h2>
                <ul className="FontOne mt-4 space-y-2">
                  <li>About Us</li>
                  <li>Health Guarantee</li>
                  <li>Breeder Standards</li>
                  <li>Customer Reviews</li>
                  <li>Knowledge Center</li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h2 className="FontTwo font-bold">FINANCING</h2>
                <ul className="FontOne mt-4 space-y-2">
                  <li>Overview financing</li>
                  <li>Financing in Ft Lauderdale</li>
                  <li>Financing in Miami</li>
                  <li>Financing in North Miami</li>
                  <li>Financing in Pembroke Pines</li>
                </ul>
              </div>

              <div>
                <h2 className="FontTwo font-bold">OUR LOCATIONS</h2>
                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="FontTwo flex cursor-pointer gap-2 font-bold">
                      <FaSortUp className="relative top-2 " />
                      Ft Lauderdale
                    </h3>
                    <div className="FontOne border border-black p-1">
                      <p className="mt-2">(855) 775-0552</p>
                      <p>4157 N State Rd 7 Lauderdale Lakes, FL 33319</p>
                      <p>Every Day 11:00AM - 9:00PM</p>
                      <div className="mt-2 flex space-x-4">
                        <a
                          href="#"
                          className="flex cursor-pointer gap-1 text-blue-500"
                        >
                          Get directions
                          <FaArrowTrendUp className="relative top-1" />
                        </a>
                        <a
                          href="#"
                          className="flex cursor-pointer gap-1 text-blue-500"
                        >
                          View puppies
                          <FaArrowTrendUp className="relative top-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="FontTwo flex cursor-pointer gap-2 font-bold">
                      <FaAngleDown className="relative top-1" />
                      Miami
                    </h3>
                  </div>
                  <div>
                    <h3 className="FontTwo flex cursor-pointer gap-2 font-bold">
                      <FaAngleDown className="relative top-1" />
                      North Miami
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="FontOne mt-8 flex flex-col items-center justify-between border-t border-gray-300 pt-4 md:flex-row">
            <div className="relative bottom-11 flex space-x-8">
              <a href="#" className="text-black">
                Privacy Policy
              </a>
              <a href="#" className="text-black">
                Terms and Conditions
              </a>
            </div>
            <p className="relative bottom-11 mt-4  md:mt-0">
              © 2024 Forever Love Puppies All Rights Reserved
            </p>
          </div>

          <p className="FontOne mt-4 text-xs text-gray-600">
            ALL PUPPY PRICING, AVAILABILITY, PHOTOGRAPHY, ESTIMATED ARRIVAL
            TIMES, LOCATIONS, CURRENT WEIGHTS, REGISTRATIONS, PARENT BREED
            DESCRIPTIONS, PARENT WEIGHT INFORMATIONS AND ANY OTHER DESCRIPTIONS
            (INCLUDING BUT NOT LIMITED TO BIRTH DATE, GENDER, COLOR, BREED AND
            PHOTOGRAPHY) ARE BELIEVED TO BE ACCURATE, BUT WE DO NOT WARRANT OR
            GUARANTEE SUCH ACCURACY. TO CONFIRM PRICING, AVAILABILITY,
            PHOTOGRAPHY, WEIGHTS, PARENT DESCRIPTIONS AND ANY AND ALL OTHER
            DESCRIPTIONS OF OUR PUPPIES FOR SALE, PLEASE VISIT THE STORE IN
            PERSON TO VERIFY PRIOR TO PURCHASING. ALL COUPONS AND/OR PROMOTIONS
            AND/OR DISCOUNTS OFFERED CANNOT BE COMBINED OR STACKED. ALL
            PROMOTIONS AND/OR COUPONS AND/OR DISCOUNTS MUST BE CLAIMED AND
            PRESENTED TO YOUR PUPPY COUNSELOR AT TIME OF PURCHASE IN STORE ONLY.
            ALL OFFERS OR FREE PROMOTIONS OR FREE INCLUSIONS ON THIS WEBSITE ARE
            SUBJECT TO CHANGE AT ANYTIME, WITH OR WITHOUT NOTICE. AND MAY OR MAY
            NOT BE INCLUDED AT TIME OF SALE DEPENDING ON THE TIMING AND UNIQUE
            CIRCUMSTANCE OF YOUR PARTICULAR PUPPY PURCHASE. FOR THE COMPLETE
            WRITTEN LISTING OF TERMS, CONDITIONS, FREE SERVICES, FREE PRODUCTS,
            WARRANTIES, REPRESENTATIONS, PUPPY DESCRIPTIONS,
          </p>
        </div>
      </div>
    </>
  );
}
