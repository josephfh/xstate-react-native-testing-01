import {fromPromise, setup} from 'xstate';

export const testMachine = setup({
  actors: {
    testActor: fromPromise(async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {};
    }),
  },
}).createMachine({
  id: 'test',
  initial: 'Unauthenticated',
  states: {
    Unauthenticated: {
      initial: 'idle',
      states: {
        idle: {
          after: {
            1000: {
              target: 'logIn',
            },
          },
        },
        logIn: {
          invoke: {
            src: 'testActor',
            id: 'testActor',
            systemId: 'testActor',
            onDone: {
              target: '#test.Authenticated',
            },
          },
        },
      },
    },
    Authenticated: {
      states: {
        Area: {
          initial: 'overview',
          states: {
            overview: {},
          },
        },
        Auth: {
          initial: 'idle',
          states: {
            idle: {},
          },
        },
      },
      type: 'parallel',
    },
  },
});
