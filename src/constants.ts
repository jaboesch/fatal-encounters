import { ATTACK_MANEUVER, DEFENSE_MANEUVER, DIRECTION, OUTCOME, RESET, TARGET } from "./types";

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

export const ALTERNATE_MARGIN_MOVES_2 = [
  "defense-slash-step-foot-success",
  "defense-slash-jump-foot-failure",
  "defense-slash-jump-foot-success",
  "defense-cut-parry-head-success"
]