import omit from "lodash/omit";
import { legacy_createStore as createStore } from "redux";

// BEGIN (write your solution here)
const reducer = (state = {}, { type, payload }) => {
    switch (type) {
        case "TASK_ADD": {
            return {
                ...state,
                [payload.task.id]: payload.task
            };
        }
        case "TASK_REMOVE": {
            return omit(state, payload.id);
        }
        default:
            return state;
    }
}

export default function generateStore(initialState = {}) {
    return createStore(reducer, initialState);
}
// END
