import { FETCH_USER} from "../actions/types";

export default function(state = null, action) {
    //console.log(action);
    switch (action.type ) {
        case FETCH_USER:
            // returns null (not run yet), the data if logged in, or false if not logged in
            return action.payload || false;
        default:
            return state;

    }
}
