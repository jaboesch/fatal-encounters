import { VALID_MOVE_TREE } from "./constants";
import {
  ATTACK_MANEUVER,
  AttackString,
  DEFENSE_MANEUVER,
  DefenseString,
  DIRECTION,
  MODE,
  Move,
  OUTCOME,
  RESET,
  TARGET,
} from "./types";

export const generateTxHash = () => {
  const chars = "abcdef0123456789";
  let hash = "0x";
  for (let i = 0; i < 64; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
};

export const traverseTree = (
  rules: any,
  path: string[] = [],
  paths: string[][] = []
): string[][] => {
  for (const key in rules) {
    const currentPath = [...path, key];
    if (rules[key]) {
      traverseTree(rules[key] as any, currentPath, paths);
    } else {
      paths.push(currentPath);
    }
  }
  return paths;
};

export const getAllMoves = () => {
  const allPaths = traverseTree(VALID_MOVE_TREE);
  const allMoves: Move[] = allPaths.map((path) => {
    return {
      attackType: path[0] as ATTACK_MANEUVER,
      target: path[1] as TARGET,
      direction: path[2] as DIRECTION,
      defenseType: path[3] as DEFENSE_MANEUVER,
      outcome: path[4] as OUTCOME,
      reset: path[5] as RESET,
    };
  });
  return allMoves;
};

export const formatAttackString = (move: Move) => {
  return `${MODE.ATTACK}-${move.attackType}-${move.target}` as AttackString;
};

export const formatDefenseString = (move: Move) => {
  return `${MODE.DEFENSE}-${move.attackType}-${move.defenseType}-${move.target}-${move.outcome}` as DefenseString;
};

export const getAllAttackStrings = (allMoves: Move[]): AttackString[] => {
  const allAttackStrings = new Set(
    allMoves.map((move) => {
      return formatAttackString(move);
    })
  );
  return [...allAttackStrings];
};

export const getAllDefenseStrings = (allMoves: Move[]): DefenseString[] => {
  const allDefenseStrings = new Set(
    allMoves.map((move) => {
      return formatDefenseString(move);
    })
  );
  return [...allDefenseStrings];
};
