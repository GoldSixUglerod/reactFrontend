import React, { useEffect } from 'react';
import Tree from 'react-d3-tree';
import { RawNodeDatum } from 'react-d3-tree/lib/types/common';
import styled from 'styled-components';
import Axios from 'axios';

import { employeeCardFn } from './EmployeeCard';

export interface NodeAttrs extends Record<string, string | number | boolean> {
    userId: number;
    avatar: string;
    contact: string;
    position: string;
    department: string;
    score: number;
    taskName: string;
    taskDescription: string;
    taskPriority: 1 | 2 | 3;
    taskDeadline: string;
    completed: boolean;
}

export interface TreeData extends RawNodeDatum {
    name: string;
    attributes?: Record<string, string | number | boolean>;
    children?: this[];
}

const initDataTree: TreeData = {
    name: 'CEO',
    attributes: {
        userId: 1,
        avatar: 'M',
        contact: '@alias',
        position: 'WorkerPos',
        department: 'Dept A',
        score: 4.9,
        taskName: 'двор, подметание, правительство РФ',
        taskDescription: 'Реализовать качественное и быстрое подметание дворовых территорий Правительства РФ',
        taskPriority: 1,
        taskDeadline: 'Tomorrow',
        completed: false,
    },
    children: [
        {
            name: 'Manager',
            attributes: {
                userId: 2,
                avatar: 'M',
                contact: '@alias',
                position: 'WorkerPos',
                department: 'Dept A',
                score: 4.9,
                taskName: 'двор, подметание, правительство РФ',
                taskDescription: 'Реализовать качественное и быстрое подметание дворовых территорий Правительства РФ',
                taskPriority: 1,
                taskDeadline: 'Tomorrow',
                completed: true,
            },
            children: [
                {
                    name: 'Foreman',
                    attributes: {
                        userId: 3,
                        avatar: 'M',
                        contact: '@alias',
                        position: 'WorkerPos',
                        department: 'Dept A',
                        score: 4.9,
                        taskName: 'двор, подметание, правительство РФ',
                        taskDescription:
                            'Реализовать качественное и быстрое подметание дворовых территорий Правительства РФ',
                        taskPriority: 1,
                        taskDeadline: 'Tomorrow',
                        completed: true,
                    },
                },
                {
                    name: 'Foreman',
                    attributes: {
                        userId: 4,
                        avatar: 'M',
                        contact: '@alias',
                        position: 'WorkerPos',
                        department: 'Dept A',
                        score: 4.9,
                        taskName: 'двор, подметание, правительство РФ',
                        taskDescription:
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
    const [dataTree, setDataTree] = React.useState<TreeData>(initDataTree);
    console.log(dataTree);
    useEffect(() => {
        const apiUrl = 'http://10.91.54.113:8000/api/employee/1';
        Axios.get(apiUrl).then((response) => {
            setDataTree({
                ...response.data,
                attributes: {
                    userId: response.data.attributes.id,
                    department: `${response.data.attributes.department}`,
                    contact: response.data.attributes.email,
                    position: response.data.attributes.status,
                    score: 5,
                },
            });
        });
    }, []);
    return (
        <TreeContainerStyle>
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
