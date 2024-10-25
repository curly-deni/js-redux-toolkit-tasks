import {combineReducers} from "redux";
import {omitBy, omit} from "lodash";

const comments = (state = {}, {type, payload}) => {
    // BEGIN (write your solution here)
    switch (type) {
        case "TASK_COMMENT_ADD": {
            return {
                ...state,
                [payload.comment.id]: payload.comment
            };
        }
        case "TASK_COMMENT_REMOVE": {
            return omit(state, payload.id);
        }
        case "TASK_REMOVE": {
            return omitBy(state, ({taskId}) => taskId === payload.id);
        }
        default:
            return state;
    }
    // END
};

const tasks = (state = {}, {type, payload}) => {
    // BEGIN (write your solution here)
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
    // END
};

export default combineReducers({
    comments,
    tasks,
});
