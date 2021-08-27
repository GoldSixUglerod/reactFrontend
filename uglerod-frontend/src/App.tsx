import React from 'react';
import { Button } from 'antd';
import { OrgChartTree } from './Tree';

const App = () => {
  return (
    <main
      style={{
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button type="primary">Hello, Ant Design!</Button>
      <a href="foo.bar">I'm a link. Click me, please!</a>
      <OrgChartTree />
    </main>
  );
};

export default App;
