// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

// interface initState {
//   tasks: {
//     id: number;
//     text: string;
//     completed: boolean;
//   }[];
//   filters: {
//     status: 'all' | 'active' | 'completed';
//   };
//   counterValue: {
//     value: number;
//   };
// }

// // Початкове значення стану Redux для кореневого редюсера, якщо не передати параметр preloadedState.
// const initialState: initState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: 'all',
//   },

//   counterValue: { value: 0 },
// };

// // Поки що використовуємо редюсер який тільки повертає отриманий стан
// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

////////////

import { createStore } from 'redux';

const reducer = (state: any, action: any) => {
  console.log(action);

  switch (action.type) {
    case 'increment':
      return {
        ...state,
        total: state.total + action.payload,
      };
    case 'decrement': {
      return {
        ...state,
        total: state.total - action.payload,
      };
    }
    case 'setStep': {
      return {
        ...state,
        step: action.payload,
      };
    }

    default:
      return state;
  }
};

export const store = createStore(reducer, { total: 0, step: 0, users: [] });
