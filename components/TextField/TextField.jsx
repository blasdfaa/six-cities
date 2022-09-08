import * as S from './style';

// Переопределить стили компонентов можно через пропс "sx"
// Аналог `sx` из mui
const TextField = ({ sx = {}, visuallyHidden = false, label, error, ...props }) => {
  const hasError = Boolean(error);

  return (
    <div css={{ ...sx.root }}>
      <S.Label css={{ ...sx.label }} htmlFor={props.id} visuallyHidden={visuallyHidden}>
        {label}
      </S.Label>

      <S.Input css={{ ...sx.input }} {...props} />
      {hasError && <S.ErrorMessage hasError={hasError}>{error}</S.ErrorMessage>}
    </div>
  );
};

export default TextField;
