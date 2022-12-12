// pages/index.js

import { RecoilRoot } from 'recoil';
import AppContainer from '../../components/app_container';
import Content from '../../components/content';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

export default function Document() {
  return (
    <RecoilRoot>
      <AppContainer>
        <Navbar />
        <Sidebar />
        <Content />
      </AppContainer>
    </RecoilRoot>
  );
}
