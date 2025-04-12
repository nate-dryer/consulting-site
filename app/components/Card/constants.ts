import {
  CARD_RADIUS,
  CARD_PADDING,
  CARD_PADDING_MD,
  TRANSITION_DEFAULT,
  HOVER_LIFT,
  SHADOW_DEFAULT,
  SHADOW_HOVER,
} from "../../constants/design";

export const ANIMATION = {
  DURATION: 0.3,
  SHADOWS: {
    BASE: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    HOVER: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
} as const;

export const CLASSES = {
  BASE: `bg-white ${CARD_RADIUS} ${SHADOW_DEFAULT}`,
  INTERACTIVE: TRANSITION_DEFAULT,
  HOVER: `${SHADOW_HOVER} ${HOVER_LIFT}`,
  PADDING: {
    DEFAULT: "p-6 sm:p-7",
    FEATURE: `${CARD_PADDING} ${CARD_PADDING_MD}`,
  },
} as const;

export const VARIANTS = {
  CARD: {
    initial: {
      scale: 1,
      y: 0,
      boxShadow: ANIMATION.SHADOWS.BASE,
    },
    hover: {
      scale: 1.01,
      y: -2,
      boxShadow: ANIMATION.SHADOWS.HOVER,
    },
  },
} as const;
