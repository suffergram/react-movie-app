import styled from 'styled-components';
import { Button } from '../button/button';
import img from '../../assets/images/header-background.webp';

export const AddButton = styled(Button)`
  width: 177px;
  height: 46px;
  position: absolute;
  top: 20px;
  right: 60px;
`;

export const Title = styled.h1`
  font-size: 40px;
  display: inline-block;
  margin: 0;
  margin-bottom: 38px;
`;

export const HeaderLogo = styled.div`
  position: absolute;
  top: 20px;
  left: 60px;
`;

export const Content = styled.div`
  position: absolute;
  height: 396px;
  width: 1200px;
  box-sizing: border-box;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px;
`;

export const Container = styled.div`
  min-height: var(--header-height);
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 10px solid var(--color-header-border);

  > * {
    z-index: 2;
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${img});
    filter: blur(2px);
    transform: scale(1.7);
  }
`;
