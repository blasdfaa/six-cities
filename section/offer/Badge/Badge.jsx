import styled from '@emotion/styled';

const Badge = () => {
  return (
    <Root>
      <span>Premium</span>
    </Root>
  );
};

const Root = styled.div`
  margin-bottom: 8px;
  padding: 7px 11px 3px 8px;
  font-size: 16px;
  line-height: 1.1875;
  font-weight: 700;
  font-style: oblique;
  color: #fff;
  background-color: #4481c3;
  transform: skew(-10deg);
  border-radius: 2px;
  background-color: #4481c3;

  span {
    display: block;
    transform: skew(10deg);
  }
`;

export default Badge;
