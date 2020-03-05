import { CONSTANTS } from './index';
//redux action creator
export const addList = (title) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title,
    };
}