import styled from '@emotion/styled';
import { Form as FormikForm } from 'formik';

export const Root = styled.section`
  position: relative;
  width: 520px;
  padding-top: 19.6vh;
  padding-right: 60px;
  padding-left: 13px;

  &::after {
    content: '';
    position: absolute;
    width: 12.03vh;
    min-width: 195px;
    height: 100vh;
    min-height: 450px;
    bottom: 0;
    right: -2px;
    background-color: #f5f5f5;
    border-right: 6px solid #4481c3;
    transform: skew(-6.5deg);
  }
`;

export const Title = styled.h1`
  position: relative;
  z-index: 1;
  margin-top: 0;
  margin-bottom: 28px;
  font-size: 32px;
  line-height: 1.1875;
  font-weight: 700;
  font-style: oblique;
`;

export const Form = styled((props) => <FormikForm {...props} />)`
  position: relative;
  z-index: 1;
  width: 341px;
`;

const InfoMessage = styled.p`
  margin: 12px 0;
  text-align: center;
`;

export const ErrorText = styled(InfoMessage)`
  color: tomato;
`;

export const SuccessText = styled(InfoMessage)`
  color: green;
`;
