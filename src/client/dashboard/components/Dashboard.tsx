import About from '../../sidebar-about-page/components/About';
import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';

type DashboardView = {
  index: number,
  hash: string,
  label: string,
  view: React.ReactNode,
}

const viewConfig: DashboardView[] = [
  {
    index: 0,
    hash: 'signUp',
    label: 'Sign Up',
    view: <b>Active Member</b>,
  },
  {
    index: 1,
    hash: 'admin',
    label: 'Admin',
    view: <b>Edit Members</b>,
  },
  {
    index: 2,
    hash: 'timeSheet',
    label: 'Time Tracking',
    view: <b>Time Tracking</b>,
  }
];

const Dashboard = () => {
  const [view, setView] = useState<DashboardView>(viewConfig[0]);


  const render = (view: DashboardView) => {
    return viewConfig.find((config) => config.hash === view.hash)?.view
  };

  return (
      <div style={{
        padding: 0,
        margin: 0,
      }}>
        <Tabs
          value={view.index}
          variant="scrollable"
          visibleScrollbar
          onChange={(_event: React.SyntheticEvent, newValue: number) => setView(viewConfig[newValue])}
          style={{
            padding: 0
          }}
        >
          {viewConfig.map(config => <Tab key={config.hash} label={config.label}/>)}
        </Tabs>
        <div>
          {render(view)}
        </div>
      </div>
  );
};

export default Dashboard;
