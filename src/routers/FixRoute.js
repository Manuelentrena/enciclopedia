import React, { useEffect } from 'react';
import {
  Route, useLocation, useHistory,
} from 'react-router-dom';
import { useGlobal } from 'hooks';

const FixRoute = ({ component: Component, ...rest }) => {
  const {
    language: fx, setLanguage, setTrending, setPage,
  } = useGlobal();

  const history = useHistory();
  const location = useLocation();
  const { pathname, state } = location;
  const Lng = pathname.slice(1, 3);

  useEffect(() => {
    /* Verify langage in URL */
    if (Lng !== 'es' && Lng !== 'en') {
      history.push(`/${fx}${pathname}`);
      return;
    }
    /* Delete last character '/' in URL */
    if (pathname.charAt(pathname.length - 1) === '/') {
      history.push(pathname.slice(0, pathname.length - 1));
      return;
    }
    Lng !== fx && setLanguage({ language: Lng });
    state && state?.trendings && setTrending(true);
    state && state?.page && setPage(true);
  }, [pathname]);

  return (
    <Route {...rest}>
      <Component />
    </Route>
  );
};

export default FixRoute;
