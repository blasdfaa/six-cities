import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import Button from 'components/Button/Button';
import FKStarRating from 'components/formik/FKStarRating';
import FKTextarea from 'components/formik/FKTextarea';
import { Form } from 'formik';

export const Root = styled((props) => <Form {...props} />, { shouldForwardProp: isPropValid })`
  margin-right: -30px;
  padding-left: 76px;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 14px;
  font-size: 14px;
  line-height: 1.2143;
  font-weight: 700;
  font-style: oblique;
  color: #000;
`;

export const Field = styled(FKTextarea)`
  width: 568px;
  height: 92px;
  margin-bottom: 12px;
  padding: 15px 16px;
`;

export const RatingInput = styled(FKStarRating)`
  margin-bottom: 21px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const FormHelpText = styled.p`
  width: 402px;
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 1.334;

  span {
    padding-left: 15px;
    background-image: url(/img/star-active.svg);
    background-size: 12px 11px;
    background-repeat: no-repeat;

    b {
      font-weight: 700;
    }
  }
`;

export const SubmitButton = styled(Button)`
  width: 143px;
  font-size: 16px;
  line-height: 1.1875;
`;
