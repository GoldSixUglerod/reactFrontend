import React from 'react';
import Tree from 'react-d3-tree';
import { RawNodeDatum } from 'react-d3-tree/lib/types/common';
import styled from 'styled-components';
import Axios from 'axios';

import { employeeCardFn } from './EmployeeCard';

export interface NodeAttrs extends Record<string, string | number | boolean> {
    avatar: string;
    contact: string;
    position: string;
    department: string;
    score: number;
    tasksDescription: string;
    taskPriority: 1 | 2 | 3;
    taskDeadline: string;
    completed: boolean;
}

export interface TreeData extends RawNodeDatum {
    name: string;
    attributes?: NodeAttrs;
    children?: this[];
}

const dataTree: TreeData = {
    name: 'CEO',
    attributes: {
        avatar: 'M',
        contact: '@alias',
        position: 'WorkerPos',
        department: 'Dept A',
        score: 4.9,
        tasksDescription: 'Реализовать качественное и быстрое подметание дворовых территорий Правительства РФ',
        taskPriority: 1,
        taskDeadline: 'Tomorrow',
        completed: false,
    },
    children: [
        {
            name: 'Manager',
            attributes: {
                avatar: 'M',
                contact: '@alias',
                position: 'WorkerPos',
                department: 'Dept A',
                score: 4.9,
                tasksDescription: 'Реализовать качественное и быстрое подметание дворовых территорий Правительства РФ',
                taskPriority: 1,
                taskDeadline: 'Tomorrow',
                completed: true,
            },
            children: [
                {
                    name: 'Foreman',
                    attributes: {
                        avatar: 'M',
                        contact: '@alias',
                        position: 'WorkerPos',
                        department: 'Dept A',
                        score: 4.9,
                        tasksDescription:
                            'Реализовать качественное и быстрое подметание дворовых территорий Правительства РФ',
                        taskPriority: 1,
                        taskDeadline: 'Tomorrow',
                        completed: true,
                    },
                },
                {
                    name: 'Foreman',
                    attributes: {
                        avatar: 'M',
                        contact: '@alias',
                        position: 'WorkerPos',
                        department: 'Dept A',
                        score: 4.9,
                        tasksDescription:
                            'Реализовать качественное и быстрое подметание дворовых территорий Правительства РФ',
                        taskPriority: 1,
                        taskDeadline: 'Tomorrow',
                        completed: true,
                    },
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
    const [dataTree1, setDataTree] = React.useState('');
    Axios.get('http://10.91.54.113:8000/api/employee/1').then((response) => {
        setDataTree(response.data);
    });
    console.log(dataTree1);
    return (
        <TreeContainerStyle>
            {dataTree1}
            <Tree
                data={dataTree}
                initialDepth={3} // How many layers of tree to show initially
                orientation="vertical"
                zoomable
                depthFactor={300} // Distance btw nodes (number in px)
                nodeSize={{ x: 375, y: 300 }} // Box sizes of node
                renderCustomNodeElement={employeeCardFn}
                pathFunc="diagonal"
                translate={{ x: 250, y: 250 }} // Initial position in container
            />
        </TreeContainerStyle>
    );
};
