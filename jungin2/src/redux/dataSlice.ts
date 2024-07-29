import { createSlice } from "@reduxjs/toolkit";
import { Link } from "../type"

interface DataState {
    links: Link[];
}``

const initialState: DataState = {
    links: []
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setLinks: (state, action) => {
            state.links.push(action.payload);
        },
    },
});

export const { setLinks } = dataSlice.actions;
export default dataSlice.reducer;