import { StarRatingContext } from 'context/StarRatingContext';
import React from 'react';

const useStarRating = () => {
  return React.useContext(StarRatingContext);
};

export default useStarRating;
