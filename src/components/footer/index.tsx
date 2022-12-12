import Space from '@sceneui/space';
import styled from 'styled-components';
import { VercelLogo } from '../logo';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Footer = () => {
  return (
    <Container>
      <p>Deployed on</p>
      <Space x={10} />
      <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
        <VercelLogo />
      </a>
    </Container>
  );
};

export default Footer;
