import Space from '@sceneui/space';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { ArrowLeft, ChevronLeft, Home } from 'react-feather';
const MdxComponent = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);
  return (
    // @ts-ignore
    <Component
      components={{
        ArrowLeft,
        Space,
        ChevronLeft,
        Home,
      }}
    />
  );
};

export default MdxComponent;
