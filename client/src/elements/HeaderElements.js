import styled from 'styled-components';
import { Theme } from '../Theme';

const HEADER_HEIGHT = '4rem';

export const HeaderContainer = styled.div`
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  padding: 1em 2em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background: ${Theme.palette.backgroundGradient.from};
  background: linear-gradient(
    180deg,
    ${Theme.palette.backgroundGradient.from} 96%,
    ${Theme.palette.backgroundGradient.to} 100%
  );

  border-bottom: 1px solid ${Theme.palette.darkGray};
`;

export const HeaderFill = styled.div`
  height: ${HEADER_HEIGHT};
  margin-bottom: 0.5rem;
`;

export const HeaderTitle = styled.h1`
  letter-spacing: 0.1em;
`;

export const Logo = styled.img`
  width: 30px;
  margin-right: 0.7rem;
  height: auto;
  object-fit: cover;
`;
