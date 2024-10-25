import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

// BEGIN (write your solution here)
export const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: usersAdapter.addMany
    }
});

export const {actions} = usersSlice;
export const selectors = usersAdapter.getSelectors(
    (state) => state.usersReducer
);
export default usersSlice.reducer;
// END
