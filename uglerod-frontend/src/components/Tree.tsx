import React from 'react';
import Tree from 'react-d3-tree';
import { EmployeeCard } from './EmployeeCard';

const dataTree = {
  name: 'CEO',
  children: [
    {
      name: 'Manager',
      attributes: {
        department: 'Production',
      },
      children: [
        {
          name: 'Foreman',
          attributes: {
            department: 'Fabrication',
          },
          children: [
            {
              name: 'Worker',
            },
          ],
        },
        {
          name: 'Foreman',
          attributes: {
            department: 'Assembly',
          },
          children: [
            {
              name: 'Worker',
            },
          ],
        },
      ],
    },
  ],
};

const treeContainerStyles = {
  height: '100vh',
  width: '100vw',
};

export function MainTree() {
  return (
    <div style={treeContainerStyles}>
      <Tree
        data={dataTree} // TODO: API GET
        initialDepth={3} // How many layers of tree to show initially
        orientation={'vertical'}
        zoomable={true}
        depthFactor={200} // Number in px
        nodeSize={{ x: 200, y: 200 }}
        renderCustomNodeElement={({ nodeDatum, toggleNode }) => (
          <EmployeeCard
            nodeData={nodeDatum}
            triggerNodeToggle={toggleNode}
            foreignObjectProps={{
              width: 200,
              height: 200,
              x: -100,
              y: 0,
            }}
          />
        )}
        pathFunc={'diagonal'}
        translate={{ x: 500, y: 500 }}
      />
    </div>
  );
}
