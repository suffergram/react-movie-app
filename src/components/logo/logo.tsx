import { Link } from 'react-router-dom';
import { StyledParagraph } from './style';

export function Logo() {
  return (
    <Link style={{ textDecoration: 'none' }} to="/">
      <StyledParagraph>
        <strong>netflix</strong>
        roulette
      </StyledParagraph>
    </Link>
  );
}
