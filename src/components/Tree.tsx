import React from 'react';
import Tree from 'react-d3-tree';

import { employeeCardFn } from './EmployeeCard';

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

export const MainTree: React.FC = () => {
    return (
        <div style={treeContainerStyles}>
            <Tree
                data={dataTree} // TODO: API GET
                initialDepth={3} // How many layers of tree to show initially
                orientation="vertical"
                zoomable
                depthFactor={200} // Number in px
                nodeSize={{ x: 200, y: 200 }}
                renderCustomNodeElement={employeeCardFn}
                pathFunc="diagonal"
                translate={{ x: 500, y: 500 }}
            />
        </div>
    );
};
