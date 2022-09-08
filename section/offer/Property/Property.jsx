import StarRating from 'components/StarRating/StarRating';
import useGetPlaceById from 'hooks/api/useGetPlaceById';
import useMarkAsFavoritePlace from 'hooks/api/useMarkAsFavoritePlace';
import useAuth from 'hooks/useAuth';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import Badge from '../Badge/Badge';
import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';
import Host from '../Host/Host';
import Inside from '../Inside/Inside';
import Price from '../Price/Price';
import Review from '../Review/Review';
import * as S from './style';

// Компоненты карты используют `window`, так что нужно ренденрить карту на клиенте.
// ! Даже импорт компонента может привести к ошибке при SSR из-за `window`
const Map = dynamic(() => import('../Map/Map'), { ssr: false });
const NearbyPlacesList = dynamic(() => import('../NearbyPlacesList/NearbyPlacesList'), { ssr: false });

const Property = () => {
  const router = useRouter();
  const { isLogged } = useAuth();

  const place = useGetPlaceById();
  const markAsFavorite = useMarkAsFavoritePlace();

  const {
    bedrooms,
    title,
    rating,
    type,
    max_adults,
    price,
    goods,
    host,
    description,
    is_premium,
    is_favorite,
  } = place.data;

  const toggleFavoriteAction = is_favorite ? 'remove' : 'add';

  return (
    <section>
      <Gallery />

      {is_premium && <Badge />}

      <S.Wrapper>
        <S.Inner>
          <div>
            <S.Name>{title}</S.Name>

            <S.AddToFavoriteBtn
              onClick={async () => {
                if (!isLogged) {
                  return router.push('/login');
                }

                markAsFavorite.mutate(toggleFavoriteAction);
              }}
              active={is_favorite}
            />
          </div>

          <S.Rating>
            <StarRating value={rating} size="large" readOnly />
          </S.Rating>

          <Features features={{ bedrooms, type, max_adults }} />

          <Price value={price} />

          <Inside goods={goods} />

          <Host host={host} description={description} />

          <Review />
        </S.Inner>
      </S.Wrapper>

      <Map />

      <NearbyPlacesList />
    </section>
  );
};

export default Property;
