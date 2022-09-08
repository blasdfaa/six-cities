import useGetPlaceById from 'hooks/api/useGetPlaceById';

import * as S from './style';

const MAX_PHOTOS_COUNT = 6;

const Gallery = () => {
  const { data } = useGetPlaceById();

  return (
    <S.Wrapper>
      <S.Root>
        {data.images.slice(0, MAX_PHOTOS_COUNT).map((url) => (
          <S.Item key={url}>
            <S.Image src={url} width={260} height={200} />
          </S.Item>
        ))}
      </S.Root>
    </S.Wrapper>
  );
};

export default Gallery;
