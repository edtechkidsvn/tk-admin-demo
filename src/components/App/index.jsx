import React, { Component } from 'react';
import DataTable from '../DataTable';
import { PowerSettingsNew, Build } from '@material-ui/icons'
import { TKDrawer, TKAppbar } from 'tk-admin';

const panels = [
  {
    icon: <Build />,
    title: 'Learning',
    view: () => (<span>Welcome TKADMIN</span>),
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
