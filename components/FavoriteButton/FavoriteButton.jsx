import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Icon from 'components/Icon';
import IconButton from 'components/IconButton/IconButton';

const getButtonSizes = (sizeVariant) => {
  return {
    large: () => ({ width: 31, height: 33 }),
    small: () => ({ width: 18, height: 19 }),
  }[sizeVariant](); // Дефолтный кейс не нужен так-как при получении несуществующего размера компонент выдаст ошибку в консоль
};

const FavoriteButton = ({ active = false, onClick, size = 'large', className }) => {
  // TODO: При расширении количества вариантов для размера, нужно вынести в перечисление и проверять через него!
  if (!(size === 'small' || size === 'large')) {
    console.error(`Invalid button size: [${size}]`);
  }

  return (
    <Root onClick={onClick} active={active} className={className}>
      <Icon id="icon-bookmark" width={getButtonSizes(size).width} height={getButtonSizes(size).height} />
    </Root>
  );
};

const activeStyles = css`
  stroke: #4481c3;
  fill: #4481c3;
`;

const Root = styled(IconButton)`
  svg {
    fill: none;
    stroke: #b8b8b8;
    stroke-width: 2;
    transition: fill 0.3s, stroke 0.3s;

    ${({ active }) => active && activeStyles};
  }

  &:hover svg,
  &:focus svg {
    stroke: #4481c3;
  }
`;

export default FavoriteButton;
