import StarRatingProvider from 'context/StarRatingContext';
import React from 'react';
import Control from 'section/rating/Control/Control';
import ReadOnly from 'section/rating/ReadOnly/ReadOnly';

const StarRating = ({
  name,
  id,
  value = 0,
  onChange,
  onBlur,
  size = 'medium',
  className,
  error,
  readOnly = false,
}) => {
  return (
    <div className={className}>
      <StarRatingProvider size={size}>
        {readOnly && <ReadOnly value={value} />}
        {!readOnly && <Control onChange={onChange} onBlur={onBlur} id={id} name={name} value={value} />}

        {error && <p>{error}</p>}
      </StarRatingProvider>
    </div>
  );
};

export default StarRating;
