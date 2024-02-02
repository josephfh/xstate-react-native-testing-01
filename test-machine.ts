import {setup} from 'xstate';

export const testMachine = setup({}).createMachine({
  id: 'test',
  initial: 'first',
  states: {
    first: {
      after: {
        2000: 'second',
      },
      on: {
        click: {
          actions: [() => console.log('click!')],
          target: 'second',
        },
      },
    },
    second: {
      on: {
        click: {
          actions: [() => console.log('click!')],
          target: 'first',
        },
      },
    },
  },
});
