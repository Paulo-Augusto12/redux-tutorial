import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  counter: {
    value: 0,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "counter/incrementing": {
      return {
        ...state,
        counter: {
          value: state.counter.value + 1,
        },
      };
    }
    case "counter/incrementAmmount": {
      return {
        ...state,
        counter: {
          value: state.counter.value + action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export const store = createStore(reducer, composeWithDevTools());
