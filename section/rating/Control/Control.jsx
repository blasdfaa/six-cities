import * as S from './style';

const ratingValues = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

const Control = ({ onChange, onBlur, value, name, id = '' }) => {
  return (
    <S.Container role="group">
      {ratingValues.map((item, index) => {
        const starValue = index + 1;

        return (
          <div key={item}>
            <S.Input
              onBlur={onBlur}
              onChange={onChange}
              value={starValue}
              checked={starValue === Number(value)}
              id={`${starValue}-stars-${id}`}
              name={name}
              type="radio"
            />
            <S.Label htmlFor={`${starValue}-stars-${id}`} title={item}>
              <S.StarIcon filled={starValue <= value} id="icon-star" width={37} height={33} />
            </S.Label>
          </div>
        );
      })}
    </S.Container>
  );
};

export default Control;
