import Image from "next/image";
import { Dispatch } from "react";

const ImageContainer = ({
  span,
  description,
  imageUrl,
  handleOnClick,
}: {
  span: number;
  description: string;
  imageUrl: string;
  handleOnClick: Dispatch<string>;
}) => {
  return (
    <div className={`item thumb span-${span}`}>
      <h2>{description}</h2>

      <Image
        src={imageUrl}
        alt=""
        onClick={() => handleOnClick(imageUrl)}
        fill={true}
      />
    </div>
  );
};

export default ImageContainer;
