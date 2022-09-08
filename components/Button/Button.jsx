import { BUTTON_VARIANT } from 'utils/constants';

import * as S from './style';

const Button = ({
  className,
  variant = 'blue',
  sx = {},
  type = 'button',
  children,
  fullWidth,
  disabled = false,
}) => {
  // Показать предупреждение если нет доступного варианта кнопки
  if (!Object.keys(BUTTON_VARIANT).includes(variant)) {
    console.warn(`Not a valid "${variant}" variant prop. Available options: "blue"`);
  }

  return (
    <S.Root
      variant={variant}
      css={sx}
      type={type}
      fullWidth={fullWidth}
      disabled={disabled}
      className={className}
    >
      {children}
    </S.Root>
  );
};

export default Button;
