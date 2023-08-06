import React, { Dispatch } from "react";
import ImageContainer from "./ImageContainer/ImageContainer";

interface imagesArray {
  span: number;
  description: string;
  imageUrl: string;
}

const Category = ({
  categoryName,
  description,
  images,
  setActiveImageUrl,
}: {
  categoryName: string;
  description: string;
  images: Array<imagesArray>;
  setActiveImageUrl: Dispatch<string>;
}) => {
  return (
    <div className="items">
      <div className="item intro span-2">
        <h1>{categoryName}</h1>
        <p>{description}</p>
      </div>

      {images.map((image) => {
        return (
          <ImageContainer
            span={image.span}
            description={image.description}
            imageUrl={image.imageUrl}
            handleOnClick={setActiveImageUrl}
          />
        );
      })}
    </div>
  );
};

export default Category;
