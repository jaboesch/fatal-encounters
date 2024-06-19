"use client";

import { VALID_MOVE_TREE } from "@/constants";
import { generateTxHash } from "@/utilities";
import React from "react";

const TreeNode = ({
  node,
  label,
  depth,
}: {
  node: any;
  label: string;
  depth: number;
}) => {
  const marginY = 20 / (depth + 1);
  return (
    <div className="flex min-w-max flex-row justify-end gap-5 items-center border-white border-y border-l ml-[-1px] my-[-1px] bg-black/5">
      <div className="flex flex-col gap-2 min-w-[150px] justify-center items-center p-1">
        <p>{`${label}`}</p>
      </div>
      {node !== null && (
        <div
          className="flex flex-col min-w-max"
          style={{
            gap: `${marginY}px`,
          }}
        >
          {Object.keys(node).map((key) => (
            <TreeNode
              node={node[key]}
              label={key}
              key={generateTxHash()}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FlowChart = () => {
  return (
    <div className="w-full max-w-6xl overflow-x-auto">
      <div className="flex min-w-max flex-row justify-end gap-5 bg-black/50 items-center ">
        {[
          "Mode",
          "Attack Type",
          "Target",
          "Direction",
          "Defense",
          "Outcome",
          "Reset",
        ].map((label) => (
          <div
            className="flex flex-col min-w-[150px] justify-center items-center p-1 border-white border-l "
            key={label}
          >
            <p className="text-white font-medium">{`${label}`}</p>
          </div>
        ))}
      </div>
      <div className="flex w-full">
        <TreeNode node={VALID_MOVE_TREE} label="Attack" depth={0} />
      </div>
    </div>
  );
};

export default FlowChart;
