import overview from './examples/overview.html';
import primary from './examples/primary.html';
import primaryReversed from './examples/primary-reversed.html';
import secondary from './examples/secondary.html';
import tertiary from './examples/tertiary.html';
import conversion from './examples/conversion.html';
import ghost from './examples/ghost.html';
import ghostReversed from './examples/ghost-reversed.html';

import { parameters } from '@vtmn/showcase-core/csf/components/VtmnButton.csf';

export default {
  title: 'Components / Button',
  argTypes: { onclick: { action: 'clicked' } },
  parameters,
};

export const Overview = () => overview;
Overview.parameters = {
  docs: {
    source: {
      code: overview,
    },
  },
};

export const Primary = () => primary;
Primary.parameters = {
  docs: {
    source: {
      code: primary,
    },
  },
};

export const PrimaryReversed = () => primaryReversed;
PrimaryReversed.parameters = {
  docs: {
    source: {
      code: primaryReversed,
    },
  },
  backgrounds: { default: 'blue' },
};

export const Secondary = () => secondary;
Secondary.parameters = {
  docs: {
    source: {
      code: secondary,
    },
  },
  backgrounds: { default: 'light' },
};

export const Tertiary = () => tertiary;
Tertiary.parameters = {
  docs: {
    source: {
      code: tertiary,
    },
  },
  backgrounds: { default: 'light' },
};

export const Conversion = () => conversion;
Conversion.parameters = {
  docs: {
    source: {
      code: conversion,
    },
  },
};

export const Ghost = () => ghost;
Ghost.parameters = {
  docs: {
    source: {
      code: ghost,
    },
  },
  backgrounds: { default: 'light' },
};

export const GhostReversed = () => ghostReversed;
GhostReversed.parameters = {
  docs: {
    source: {
      code: ghostReversed,
    },
  },
  backgrounds: { default: 'blue' },
};
