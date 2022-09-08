import * as S from './style';

const Inside = ({ goods = [] }) => {
  return (
    <S.Root>
      <S.List>
        {goods.map((item) => (
          <S.Item key={item}>{item}</S.Item>
        ))}
      </S.List>
    </S.Root>
  );
};

export default Inside;
