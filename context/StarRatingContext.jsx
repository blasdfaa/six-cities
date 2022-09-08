import React from 'react';

export const StarRatingContext = React.createContext({});

const SIZE_VARIANTS = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const availableSizes = Object.values(SIZE_VARIANTS);

const getSize = (size = 'medium') => {
  return {
    [SIZE_VARIANTS.small]: () => ({ width: 73, height: 12 }),
    [SIZE_VARIANTS.medium]: () => ({ width: 98, height: 16 }),
    [SIZE_VARIANTS.large]: () => ({ width: 147, height: 24 }),
  }[size]();
};

const StarRatingProvider = ({ size, children }) => {
  if (!availableSizes.includes(size)) {
    console.error(`Invalid star rating size variant: [${size}]`);
  }

  return (
    <StarRatingContext.Provider
      value={{
        width: getSize(size).width,
        height: getSize(size).height,
        showedCounter: size === SIZE_VARIANTS.large,
      }}
    >
      {children}
    </StarRatingContext.Provider>
  );
};

export default StarRatingProvider;
