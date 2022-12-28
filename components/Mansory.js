import React from "react";

const Mansory = ({ images }) => {
  console.log(images, "images");
  return (
    <div>
      <div className="columns-2 md:columns-2 lg:columns-2 flex-1 min-w-[350px]   ">
        {images.map((image, index) => {
          return (
            <div className="flex justify-center items-center mb-4" key={index}>
              {console.log(image, "image")}
              <img
                src={image.src}
                alt="
            portfolio"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mansory;
