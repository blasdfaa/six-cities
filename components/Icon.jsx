import styled from '@emotion/styled';

const Icon = ({ id, width = 16, height = 16, title, className }) => {
  return (
    <Root
      className={className}
      width={width}
      height={height}
      role="img"
      focusable="false"
      aria-labelledby={id}
      aria-hidden
    >
      {title && <title id={id}>{title}</title>}
      <use href={`/img/sprite.svg#${id}`} />
    </Root>
  );
};

const Root = styled.svg`
  color: currentColor;
`;

export default Icon;
