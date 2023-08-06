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
          <>
            <ImageContainer
              span={image.span}
              description={image.description}
              imageUrl={image.imageUrl}
              handleOnClick={setActiveImageUrl}
              key={image.imageUrl}
            />
            {Math.floor(Math.random() * 5) === 3 && (
              <>
                <script
                  async
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4156584633093933"
                  crossOrigin="anonymous"
                ></script>
                <ins
                  className="adsbygoogle"
                  style={{ display: "block" }}
                  data-ad-format="fluid"
                  data-ad-layout-key="-6t+ed+2i-1n-4w"
                  data-ad-client="ca-pub-4156584633093933"
                  data-ad-slot="1664585510"
                ></ins>
                <script>
                  (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
              </>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Category;
