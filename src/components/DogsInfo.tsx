export default function DogsInfo() {
  return (
    <>
      {/* Add space at the top */}
      <div className="mt-16"></div>

      {/* Sticky Image, hidden on small screens */}
      <div className="sticky top-0 mb-[-15rem] hidden h-64 w-96 sm:block">
        <img
          src="/Images/DogInfo.png"
          alt="Illustration of a playful puppy"
          className="relative left-5 top-12 h-64 w-64 md:h-auto md:w-auto"
        />
      </div>

      {/* Section 1 */}
      <section className="bg-[#F4F4F4] p-8 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex md:flex-row">
            {/* Text content */}
            <div className="flex flex-col md:ml-auto md:w-[71%]">
              {/* First info section */}
              <div className="mb-16">
                <h1 className="mb-6 text-4xl font-bold">PUPPIES FOR SALE</h1>
                <h2 className="mb-4 text-2xl font-bold">
                  WANT A FURRY COMPANION? OUR PUPPIES FOR SALE ARE HERE!
                </h2>
                <p className="mb-4">
                  At Forever Love Puppies, we understand how discovering the
                  right furry friend can change your life in the most delightful
                  ways. Look no further than our wide range of cute puppies for
                  sale, all of which are full of endless energy and love.
                </p>
                <p className="mb-4">
                  We take great care of our puppies and ensure they are healthy,
                  happy, and ready to become a beloved part of your family. We
                  have the right puppy for your lifestyle and tastes, whether
                  you want a playful friend, a loyal friend, or a cuddly
                  confidant.
                </p>
                <p className="mb-6">
                  Look at our puppies for sale to find the happiness only a dog
                  can bring: a love that lasts a lifetime. Come on a delightful
                  journey with Forever Love Puppies, where every moving tail
                  means endless happiness and friendship.
                </p>
                <p className="mb-4 ">
                  Are you worried about allergies but love puppies? Forever Love
                  Puppies has a large selection of hypoallergenic puppies that
                  are great for families with sensitive pets. Some of our
                  breeds, like Poodles, Bichon Frises, and Maltese, are known
                  for having bodies that dont shed much, which makes them great
                  puppies for people with allergies.
                </p>

                <p className="mb-4 ">
                  You dont have to think about allergic reactions when you have
                  a puppy. We carefully breed and care for each hypoallergenic
                  dog so that they will be a healthy, happy, and loving addition
                  to your family. Find your right hypoallergenic friend and
                  enjoy the joy of having a furry friend without the sneezes.
                </p>

                <p className="mb-4">
                  We are committed to honestly breeding our puppies and making
                  sure they are healthy and happy. The health and happiness of
                  our puppies come first when we breed them. We focus on
                  responsible breeding, training, and full health checks. Every
                  puppy grows up in a loving home and gets the best care and
                  attention.
                </p>
                <button className="rounded border border-black bg-white px-4 py-2 shadow hover:bg-gray-100">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#FAF0E6] p-8 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex md:flex-row">
            {/* Text content */}
            <div className="flex flex-col md:ml-auto md:w-[71%]">
              {/* Second info section */}
              <div>
                <h1 className="mb-6 text-4xl font-bold">PUPPIES FOR SALE</h1>
                <h2 className=" mb-4 text-2xl font-bold">
                  WANT A FURRY COMPANION? OUR PUPPIES FOR SALE ARE HERE!
                </h2>
                <p className="mb-4">
                  Forever Love Puppies welcomes you into the magical world of
                  Designer Hybrid Puppies. Our careful collection of puppies for
                  sale includes attractive breeds such as Cavapoo, Frenchton,
                  Maltishi, Milky, Pomchi, and Shorkie.
                </p>
                <p className="mb-4">
                  These hybrids combine the greatest characteristics of their
                  parent breeds, resulting in unique appearances, friendly
                  attitudes, and lively temperaments. Each puppy is carefully
                  bred and raised to ensure health, sociability, and well-being.
                </p>
                <p className="mb-4">
                  Our designer hybrids are ideal for families looking for a
                  unique and warm addition to their home. Bring home a Forever
                  Love Designer Hybrid Puppy and enjoy the joy and charm these
                  charming friends bring.
                </p>

                <h2 className="title mb-4 text-2xl font-bold">
                  PUREBRED PUPPIES FOR SALE
                </h2>
                <p className="mb-4">
                  At Forever Love Puppies, we provide an appealing selection of
                  purebred puppies, each bred to perfection to brighten your
                  life. Our purebred puppies come from some of the most popular
                  dog types. The Golden Retriever is royally beautiful, and the
                  Labrador Retriever is playful.
                </p>
                <p className="mb-4">
                  Our purebred puppies include the gentle Cavalier King Charles
                  Spaniel and the faithful German Shepherd. We are sure to have
                  the right puppy for you and your lifestyle. We love and care
                  for each puppy so they grow up to be a happy, healthy, and
                  cherished part of your family. Forever Love Puppies is the
                  place to find your perfect breeding pet today.
                </p>

                <div className="mb-4">
                  <h2 className="text-2xl font-bold">HYPOALLERGENIC PUPPIES</h2>
                  <p className="mb-4">
                    Forever Love Puppies has an exclusive collection of
                    hypoallergenic puppies that will make your life more
                    charming and fun. Our hypoallergenic types, the loving
                    Cavapoo, the smart Labradoodle, the fun Schnoodle, and more,
                    are great for people with allergies.
                  </p>
                  <p className="mb-4">
                    The non-shedding coats of these puppies keep allergens to a
                    minimum, so you can enjoy having a fuzzy friend without
                    stress. We take great care to ensure that every
                    hypoallergenic puppy we sell is healthy, happy, and ready to
                    join your family. Forever Love Puppies is the only place to
                    find the right hypoallergenic friend to bring love and
                    warmth into your home.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold">
                    LARGE AND MEDIUM SIZED PUPPIES
                  </h2>
                  <p className="mb-4">
                    Forever Love Puppies provides an exclusive collection of
                    large, medium, and small-sized puppies to add charm and
                    friendship to your life. We have wonderful companions for
                    those looking for larger breeds, including Fonzy, Ripley,
                    Carmela, and Demi.
                  </p>

                  <p className="mb-4">
                    If you prefer smaller breeds, our collection includes cute
                    puppies like Fritz, Smoky, Deigo, and Felton. Each puppy is
                    carefully bred and lovingly raised, resulting in happy,
                    healthy, and well-adjusted members of your family. Forever
                    Love Puppies has the perfect furry friend to steal your
                    heart, whether you prefer large, medium, or small puppies.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold">TINY TOY AND TEACUPS</h2>
                  <p>
                    At Forever Love Puppies, you can enjoy the beauty of tiny
                    toys and teacup pups. Our lovely collection has small
                    wonders that are definitely cute. Each little puppy is full
                    of love and care and ready to make your life happy.
                  </p>
                  <p>
                    Our range includes Mini Dachshund puppies, Pomeranians with
                    fluffy coats, Chihuahuas that love to play, and Maltese that
                    will melt your heart. No matter how small, these puppies
                    have huge personalities and are eager to become loved parts
                    of your family. Find your perfect, cute little puppy at
                    Forever Love Puppies today and discover the magic of tiny
                    cuteness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3*/}
      <section className="bg-[#FDEAE5] p-8 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex md:flex-row">
            {/* Text content */}
            <div className="flex flex-col md:ml-auto md:w-[71%]">
              {/* First info section */}
              <div className="mb-16">
                <h1 className="mb-6 text-4xl font-bold">
                  {" "}
                  FOREVER LOVE PUPPIES — A PLACE TO MEET AND GREET YOUR DREAM
                  PUPPY
                </h1>
                <h2 className="mb-4 text-2xl font-bold">
                  AVAILABILITY OF INCREDIBLE DOGS FOR SALE
                </h2>
                <p className="mb-4">
                  Were proud to offer an exclusive range of amazing dogs for
                  sale at Forever Love Puppies. Each one is just ready to win
                  your heart. We have a wide range of breeds, sizes, and traits
                  to choose from, so you can find the perfect dog for your
                  tastes and way of life. We have the right puppy for you,
                  whether you want a loyal Golden Retriever, an active
                  Australian Shepherd, or a cute Cavalier King Charles Spaniel.
                  We care for and love our dogs so they grow healthy, happy, and
                  ready to join your family. Take a look at Forever Love Puppies
                  today to find your forever puppy.
                </p>

                <h2 className="title mb-4 text-2xl font-bold">
                  COLLABORATION WITH USDA LICENSED BREEDERS
                </h2>
                <p className="mb-4">
                  At Forever Love Puppies, we are committed to responsible
                  breeding. We only work with licensed breeders from the United
                  States Department of Agriculture (USDA) who follow strict
                  rules and guidelines for animal welfare. Our puppies for sale
                  are all properly bred, healthy, and well-cared for from the
                  time they are born. Working with USDA-licensed breeders
                  ensures we are open and responsible and give our pet friends
                  the best care possible. You can be sure that if you buy a
                  puppy from Forever Love Puppies, it will be a happy, healthy,
                  and well-adjusted pet for your family.
                </p>

                <div className="mb-4">
                  <h2 className="text-2xl font-bold">
                    ALL-IN-ONE PUPPY STORE AT YOUR CONVENIENCE
                  </h2>
                  <p>
                    Theres no better place than Forever Love Puppies to meet and
                    greet your dream puppy for sale. As an all-in-one puppy
                    store, we offer the most convenience by having a wide range
                    of breeds in one place. Our carefully chosen collection
                    ensures youll find the ideal puppy friend to fit your
                    lifestyle and needs.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold">
                    LARGE AND MEDIUM SIZED PUPPIES
                  </h2>
                  <p className="mb-4">
                    We put our customers trust and peace of mind first. Thats
                    why every puppy we sell has a written contract and a health
                    warranty. Our contracts spell out the terms of the sale and
                    ensure that we and our customers can understand each other.
                  </p>

                  <p className="mb-4">
                    Also, our health guarantees cover any unexpected health
                    problems that might arise, so you can be sure your new furry
                    family member is safe. Forever Love Puppies gives you
                    written contracts and health guarantees so you can be sure
                    of your choice to bring a dog home. Start your search for
                    your dream puppy by coming to see us.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold">
                    BEST-IN-CLASS PET FINANCING OPTIONS AVAILABLE
                  </h2>
                  <p className="mb-4">
                    We know that getting a new puppy is both fun and expensive.
                    So, to make it easier for you to get your dream puppy, we
                    offer the best pet financing choices available. Our payment
                    plans are open enough to fit your needs, whether you need
                    money for the puppy, food, or supplies.
                  </p>
                  <p className="mb-4">
                    To make the process as easy as possible, we offer financing
                    options with no or little down payment and flexible payment
                    plans for people with all types of credit. See us today and
                    review our financing options to decide which is best for you
                    and your new pet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-[#7D4E9E] p-8 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex md:flex-row">
            {/* Text content */}
            <div className="flex flex-col md:ml-auto md:w-[71%]">
              {/* First info section */}
              <div className="mb-16">
                <h1 className="mb-6 text-4xl font-bold text-white">
                  {" "}
                  NOT JUST PUPPIES, THEY ARE FURBALLS OF HAPPINESS
                </h1>
                <h2 className="title mb-4 text-2xl font-bold text-white">
                  EXCLUSIVE BREEDS OF PUPPIES FOR SALE
                </h2>
                <p className="mb-4 text-white">
                  At Forever Love Puppies, we have a variety of unique types of
                  puppies that will make you fall in love. The cute American
                  Eskimo, the active Australian Shepherd, the friendly Beagle,
                  the fluffy Bichon Frise, the brave Cairn Terrier, and the cute
                  French Bulldog are just a few of the dogs we have for sale.
                </p>
                <p className="mb-4 text-white">
                  We carefully choose each breed based on its own personality
                  and traits, so you can be sure you'll find the perfect furry
                  friend for your lifestyle. We breed and raise our puppies for
                  sale with love and care, and they are ready to bring you
                  happiness, company, and endless cuddles.
                </p>

                <h2 className="mb-4 text-2xl font-bold text-white">
                  PUPPIES AVAILABLE IN IMPRESSIVE COLORS, SIZES AND PATTERNS
                </h2>
                <p className="mb-4 text-white">
                  We proudly offer an incredible range of beautiful puppies in
                  different colors, sizes, and designs. We have the right dogs
                  for sale, whether you love the deep colors of a chocolate
                  Labrador, the beautiful blue merle of an Australian Shepherd,
                  or the classic multicolored of a Beagle.
                </p>

                <p className="mb-4 text-white">
                  We have a wide range of breeds, from tiny teacups to strong
                  big dogs, each with its own beautiful marks. There is a puppy
                  for everyone, and they are all ready to bring color and
                  happiness into your life. Find your perfect puppy friend
                  today!
                </p>

                <div className="mb-4">
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    HIGH AVAILABILITY OF HYPOALLERGENIC PUPPIES FOR SALE
                  </h2>
                  <p className="mb-4 text-white">
                    Are you worried about allergies but love puppies? Forever
                    Love Puppies has a large selection of hypoallergenic puppies
                    that are great for families with sensitive pets. Some of our
                    breeds, like Poodles, Bichon Frises, and Maltese, are known
                    for having bodies that dont shed much, which makes them
                    great puppies for people with allergies.
                  </p>

                  <p className="mb-4 text-white">
                    You dont have to think about allergic reactions when you
                    have a puppy. We carefully breed and care for each
                    hypoallergenic dog so that they will be a healthy, happy,
                    and loving addition to your family. Find your right
                    hypoallergenic friend and enjoy the joy of having a furry
                    friend without the sneezes.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    ETHICALLY BRED PUPPIES WITH OPTIMAL HEALTH AND WELLNESS
                  </h2>
                  <p className="mb-4 text-white">
                    We are committed to honestly breeding our puppies and making
                    sure they are healthy and happy. The health and happiness of
                    our puppies come first when we breed them. We focus on
                    responsible breeding, training, and full health checks.
                    Every puppy grows up in a loving home and gets the best care
                    and attention.
                  </p>

                  <p className="mb-4 text-white">
                    We only work with trustworthy, licensed puppy breeders who
                    follow the strictest rules. This ensures that our puppies
                    are happy, energetic, and well-adjusted. If you buy a puppy
                    from us, youre not just getting a pet; youre adding a
                    well-cared-for, ethically-bred member to your family.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    SOCIALIZED PETS FOR YOUR HOME
                  </h2>
                  <p className="mb-8 text-white">
                    At Forever Love Puppies, we go beyond just offering lovely
                    puppies; we make sure they are well-socialized and ready for
                    your family. Our puppies connect with people and other pets
                    from a young age, which fosters confidence, pleasant
                    behavior, and adaptability. This loving environment helps
                    them grow into friendly, well-mannered companions to easily
                    fit into a family.
                  </p>

                  <p className="mb-8 text-white">
                    To make the process as easy as possible, we offer financing
                    options with no or little down payment and flexible payment
                    plans for people with all types of credit. See us today and
                    review our financing options to decide which is best for you
                    and your new pet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-[#f5f5dc] p-8 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex md:flex-row">
            <div className="flex flex-col md:ml-auto md:w-[71%]">
              <div className="mb-16">
                <h1 className="mb-6 text-4xl font-bold">
                  Frequently Asked Questions About Puppies For Sale
                </h1>
                <h2 className="mb-4 text-2xl font-bold">
                  How much do puppies for sale cost?
                </h2>
                <p className="mb-4 ">
                  The cost of puppies for sale at Forever Love Puppies varies
                  based on factors such as breed, size, and specific
                  characteristics. We offer a range of puppies for sale at
                  transparent prices to suit different budgets. To get an exact
                  price, we recommend consulting a puppy expert who can provide
                  detailed information about the puppy you are interested in.
                </p>

                <h2 className="mb-4 text-2xl font-bold ">
                  What else can I purchase from Forever Love Puppies besides
                  puppies for sale?
                </h2>
                <p className="mb-4 ">
                  Besides offering a variety of adorable puppies for sale,
                  Forever Love Puppies provides essential puppy supplies and
                  accessories. This includes food, toys, grooming products, and
                  other necessities to ensure your new furry friend has
                  everything they need for a happy and healthy start in their
                  new home.
                </p>

                <div className="mb-4">
                  <h2 className="mb-4 text-2xl font-bold ">
                    What do you include in your puppy health warranty?
                  </h2>
                  <p className="mb-4 ">
                    Our puppy health warranty includes a comprehensive health
                    check to ensure your puppy is free from any significant
                    health issues at the time of sale. Additionally, our health
                    warranty covers specific conditions that may arise,
                    providing you with peace of mind and support as you welcome
                    your new furry family member. Detailed terms and conditions
                    of the health warranty are provided in the written contract
                    accompanying each puppy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E2E2B6] py-32">
        <div className="hidden md:block md:w-1/3"></div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <h1 className="text-center text-6xl">
              <span className="text-yellow-500">LET'S FETCH HAPPINESS</span>
              <br />
              <span className="text-purple-500">TOGETHER</span>
            </h1>
          </div>
          <div className="mt-8 space-x-4">
            <button className="rounded border border-gray-300 bg-white px-4 py-2 shadow">
              Get in touch
            </button>
            <button className="rounded border border-gray-300 bg-white px-4 py-2 shadow">
              See All Available Puppies
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
