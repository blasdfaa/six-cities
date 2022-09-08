import * as S from './style';

const IconButton = ({ children, size = 'small', className, ...props }) => {
  return (
    <S.Root size={size} type="button" className={className} {...props}>
      {children}
    </S.Root>
  );
};

export default IconButton;
