export enum MODE {
  ATTACK = "attack",
  DEFENSE = "defense",
}

export enum ATTACK_MANEUVER {
  SLASH = "slash",
  CUT = "cut",
  THRUST = "thrust",
}

export enum DEFENSE_MANEUVER {
  PARRY = "parry",
  DUCK = "duck",
  JUMP = "jump",
  DODGE = "dodge",
  STEP = "step",
}

export enum TARGET {
  DIAGONAL = "diagonal",
  CHEST = "chest",
  STOMACH = "stomach",
  FOOT = "foot",
  HEAD = "head",
  HIP = "hip",
  SHOULDER = "shoulder",
}

export enum DIRECTION {
  LEFT = "left",
  RIGHT = "right",
  FORWARD = "forward",
}

export enum OUTCOME {
  SUCCESS = "success",
  FAILURE = "failure",
}

export enum RESET {
  BEAT_PARRY = "beat_parry",
  CROISE_OFF = "croise_off",
  BIND_OFF = "bind_off",
  WITHDRAW = "withdraw",
  EN_GARDE = "en_garde",
}

export enum CHARACTER {
  LEFT = "Sir James",
  RIGHT = "Sir William",
}

export type Move = {
  attackType: ATTACK_MANEUVER;
  target: TARGET;
  direction: DIRECTION;
  defenseType: DEFENSE_MANEUVER;
  outcome: OUTCOME;
  reset: RESET;
};

export type Sequence = {
  attacker: CHARACTER;
  move: Move;
}

export type AttackString = `${MODE.ATTACK}-${ATTACK_MANEUVER}-${TARGET}`;
export type DefenseString = `${MODE.DEFENSE}-${ATTACK_MANEUVER}-${DEFENSE_MANEUVER}-${TARGET}-${OUTCOME}`;
