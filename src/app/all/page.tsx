import { ALTERNATE_MARGIN_MOVES_2 } from "@/constants";
import {
  formatAttackString,
  formatDefenseString,
  getAllAttackStrings,
  getAllDefenseStrings,
  getAllMoves,
} from "@/utilities";
import clsx from "clsx";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const allMoves = getAllMoves();
  const allAttackStrings = getAllAttackStrings(allMoves);
  const allDefenseStrings = getAllDefenseStrings(allMoves);
  // unique moves disregard the reset
  const allUniqueMoves = [
    ...new Set(
      allMoves.map((move) => {
        return JSON.stringify({
          attackType: move.attackType,
          target: move.target,
          direction: move.direction,
          defenseType: move.defenseType,
          outcome: move.outcome,
        });
      })
    ),
  ].map((move) => JSON.parse(move));

  return (
    <div className="flex flex-col max-w-5xl w-full mx-auto justify-center items-center gap-12">
      <h1 className="text-2xl mt-5">Attack Moves</h1>
      <table className="table-auto border-collapse border max-w-[700px] w-full">
        <thead>
          <tr>
            <th className="border h-[50px] bg-gray-500 text-white">Attack</th>
            <th className="border h-[50px] bg-gray-500 text-white">SVG</th>
          </tr>
        </thead>
        <tbody>
          {allAttackStrings.map((attackString) => {
            return (
              <tr key={attackString}>
                <td className="border bg-gray-100 p-2 font-mono">
                  {attackString}
                </td>
                <td className="border bg-gray-100 p-2">
                  <img
                    className="size-[50px] mx-auto"
                    src={`/assets/actors/${attackString}.svg`}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1 className="text-2xl">Defense Moves</h1>
      <table className="table-auto border-collapse border max-w-[700px] w-full">
        <thead>
          <tr>
            <th className="border h-[50px] bg-gray-500 text-white">Defense</th>
            <th className="border h-[50px] bg-gray-500 text-white">SVG</th>
          </tr>
        </thead>
        <tbody>
          {allDefenseStrings.map((defenseString) => {
            return (
              <tr key={defenseString}>
                <td className="border bg-gray-100 p-2 font-mono">
                  {defenseString}
                  {ALTERNATE_MARGIN_MOVES_2.includes(defenseString) && " (2)"}
                </td>
                <td className="border bg-gray-100 p-2">
                  <img
                    className="size-[50px] mx-auto"
                    src={`/assets/actors/${defenseString}.svg`}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1 className="text-2xl mt-5">All Sequences</h1>
      <table className="table-auto border-collapse border max-w-[1000px] w-full">
        <thead>
          <tr>
            <th className="border h-[50px] bg-gray-500 text-white">Attacker</th>
            <th className="border h-[50px] bg-gray-500 text-white">Attack</th>
            <th className="border h-[50px] bg-gray-500 text-white">Target</th>
            <th className="border h-[50px] bg-gray-500 text-white">
              Direction
            </th>
            <th className="border h-[50px] bg-gray-500 text-white">Defense</th>
            <th className="border h-[50px] bg-gray-500 text-white">Outcome</th>
            <th className="border h-[50px] bg-gray-500 text-white">SVGs</th>
          </tr>
        </thead>
        <tbody>
          {allUniqueMoves.map((move, i) => {
            return (
              <tr key={`move-${i}`}>
                <td className="border bg-gray-100 p-2 font-mono">L</td>
                <td className="border bg-gray-100 p-2 font-mono">
                  {move.attackType}
                </td>
                <td className="border bg-gray-100 p-2 font-mono">
                  {move.target}
                </td>
                <td className="border bg-gray-100 p-2 font-mono">
                  {move.direction}
                </td>
                <td className="border bg-gray-100 p-2 font-mono">
                  {move.defenseType}
                </td>
                <td className="border bg-gray-100 p-2 font-mono">
                  {move.outcome}
                </td>
                <td className="border bg-gray-100 p-2">
                  <div className="flex flex-row justify-center">
                    <img
                      className="size-[50px]"
                      src={`/assets/actors/${formatAttackString(move)}.svg`}
                    />
                    <img
                      className={clsx(
                        "size-[50px] transform scale-x-[-1]",
                        ALTERNATE_MARGIN_MOVES_2.includes(
                          formatDefenseString(move)
                        )
                          ? "ml-[-15px]"
                          : "ml-[-10px]"
                      )}
                      src={`/assets/actors/${formatDefenseString(move)}.svg`}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
