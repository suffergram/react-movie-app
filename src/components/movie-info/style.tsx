import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  min-height: var(--header-height);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 1200px;
  position: relative;
  box-sizing: border-box;
  padding: 37px 60px 29px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 41px;
`;

export const StyledButton = styled.button`
  position: absolute;
  width: 41px;
  height: 41px;
  top: 37px;
  right: 60px;
  padding-left: 12px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const MovieData = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.2fr;
  gap: 55px;
  margin-top: 30px;
  font-size: 20px;
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

export const MovieTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 40px;
`;

export const Rating = styled.p`
  border: 1px solid var(--color-5);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 0 4px 25px;
  flex-shrink: 0;
`;

export const Genre = styled.p`
  font-size: 14px;
  opacity: 0.5;
  text-transform: capitalize;
  margin: 0;
`;

export const MovieSpecs = styled.div`
  color: var(--color-1);
  display: flex;
  gap: 51px;
  font-size: 24px;
  margin: 30px 0;

  p {
    margin: 0;
  }
`;

export const Description = styled.p`
  opacity: 0.5;
  margin: 0;
`;
