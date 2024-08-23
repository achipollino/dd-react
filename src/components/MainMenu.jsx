import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from './onClickOutside';
import { MenuContext } from '../providers/NavContext';
import HamburgerButton from './HamburgerButton';
import { SideMenu } from './SideMenu';

const Navbar = styled.div`
  position: fixed;
  box-sizing: border-box;
  max-width: 100%;
  top: 35px;
  right: 80px;
  align-items: center;
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px 60px;
  z-index: 500;
`;

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <Navbar>
        <HamburgerButton />
      </Navbar>
      <SideMenu />
    </header>
  );
};

export default MainMenu;