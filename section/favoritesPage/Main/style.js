import styled from '@emotion/styled';
import Container from 'components/Container';

export const Root = styled.main`
  padding-top: 11px;
  height: 100%;
`;

export const Wrapper = styled(Container)`
  height: 100%;
`;

export const Section = styled.section`
  padding: 0 15px 93px;
  border-bottom: 2px solid rgba(222, 222, 222, 0.5);
  height: 100%;
`;

export const EmptySection = styled(Section)`
  width: 100%;
  padding: 0 0 93px 38px;
`;

export const EmptyWrapper = styled.div`
  width: 420px;
  margin-top: 16.7vh;
  margin-right: auto;
  margin-left: auto;
  padding-top: 94px;
  text-align: center;
  background-image: url(../img/ico-saved.svg);
  background-size: 60px 73px;
  background-position: center top;
  background-repeat: no-repeat;
`;

export const EmptyStatus = styled.b`
  display: block;
  margin-bottom: 5px;
  font-size: 32px;
  line-height: 1.1875;
`;

export const EmptyStatusDescription = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  padding: 0 30px;
  font-size: 16px;
  line-height: 1.5;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 49px;
  font-size: 32px;
  line-height: 1.1429;
  font-weight: 700;
  font-style: oblique;
  text-align: center;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 52px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Location = styled.div`
  display: flex;
  width: 244px;
  margin-right: 20px;
`;
