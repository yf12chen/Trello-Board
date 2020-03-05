import { CONSTANTS } from './index';
//redux action creator
export const addCard = (listID, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { listID, text },
    };
};