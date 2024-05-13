import { useState } from "react";

const ExploreCollections = () => {
  const imageData = [
    {
      id: 1,
      src: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fcollection%2Fouterwear.png&w=1080&q=75",
      description: "Outerwear 1",
    },
    {
      id: 2,
      src: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fcollection%2Funderwear.png&w=1080&q=75",
      description: "Underwear 2",
    },
    {
      id: 3,
      src: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fcollection%2Ft-shirt.png&w=1080&q=75",
      description: "T-Shirt 3",
    },
    {
      id: 4,
      src: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fcollection%2Fswimwear.png&w=1080&q=75",
      description: "Swimwear 4",
    },
    {
      id: 5,
      src: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fcollection%2Ftop.png&w=1080&q=75",
      description: "Top 5",
    },
    {
      id: 1,
      src: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fcollection%2Fouterwear.png&w=1080&q=75",
      description: "Outerwear 1",
    },
    {
      id: 2,
      src: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fcollection%2Funderwear.png&w=1080&q=75",
      description: "Underwear 2",
    },
    {
      id: 3,
      src: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fcollection%2Ft-shirt.png&w=1080&q=75",
      description: "T-Shirt 3",
    },
    {
      id: 4,
      src: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fcollection%2Fswimwear.png&w=1080&q=75",
      description: "Swimwear 4",
    },
    {
      id: 5,
      src: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fcollection%2Ftop.png&w=1080&q=75",
      description: "Top 5",
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerRow = 4;

  // Calculate the total number of items and the last possible index for the slider
  const totalItems = imageData.length;
  const lastIndex = totalItems - itemsPerRow;

  const slideLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const slideRight = () => {
    if (startIndex < lastIndex) {
      setStartIndex(startIndex + 1);
    }
  };

  // Get the current subset of images to display
  const displayedImages = imageData.slice(startIndex, startIndex + itemsPerRow);

  return (
    <div className="">
      <div className="text-center text-4xl p-5 text-black font-semibold">
        Explore Collections
      </div>
      <div className="flex items-center space-x-4">
        {/* Slide left button */}
        <button
          className={`text-xl text-gray-600 ${
            startIndex === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={slideLeft}
          disabled={startIndex === 0}
        >
          &#9664; {/* Left arrow */}
        </button>

        {/* Images displayed in a row */}
        <div className="flex space-x-4 overflow-hidden my-5">
          {displayedImages.map((image) => (
            <button
              key={image.id}
              className="relative "
              onClick={() => alert(`Clicked on ${image.description}`)}
            >
              <button className="absolute  text-center text-xl my-10 mx-20  inset-x-0 bottom-0 h-16  bg-white px-5 py-2 rounded-3xl ">
                {" "}
                {image.description}
              </button>
              <img
                src={image.src}
                alt={image.description}
                className="w-full  h-[600px] object-cover rounded-lg"
              />
            </button>
          ))}
        </div>

        {/* Slide right button */}
        <button
          className={`text-xl text-gray-600 ${
            startIndex === lastIndex ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={slideRight}
          disabled={startIndex === lastIndex}
        >
          &#9654; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default ExploreCollections;
