import React from 'react';

import * as S from './style';

const LocationTab = ({ children, active = false, ...props }) => {
  return (
    <S.Root active={active} {...props}>
      {children}
    </S.Root>
  );
};

export default LocationTab;
