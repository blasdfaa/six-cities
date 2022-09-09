import Icon from 'components/Icon';
import React from 'react';
import { useClickAway } from 'react-use';

import * as S from './style';

const Select = ({ value, options = [], onSelect = () => {} }) => {
  const [open, setOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  useClickAway(dropdownRef, () => {
    if (open) {
      setOpen(false);
    }
  });

  return (
    <S.Root>
      <S.Caption>Sort by</S.Caption>

      <S.CurrentType tabIndex={0} onClick={() => setOpen(true)}>
        &nbsp;{value ?? options[0].label}&nbsp;
        <Icon id="icon-arrow-select" width={7} height={4} />
      </S.CurrentType>

      <S.Options opened={open} ref={dropdownRef}>
        {options.map(({ id, label }) => (
          <S.OptionItem
            key={id}
            tabIndex={0}
            onClick={() => {
              onSelect({ id, label });
              setOpen(false);
            }}
          >
            {label}
          </S.OptionItem>
        ))}
      </S.Options>
    </S.Root>
  );
};

export default Select;
