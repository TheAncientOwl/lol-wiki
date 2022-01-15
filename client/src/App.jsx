import styled from 'styled-components';
import { Header } from './components/Header';
import { Theme } from './Theme';

const AppContainer = styled.div`
  height: 100vh;
  overflow: auto;
  color: ${Theme.palette.lightGray};
  background: ${Theme.palette.backgroundGradient.from};
  background: linear-gradient(
    180deg,
    ${Theme.palette.backgroundGradient.from} 75%,
    ${Theme.palette.backgroundGradient.to} 100%
  );
`;

export const App = () => {
  return (
    <AppContainer className='test'>
      <Header />
    </AppContainer>
  );
};
