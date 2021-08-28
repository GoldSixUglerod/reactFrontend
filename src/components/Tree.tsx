import React from 'react';
import Tree from 'react-d3-tree';
import { RawNodeDatum } from 'react-d3-tree/lib/types/common';
import styled from 'styled-components';

import { employeeCardFn } from './EmployeeCard';

interface NodeAttrs extends Record<string, string | number | boolean> {
    name: string;
    avatar: string;
    position: string;
    alias: string;
    tasksDescription: string;
    taskDeadline: string;
    completed: boolean;
}

interface TreeData extends RawNodeDatum {
    name: string;
    attributes: NodeAttrs;
    children?: this[];
}

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

const TreeContainerStyle = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const MainTree: React.FC = () => {
    return (
        <TreeContainerStyle>
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
        </TreeContainerStyle>
    );
};
