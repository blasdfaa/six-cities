import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 22px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 54px;
  margin-right: 22px;
`;

export const UserName = styled.span`
  font-size: 14px;
  line-height: 1.2143;
  color: #000;
  word-break: break-word;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const UserAvatar = styled.div`
  min-width: 54px;
  width: 54px;
  height: 54px;
  margin-bottom: 10px;
  background-image: url(/img/avatar.svg);
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  display: block;
`;

export const Rating = styled.div`
  margin-bottom: 7px;
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 1.75;
  color: #000;
`;

export const Date = styled.time`
  font-size: 14px;
  line-height: 1;
  color: #5d5d5d;
`;
