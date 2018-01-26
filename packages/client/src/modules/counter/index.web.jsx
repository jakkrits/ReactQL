import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '../../modules/common/components/web/';
import Counter from './containers/Counter';
import reducers from './reducers';

import Feature from '../connector';

export default new Feature({
  route: <Route exact path="/counter" component={Counter} />,
  navItem: (
    <MenuItem key="Counter">
      <NavLink to="/counter" className="nav-link" activeClassName="active">
        Counter
      </NavLink>
    </MenuItem>
  ),
  reducer: { counter: reducers }
});
