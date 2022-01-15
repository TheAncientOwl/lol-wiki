import { HeaderContainer, HeaderFill, HeaderTitle, Logo } from '../elements/HeaderElements';
import LogoSrc from '../images/logo.png';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo src={LogoSrc} />
        <HeaderTitle>League of Legends WIKI</HeaderTitle>
      </HeaderContainer>
      <HeaderFill />
    </>
  );
};
