import {setup} from 'xstate';

export const testMachine = setup({}).createMachine({
  id: 'test',
  initial: 'first',
  states: {
    first: {
      after: {
        1000: 'second',
      },
    },
    second: {},
  },
});
