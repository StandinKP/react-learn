import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img
          src={
            'https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png'
          }
          alt="Logo"
        />
      </HeaderLogo>

      <HeaderOption>
        <OptionLineOne>Hello,</OptionLineOne>
        <OptionLineTwo>Select your Address</OptionLineTwo>
      </HeaderOption>

      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItems>
        <HeaderOption>
          <OptionLineOne>Hello, Kaushal</OptionLineOne>
          <OptionLineTwo>Accounts & Lists</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>

        <HeaderOptionCart>
          <ShoppingBasketIcon />
          <CartCount>7</CartCount>
        </HeaderOptionCart>
      </HeaderNavItems>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
`;
const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;
const HeaderOption = styled.div`
  padding: 1em 1em;
`;

const OptionLineOne = styled.div``;
const OptionLineTwo = styled.div`
  font-weight: 700;
`;
const HeaderOptionCart = styled.div`
  display: flex;
  padding: 1em 1em;
`;
const CartCount = styled.div``;
const HeaderNavItems = styled.div`
  display: flex;
`;
const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 2rem;
  border-radius: 4px;
  margin-left: 4px;
  overflow: hidden;
`;
const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 2.3rem;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderSearchInput = styled.input`
  flex-grow: 1;
  :focus {
    outline: none;
  }
`;
