import styled from '@emotion/styled';
import Container from 'components/Container';
import LocationTab from 'components/LocationTab/LocationTab';
import Main from 'components/Main';
import React from 'react';
import LoginForm from 'section/forms/LoginForm/LoginForm';
import { HOTEL_CATEGORIES } from 'utils/constants';
import { getRandomInt } from 'utils/getRandomInt';

const categoryList = Object.values(HOTEL_CATEGORIES);

const Login = () => {
  const [randomCategory, setRandomCategory] = React.useState('');

  React.useEffect(() => {
    setRandomCategory(categoryList[getRandomInt(0, categoryList.length - 1)]);
  }, []);

  return (
    <Main>
      <Container>
        <LoginForm />

        <RandomCity>
          <LocationTab active>{randomCategory}</LocationTab>
        </RandomCity>
      </Container>
    </Main>
  );
};

const RandomCity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 0 51px 63px 130px;
`;

export default Login;
