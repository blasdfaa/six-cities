import { Formik, useFormikContext } from 'formik';
import useSubmitReview from 'hooks/api/useSubmitReview';
import * as Yup from 'yup';

import * as S from './style';

const MAX_COMMENT_CHAR = 50;

const ReviewForm = () => {
  const submitReview = useSubmitReview();

  return (
    <Formik
      initialValues={{
        rating: '',
        comment: '',
      }}
      validationSchema={Yup.object({
        rating: Yup.string().required(),
        comment: Yup.string().test(
          'len',
          `stay with at least ${MAX_COMMENT_CHAR} characters`,
          (val) => val !== undefined && val.trim().replace(/\s/g, '').length >= MAX_COMMENT_CHAR,
        ),
      })}
      onSubmit={async (values, { resetForm }) => {
        submitReview.mutate(values, {
          onSuccess: () => resetForm(),
        });
      }}
    >
      <S.Root>
        <S.Label htmlFor="review">Your review</S.Label>

        <S.RatingInput name="rating" id="hotel-comment-rating" />

        <S.Field
          id="hotel-comment"
          name="comment"
          placeholder="Tell how was your stay, what you like and what can be improved"
        ></S.Field>

        <S.Footer>
          <S.FormHelpText>
            To submit review please make sure to set <span>rating</span> and describe your stay with at least
            <b>&nbsp;50 characters</b>
          </S.FormHelpText>

          <SubmitButton />
        </S.Footer>
      </S.Root>
    </Formik>
  );
};

const SubmitButton = () => {
  const { isValid, dirty, isSubmitting } = useFormikContext();

  return (
    <S.SubmitButton type="submit" disabled={!isValid || !dirty || isSubmitting}>
      Submit
    </S.SubmitButton>
  );
};

export default ReviewForm;
