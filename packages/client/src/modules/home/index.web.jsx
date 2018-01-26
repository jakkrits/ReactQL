import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '../../modules/common/components/web';
import Home from './containers/Home';
import reducers from './reducers';

import Feature from '../connector';

export default new Feature({
  route: <Route exact path="/home" component={Home} />,
  navItem: (
    <MenuItem key="home">
      <NavLink to="/home" className="nav-link" activeClassName="active">
        Home
      </NavLink>
    </MenuItem>
  ),
  reducer: { home: reducers }
});
