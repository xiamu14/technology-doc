import { allDrafts } from 'contentlayer/generated';
import { memo, useEffect, useState } from 'react';
import { Container, EditLink } from './style';

import { AnimatePresence, motion } from 'framer-motion';
import { Edit3 } from 'react-feather';
import { useLocation } from 'react-use';
import Footer from '../footer';
import MdxComponent from '../mdx_component';

const Content = () => {
  const location = useLocation();

  const [draftCode, setDraftCode] = useState<string>();

  useEffect(() => {
    const data = allDrafts.find((it) => it.url === location.pathname);
    setDraftCode(data?.body.code);
  }, [location.pathname]);

  return (
    <Container>
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          style={{ margin: '0 10px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {draftCode && <MdxComponent code={draftCode} />}
          <EditLink>
            <Edit3 size={14} />
            <a
              href="https://github.com/xiamu14/sceneui"
              rel="noreferrer"
              target="_blank"
            >
              Edit this page on Github
            </a>
          </EditLink>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default memo(Content);
