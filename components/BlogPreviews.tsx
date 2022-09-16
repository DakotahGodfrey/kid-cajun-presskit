import Image from "next/image";
import React from "react";
import { GridContainer, ImageContainer } from "./Containers";

interface IBlogPreviews {
  images: string[];
}
export const BlogPreviews: React.FC<IBlogPreviews> = ({ images }) => {
  return (
    <section>
      <h2>Gallery</h2>
      <GridContainer columns={2}>
        {images ? (
          images.map((imagePath: string) => (
            <div key={imagePath} className='card card-article'>
              <ImageContainer
                mBottom='1.6rem'
                pBottom='0.8rem'
                height='20rem'
                rounded
              >
                <Image
                  src={`/images/${imagePath}`}
                  alt=''
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center center'
                  quality={75}
                />
              </ImageContainer>
            </div>
          ))
        ) : (
          <div>
            <h3>Loading</h3>
          </div>
        )}
      </GridContainer>
    </section>
  );
};
