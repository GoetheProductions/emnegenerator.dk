import { FETCH_DUMMY_DATA } from '../actions/dummydata';

export default function(state = [], action) {
    switch (action.type) {

    case FETCH_DUMMY_DATA:
        return action.payload
    }

    return state
}