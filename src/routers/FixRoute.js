import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useGlobal } from "hooks";
import { useHistory, useLocation } from "react-router-dom";

const FixRoute = (props) => {
  const { language: fx, setLanguage, changeTheme, theme } = useGlobal();
  const history = useHistory();
  const { pathname } = useLocation();
  const lng = pathname.slice(1, 3);
  const withLng = pathname.slice(3, 4);

  useEffect(() => {
    if (withLng === "/") {
      lng !== fx && setLanguage(lng);
    } else {
      history.push({ pathname: `/${fx}${pathname}` });
    }
  }, [fx, lng, setLanguage, pathname, history, withLng]);

  useEffect(() => {
    changeTheme();
  }, [theme, changeTheme]);

  return <Route {...props} />;
};

export default FixRoute;
