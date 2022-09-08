import { useMutation } from '@tanstack/react-query';
import { requireLogin } from 'api/user';
import Button from 'components/Button/Button';
import FKTextField from 'components/formik/FKTextField';
import { Formik } from 'formik';
import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import * as S from './style';

const LoginForm = () => {
  const router = useRouter();

  const { setToken } = useAuth();
  const { mutate, isLoading, isError, isSuccess } = useMutation((data) => requireLogin(data), {
    onSuccess: (user) => {
      router.push('/');
      setToken(user.token);
    },
  });

  return (
    <S.Root>
      <S.Title>Sign in</S.Title>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().trim().email('Incorrect email format').required('Required'),
          password: Yup.string()
            .trim()
            .matches(
              /^(?!\d*$|[a-z]*$)[a-z\d]+$/i,
              'Incorrect password format (at least one alphabetic and at least one numeric)',
            )
            .required('Required'),
        })}
        onSubmit={(data) => mutate(data)}
      >
        <S.Form>
          <FKTextField
            name="email"
            label="E-mail"
            id="email"
            placeholder="Email"
            type="text"
            sx={{ input: { width: '100%' }, root: { marginBottom: 24 } }}
            visuallyHidden
          />

          <FKTextField
            name="password"
            label="Password"
            id="password"
            placeholder="Password"
            type="password"
            sx={{ input: { width: '100%' }, root: { marginBottom: 24 } }}
            visuallyHidden
          />

          <Button type="submit" sx={{ textAlign: 'center' }} disabled={isLoading} fullWidth>
            Sign in
          </Button>

          {isError && <S.ErrorText>Unknown error. Check your network connection</S.ErrorText>}
          {isSuccess && <S.SuccessText>Login successful</S.SuccessText>}
        </S.Form>
      </Formik>
    </S.Root>
  );
};

export default LoginForm;
