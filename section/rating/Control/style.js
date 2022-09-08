import styled from '@emotion/styled';
import Icon from 'components/Icon';
import { visuallyHiddenStyles } from 'shared/styles';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Label = styled.label`
  display: block;
  width: 37px;
  height: 33px;
  margin-right: 4px;
  cursor: pointer;

  &:hover svg {
    fill: #ff9000;
  }
`;

export const Input = styled.input`
  ${visuallyHiddenStyles};

  &:checked ~ ${Label} svg,
  &:focus ~ ${Label} svg,
  &:hover ~ ${Label} svg {
    fill: #ff9000;
  }

  &:focus ~ ${Label} svg {
    outline: 1px solid #ff9000;
  }
`;

export const StarIcon = styled(Icon)`
  fill: ${({ filled }) => (filled ? '#ff9000' : '#c7c7c7')};
  transition: fill 0.3s;
`;
