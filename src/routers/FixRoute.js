import React, { useEffect } from 'react';
import { Route, useLocation, useHistory } from 'react-router-dom';
import { useGlobal } from 'hooks';

const FixRoute = ({ component: Component, ...rest }) => {
  const { language: fx } = useGlobal();
  const { pathname } = useLocation();

  const history = useHistory();
  const Lng = pathname.slice(1, 3);
  const withLng = pathname.slice(3, 4);

  useEffect(() => {
    if (Lng !== fx) {
      if (withLng !== '/') {
        if (withLng === '') {
          history.push(`/${fx}${pathname.substr(3)}`);
        } else {
          history.push(`/${fx}${pathname}`);
        }
      } else {
        history.push(pathname.replace(pathname.slice(1, 3), fx));
      }
    }
  }, [fx, Lng, history, pathname, withLng]);

  return (
    <Route {...rest}>
      <Component />
    </Route>
  );
};

export default FixRoute;
