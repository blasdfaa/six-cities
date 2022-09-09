import React from 'react';

import * as S from './style';

const LocationTab = ({ href = '#', children, active = false, ...props }) => {
  return (
    <S.Root isActive={active} href={href} {...props}>
      {children}
    </S.Root>
  );
};

export default LocationTab;
