import styled from '@emotion/styled';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';

import { resetButtonStyles } from '../../shared/styles';

export const Navigation = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  margin-top: 11px;
  margin-left: 30px;
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const NavItem = styled.li`
  margin-bottom: 15px;

  &:hover,
  &:focus {
    color: #4481c3;
    transition: color 0.3s;
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1.2143;
  transition: text-shadow 0.3s;
`;

export const Avatar = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-image: url(/img/avatar.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

export const Login = styled.span`
  padding-top: 2px;
  padding-right: 8px;
`;

export const UserName = styled.span`
  padding-top: 2px;
`;

export const LogoutButton = styled.button`
  ${resetButtonStyles};

  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1.2143;
  transition: text-shadow 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #4481c3;
    transition: color 0.3s;
  }
`;

export const LogoutButtonText = styled(UserName)``;

export const Loader = styled(Skeleton)`
  margin-bottom: 15px;
`;
