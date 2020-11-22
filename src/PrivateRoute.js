import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {useSelector} from 'react-redux'


function PrivateRoute({ exact, path, children }) {
  let user = useSelector(st => st.user.token)
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default PrivateRoute;
