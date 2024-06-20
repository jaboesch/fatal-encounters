import { ALTERNATE_MARGIN_MOVES_2, VALID_MOVE_TREE } from "./constants";
import { CHARACTER, DIRECTION, Move, OUTCOME, Sequence } from "./types";
import {
  createMoveFromPath,
  formatAttackString,
  formatDefenseString,
  getAllAttackStrings,
  randomCoinFlip,
  randomTraversal,
} from "./utilities";
import seedrandom from "seedrandom";

export const generateScene = ({
  txHash,
  numSequences,
}: {
  txHash: string;
  numSequences: number;
}) => {
  const prng = seedrandom(txHash);
  const scene: Sequence[] = [];
  for (let i = 0; i < numSequences; i++) {
    const path = randomTraversal(VALID_MOVE_TREE, prng);
    const move = createMoveFromPath(path);
    const attacker = randomCoinFlip(prng) ? CHARACTER.LEFT : CHARACTER.RIGHT;
    scene.push({ move, attacker });
  }
  return scene;
};

export const generateSequenceScript = (sequence: Sequence) => {
  const { move, attacker } = sequence;
  const attackScriptLine = `attacks with a ${move.attackType.toUpperCase()} to the ${
    move.direction !== DIRECTION.FORWARD ? move.direction.toUpperCase() : ""
  } ${move.target.toUpperCase()}.`;
  const defenseScriptLine =
    move.outcome === OUTCOME.SUCCESS
      ? `successfully DEFENDS with a ${move.defenseType.toUpperCase()} and resets with ${move.reset.toUpperCase()}.`
      : `FAILS to ${move.defenseType.toUpperCase()} and resets to ${move.reset.toUpperCase()}.`;
  return {
    attackCharacter: attacker,
    defenseCharacter:
      attacker === CHARACTER.LEFT ? CHARACTER.RIGHT : CHARACTER.LEFT,
    attackScriptLine,
    defenseScriptLine,
  };
};

export const generateSequenceMedia = (sequence: Sequence) => {
  const { move, attacker } = sequence;
  const attackString = formatAttackString(move);
  const defenseString = formatDefenseString(move);

  // SIR JAMES always fights on the left
  if (attacker === CHARACTER.LEFT) {
    return [
      // SIR JAMES
      {
        filename: `/assets/actors/${attackString}.svg`,
        margin: "",
        zIndex: move.direction === DIRECTION.LEFT ? "z-1" : "z-10",
      },
      // SIR WILLIAM
      {
        filename: `/assets/actors/${defenseString}.svg`,
        margin: ALTERNATE_MARGIN_MOVES_2.includes(defenseString)
          ? "ml-[-15px]"
          : "ml-[-10px]",
        zIndex: move.direction === DIRECTION.LEFT ? "z-10" : "z-1",
      },
    ];
  } else {
    return [
      // SIR JAMES
      {
        filename: `/assets/actors/${defenseString}.svg`,
        margin: "",
        zIndex: move.direction === DIRECTION.LEFT ? "z-1" : "z-10",
      },
      // SIR WILLIAM
      {
        filename: `/assets/actors/${attackString}.svg`,
        margin: ALTERNATE_MARGIN_MOVES_2.includes(defenseString)
          ? "ml-[-15px]"
          : "ml-[-10px]",
        zIndex: move.direction === DIRECTION.LEFT ? "z-10" : "z-1",
      },
    ];
  }
};

export const generateSceneAssets = (scene: Sequence[]) => {
  const assets = scene.map((sequence) => {
    const script = generateSequenceScript(sequence);
    const media = generateSequenceMedia(sequence);
    return {
      script,
      mediaLeft: media[0],
      mediaRight: media[1],
    };
  });
  return assets;
};
