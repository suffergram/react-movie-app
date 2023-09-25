import styled from 'styled-components';
import { Button } from '../button/button';

export const StyledCard = styled.div`
  width: 100%;
  position: relative;
  font-size: 14px;

  * {
    text-decoration: none;
    color: var(--color-white);
  }

  &:hover {
    button {
      display: block;
    }
  }
`;

export const ImageContainer = styled.div`
  line-height: 455px;
  text-align: center;
  height: 455px;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--color-2);
`;

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Description = styled.div`
  width: 100%;
  margin-top: 22px;
`;

export const Year = styled.div`
  float: right;
  border: 1px solid var(--color-4);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 26px;
  border-radius: 4px;
`;

export const Paragraph = styled.p`
  margin: 0;
`;

export const Title = styled(Paragraph)`
  font-size: 18px;
`;

export const Genre = styled(Paragraph)`
  opacity: 0.5;
  margin-top: 8px;
`;

export const PopoverButton = styled(Button)`
  width: 100%;
  height: 34px;
  background: transparent;
  text-transform: capitalize;
  text-align: left;
  border-radius: 0;
  padding-left: 16px;
  font-size: 16px;

  &:hover {
    background-color: var(--color-1);
  }
`;
