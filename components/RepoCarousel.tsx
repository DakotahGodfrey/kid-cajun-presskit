import Image from "next/image";
import { Repo } from "types/";
import { FlexContainer, ImageContainer } from "./Containers";

interface IRepoCarouselProps {
  images: string[];
}

export const RepoCarousel: React.FC<IRepoCarouselProps> = ({ images }) => {
  return (
    <FlexContainer scrollable>
      <div className='row'>
        {images.length ? (
          images.map((imagePath) => (
            <div key={imagePath} className='card card-gallery'>
              <ImageContainer
                pBottom='none'
                mBottom='none'
                height='30rem'
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
          <div className='card repo-loading'>
            <h2>Loading</h2>
          </div>
        )}
      </div>
    </FlexContainer>
  );
};
