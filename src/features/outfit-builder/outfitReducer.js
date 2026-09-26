import { INITIAL_SLOTS_STATE } from './slotConfig';

export const initialState = {
    slots: INITIAL_SLOTS_STATE,
    status: 'idle',
    result: null,
    error: null,
};

export function outfitReducer(state, action) {
    switch (action.type) {
        case 'SET_SLOT':
            return {
                ...state,
                slots: {
                    ...state.slots,
                    [action.payload.slotId]: action.payload.file,
                },
            };

            case 'CLEAR_SLOT':
                return{
                    ...state,
                    slots: {
                        ...state.slots,
                        [action.payload.slotId]: null,
                    },
                };
                
            case 'RESET_ALL':
                return {
                    ...initialState,
                };

            case 'START_GENERATION':
                return {
                    ...state,
                    status: 'generating',
                    error: null,
                };
            case 'GENERATION_SUCCESS':
                return {
                    ...state,
                    status: 'success',
                    result: action.payload,
                };
            case 'GENERATION_ERROR':
                return {
                    ...state,
                    status: 'error',
                    error: action.payload,
                };

                default:
                    return state;
    }
}