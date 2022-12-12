import styled, { css } from 'styled-components';

export const NavMainLayout = styled.div`
  width: 100%;
  height: var(--navbar-height);
  background: transparent;
  position: fixed;
  z-index: 400;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavContent = styled.div`
  width: var(--content-width);
  max-width: var(--content-max-width);
  min-width: var(--content-min-width);
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.32);
  backdrop-filter: saturate(180%) blur(10px);
  box-shadow: 0px 5px 20px -5px rgba(2, 1, 1, 0.1);
`;

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #11181c;
  cursor: pointer;
  font-size: 16px;
`;

export const NavLinkItem = styled.a`
  ${(props: { isActive?: boolean }) =>
    props.isActive &&
    css`
      color: var(--primary-color);
      font-weight: bold;
    `}
`;

export const SocialLink = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`;
