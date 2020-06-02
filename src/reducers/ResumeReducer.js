import { v1 as uuidv1 } from 'uuid';

export const ResumeReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EX_TIME' :
            return [...state, {
                serie: action.exo.serie, 
                exoLabel: action.exo.exoLabel,
                time: action.exo.time,
                pauseSerie: 0,
                id: uuidv1()
            }];

        case 'ADD_SERIE' :
            return [...state, {
                serie: action.exo.serie, 
                exoLabel: action.exo.exoLabel,
                time: action.exo.time,
                pauseSerie: action.exo.pauseSerie,
                id: uuidv1()
            }];

        case 'RESET' :
            console.log(state)
            return action.initialState

        case 'START_TRAINING':
            return[...state, {
                training: action.exo.training,
                time: action.exo.time
            }]
        /*
        case 'REMOVE_EX_TIME' :
            return state.filter(book => book.id !== action.id);
        */

        default:
            return state
    }
}