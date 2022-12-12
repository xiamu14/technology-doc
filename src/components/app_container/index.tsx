import { PropsWithChildren } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: var(--content-width);
  max-width: var(--content-max-width);
  min-width: var(--content-min-width);
  min-height: 100vh;
  margin: 0 auto;
  background: white;
  overflow-x: hidden;
  position: relative;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

const AppContainer = ({ children }: PropsWithChildren<{}>) => {
  return <Container>{children}</Container>;
};

export default AppContainer;
