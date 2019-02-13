import React from 'react';
import { PowerSettingsNew, Build, TableChart } from '@material-ui/icons'
import { TKDrawer, TKAppbar } from 'tk-admin';

import DataTable from '../DataTable';

const panels = [
  {
    icon: <TableChart />,
    title: 'Table',
    view: () => (<DataTable />),
    link: '/learn',
  },
  {
    icon: <Build />,
    title: 'test',
    view: () => (<span>Welcome AAAA</span>),
    link: '/test',
  },
];


const App = () => (
  <TKDrawer
  panels={panels}
  renderAppbar={(props) => (
    <TKAppbar
      title="Teach"
      menuItems={[
        {
          title: 'Logout',
          icon: <PowerSettingsNew />,
          onClick: () => console.log('Logout'),
        },
      ]}
      {...props}
    />
  )}
/>
);

export default App;
