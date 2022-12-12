import { useEffect, useState } from 'react';
import { useLocation } from 'react-use';
import { NextRouter } from './next_router';

export function createRouter(
  routes: {
    pattern: string;
    element: JSX.Element;
  }[]
): NextRouter {
  const nextRouter = new NextRouter();

  routes.forEach((route) => nextRouter.addRoute(route));
  return nextRouter;
}

export default function Router({ routers }: { routers: NextRouter }) {
  const location = useLocation();
  const [children, setChildren] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const currentRoute = routers.getRoute(location.pathname ?? '');

    if (currentRoute) {
      setChildren(currentRoute.route.element);
    } else {
      // TODO: 404
    }
  }, [location, routers]);

  return <>{children}</>;
}
