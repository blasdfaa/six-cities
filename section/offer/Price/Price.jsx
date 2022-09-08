import * as S from './style';

const Price = ({ value }) => {
  return (
    <S.Root>
      <S.Value>€{value}</S.Value>
      <S.Text>&nbsp;night</S.Text>
    </S.Root>
  );
};

export default Price;
