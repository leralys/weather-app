import {
    CHANGE_SEARCH_TEXT
} from '../constants';

const changeSearchText = text => {
    return {
        type: CHANGE_SEARCH_TEXT,
        payload: text
    }
}

export default changeSearchText;