import { createReducer, createSlice } from "@reduxjs/toolkit";

const estIni = {
    cont: 0,
    episodios2: [],
    infoPer: []
};

const reducers = createSlice({
    name: 'holaAPP',
    initialState: estIni,
    reducers: {
        setEpisodios: (state,action) => {
            state.episodios2 = action.payload;
        },
        setInfoAdd: (state,action) => {
            state.infoPer = action.payload;
        }   
    }


});

export const {setEpisodios,setInfoAdd} = reducers.actions;
export default reducers.reducer;