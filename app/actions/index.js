import { CHANGE_AUTH, FETCH_DUMMY_DATA } from './types';

export function authendicate(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}

export function fetchData() {
    return {
        type: FETCH_DUMMY_DATA,
        payload: [
            {name: 'eventOne'},
            {name: 'eventTwo'},
            {name: 'eventThree'},
            {name: 'eventFour'}
        ]
    }
}