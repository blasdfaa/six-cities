import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { visuallyHiddenStyles } from '../../shared/styles';

export const Label = styled.label`
  ${({ visuallyHidden }) => visuallyHidden && visuallyHiddenStyles};
`;

export const Input = styled.input`
  padding: 15px 14px 13px;
  font-size: 16px;
  line-height: 1.1875;
  color: #383838;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
`;

export const ErrorMessage = styled.span`
  color: tomato;
  display: block;
  text-align: right;

  // Верхний отступ если есть ошибка
  ${({ hasError }) =>
    hasError &&
    css`
      margin-top: 10px;
    `}
`;
