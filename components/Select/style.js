import styled from '@emotion/styled';

export const Root = styled.form`
  position: relative;
  margin-bottom: 33px;
  padding-left: 5px;
`;

export const Caption = styled.span`
  font-size: 12px;
  line-height: 1.167;
  font-weight: 700;
`;

export const CurrentType = styled.span`
  position: relative;
  display: inline-block;
  padding-right: 12px;
  font-size: 12px;
  line-height: 1.167;
  cursor: pointer;
`;

export const Options = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  position: absolute;
  top: calc(100% + 1px);
  left: 52px;
  z-index: 1;
  display: ${({ opened }) => (opened ? 'block' : 'none')};
`;

export const OptionItem = styled.li`
  min-width: 170px;
  padding: 14px 16px 10px;
  font-size: 14px;
  line-height: 1.2143;
  transition: background 0.3s;
  outline: 0;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: #f2f2f2;
  }
`;
