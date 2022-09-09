import Container from 'components/Container';
import LocationTab from 'components/LocationTab/LocationTab';
import { useRouter } from 'next/router';
import React from 'react';
import { getPlaceCategories } from 'utils/commonUtils';
import { HOTEL_CATEGORIES } from 'utils/constants';

import * as S from './style';

const categories = getPlaceCategories();

const Tabs = () => {
  const { query } = useRouter();

  return (
    <div>
      <Container as="section">
        <S.List>
          {categories.map(({ id, name }) => {
            const defaultCategory = id === HOTEL_CATEGORIES.paris;

            return (
              <S.Item key={id}>
                <LocationTab
                  active={query.category === id ?? defaultCategory}
                  href={`/?category=${id}`}
                  shallow
                >
                  {name}
                </LocationTab>
              </S.Item>
            );
          })}
        </S.List>
      </Container>
    </div>
  );
};

export default Tabs;
