import React, { useEffect } from 'react';
import { Route, useLocation, useHistory } from 'react-router-dom';
import { useGlobal } from 'hooks';

const FixRoute = ({ component: Component, ...rest }) => {
  const { language: fx, setLanguage, setTrending } = useGlobal();
  const location = useLocation();
  const { pathname, state } = location;

  /* Variables */
  const history = useHistory();
  const Lng = pathname.slice(1, 3);

  useEffect(() => {
    if (Lng !== 'es' && Lng !== 'en') {
      history.push(`/${fx}${pathname}`);
      return;
    }

    Lng !== fx && setLanguage({ language: Lng });
    state?.trendings && setTrending(true);
  }, [pathname]);

  return (
    <Route {...rest}>
      <Component />
    </Route>
  );
};

export default FixRoute;
