import Link from 'next/link';
import { StyledParagraph } from './style';

export function Logo() {
  return (
    <Link style={{ textDecoration: 'none' }} href="/">
      <StyledParagraph>
        <strong>netflix</strong>
        roulette
      </StyledParagraph>
    </Link>
  );
}
