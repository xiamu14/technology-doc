import Space from '@sceneui/space';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-use';
import { Github, SceneLogo, Twitter } from '../logo';
import {
  NavContainer,
  NavContent,
  NavLink,
  NavLinkItem,
  NavMainLayout,
  SocialLink,
} from './style';

const Navbar = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState<string>();

  useEffect(() => {
    if (location.pathname) {
      setPathname(location.pathname);
    }
  }, [location.pathname]);

  return (
    <NavMainLayout>
      <NavContainer>
        <NavContent>
          <SceneLogo width="100px" height="20px" />
          <Space x="10px" />
          <Space flex />
          <NavLink>
            <Link href="/">
              <NavLinkItem isActive={pathname === '/'}>Docs</NavLinkItem>
            </Link>
            <Link href="/component/button">
              <NavLinkItem isActive={pathname === '/component/button'}>
                Components
              </NavLinkItem>
            </Link>
            <a
              href="https://github.com/xiamu14/sceneui/discussions/new?category=fallback"
              target="_blank"
              rel="noopener noreferrer"
            >
              Feedback
            </a>
          </NavLink>
          <Space x={60} />
          <SocialLink>
            <a
              href="https://twitter.com/BenjarminX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter color="#889096" />
            </a>
            <a
              href="https://github.com/xiamu14/sceneui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github color="#889096" />
            </a>
          </SocialLink>
        </NavContent>
      </NavContainer>
    </NavMainLayout>
  );
};

export default Navbar;
