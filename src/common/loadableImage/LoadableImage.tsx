import React, { useEffect, useState } from "react";
import LoadableImageStyled from "./LoadableImageStyled";
import LoadableImageStyles from "./LoadableImageStyled";

export type LoadableImageProps = {
  src: string;
};

export const LoadableImage: React.FC<LoadableImageProps> = ({ src }) => {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    //
    if (!src) {
      return () => ({});
    }

    const img = new Image();
    img.onload = () => setImageSrc(src);

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  });

  return <LoadableImageStyled src={imageSrc}></LoadableImageStyled>;
};

export default LoadableImage;
