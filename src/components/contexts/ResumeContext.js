import React, { createContext, useReducer } from 'react';
import { ResumeReducer } from '../../reducers/ResumeReducer';

export const ResumeContext = createContext();
const initialState = [{ serie: 1, exoLabel: '',time: '', id: 0 , training: false}];

const ResumeContextProvider= (props) => {
    const [exercice, dispatch] = useReducer (ResumeReducer, initialState)


    return (
        <ResumeContext.Provider value={{exercice, dispatch, initialState}}>
            {props.children}
        </ResumeContext.Provider>
    )
}

export default ResumeContextProvider