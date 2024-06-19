export const MODE = {
  ATTACK: "attack",
  DEFENSE: "defense",
};

export const ATTACK_MANEUVER = {
  SLASH: "slash",
  CUT: "cut",
  THRUST: "thrust",
};

export const DEFENSE_MANEUVER = {
  PARRY: "parry",
  DUCK: "duck",
  JUMP: "jump",
  DODGE: "dodge",
  STEP: "step",
};

export const TARGET = {
  DIAGONAL: "diagonal",
  CHEST: "chest",
  STOMACH: "stomach",
  FOOT: "foot",
  HEAD: "head",
  HIP: "hip",
  SHOULDER: "shoulder",
};

export const DIRECTION = {
  LEFT: "left",
  RIGHT: "right",
  FORWARD: "forward",
};

export const OUTCOME = {
  SUCCESS: "success",
  FAILURE: "failure",
};

export const RESET = {
  BEAT_PARRY: "beat_parry",
  CROISE_OFF: "croise_off",
  BIND_OFF: "bind_off",
  WITHDRAW: "withdraw",
  EN_GARDE: "en_garde",
};

export const STANDARD_PARRY_DEFENSE = {
  [DEFENSE_MANEUVER.PARRY]: {
    [OUTCOME.SUCCESS]: {
      [RESET.BEAT_PARRY]: null,
      [RESET.CROISE_OFF]: null,
      [RESET.BIND_OFF]: null,
      [RESET.WITHDRAW]: null,
    },
    [OUTCOME.FAILURE]: {
      [RESET.EN_GARDE]: null,
    },
  },
};

export const STANDARD_OUTCOME_RESET = {
  [OUTCOME.SUCCESS]: {
    [RESET.EN_GARDE]: null,
  },
  [OUTCOME.FAILURE]: {
    [RESET.EN_GARDE]: null,
  },
};

export const VALID_MOVE_TREE = {
  /**
   * THRUST
   */
  [ATTACK_MANEUVER.THRUST]: {
    [TARGET.SHOULDER]: {
      [DIRECTION.LEFT]: STANDARD_PARRY_DEFENSE,
      [DIRECTION.RIGHT]: STANDARD_PARRY_DEFENSE,
    },
    [TARGET.CHEST]: {
      [DIRECTION.FORWARD]: {
        [DEFENSE_MANEUVER.PARRY]: {
          [OUTCOME.SUCCESS]: {
            [RESET.BEAT_PARRY]: null,
          },
          [OUTCOME.FAILURE]: {
            [RESET.EN_GARDE]: null,
          },
        },
      },
    },
    [TARGET.HIP]: {
      [DIRECTION.LEFT]: STANDARD_PARRY_DEFENSE,
      [DIRECTION.RIGHT]: STANDARD_PARRY_DEFENSE,
    },
  },
  /**
   * CUT
   */
  [ATTACK_MANEUVER.CUT]: {
    [TARGET.SHOULDER]: {
      [DIRECTION.LEFT]: STANDARD_PARRY_DEFENSE,
      [DIRECTION.RIGHT]: STANDARD_PARRY_DEFENSE,
    },
    [TARGET.HEAD]: {
      [DIRECTION.FORWARD]: {
        [DEFENSE_MANEUVER.PARRY]: {
          [OUTCOME.SUCCESS]: {
            [RESET.BEAT_PARRY]: null,
            [RESET.BIND_OFF]: null,
            [RESET.WITHDRAW]: null,
          },
          [OUTCOME.FAILURE]: {
            [RESET.EN_GARDE]: null,
          },
        },
      },
    },
    [TARGET.HIP]: {
      [DIRECTION.LEFT]: STANDARD_PARRY_DEFENSE,
      [DIRECTION.RIGHT]: STANDARD_PARRY_DEFENSE,
    },
  },
  /**
   * SLASH
   */
  [ATTACK_MANEUVER.SLASH]: {
    [TARGET.DIAGONAL]: {
      [DIRECTION.LEFT]: {
        [DEFENSE_MANEUVER.DUCK]: STANDARD_OUTCOME_RESET,
      },
      [DIRECTION.RIGHT]: {
        [DEFENSE_MANEUVER.DUCK]: STANDARD_OUTCOME_RESET,
      },
    },
    [TARGET.HEAD]: {
      [DIRECTION.FORWARD]: {
        [DEFENSE_MANEUVER.DUCK]: STANDARD_OUTCOME_RESET,
      },
    },
    [TARGET.STOMACH]: {
      [DIRECTION.FORWARD]: {
        [DEFENSE_MANEUVER.DODGE]: STANDARD_OUTCOME_RESET,
      },
    },
    [TARGET.FOOT]: {
      [DIRECTION.FORWARD]: {
        [DEFENSE_MANEUVER.JUMP]: STANDARD_OUTCOME_RESET,
        [DEFENSE_MANEUVER.STEP]: STANDARD_OUTCOME_RESET,
      },
    },
  },
};
