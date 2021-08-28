import React from 'react';
import { TreeNodeDatum } from 'react-d3-tree/lib/types/common';

interface EmployeeCardProps {
    width: number;
    height: number;
    x: number;
    y: number;
}

export const EmployeeCard: React.FC<{
    nodeData: TreeNodeDatum;
    triggerNodeToggle: () => void;
    foreignObjectProps: EmployeeCardProps;
}> = ({ nodeData, triggerNodeToggle, foreignObjectProps }) => {
    return (
        <>
            {/* <circle r={20}></circle>*/}
            <foreignObject {...foreignObjectProps}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: '1px solid black',
                        paddingBottom: '1rem',
                        backgroundColor: 'rgb(248, 248, 255)', // ghostwhite
                    }}
                >
                    <h3>{nodeData.name}</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {nodeData.attributes !== undefined &&
                            Object.entries(nodeData.attributes).map(([key, value], i) => (
                                <li key={`${key}-${i}`}>
                                    {key}: {value}
                                </li>
                            ))}
                    </ul>
                    {nodeData.children && (
                        <button type="button" style={{ textAlign: 'center' }} onClick={triggerNodeToggle}>
                            {/* eslint-disable-next-line no-underscore-dangle */}
                            {nodeData.__rd3t.collapsed ? '⬅️ ➡️ Expand' : '➡️ ⬅️ Collapse'}
                        </button>
                    )}
                </div>
            </foreignObject>
        </>
    );
};

export const employeeCardFn = ({
    nodeDatum,
    toggleNode,
}: {
    nodeDatum: TreeNodeDatum;
    toggleNode: () => void;
}): React.ReactElement => (
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
);
