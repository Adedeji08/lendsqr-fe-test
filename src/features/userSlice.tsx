import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'test',
    initialState: {
        user: null
    },
    reducers: {
     login: (state, action) => {
         state.user = action.payload;
     },
     dashboard: (state) => {
        state.user = null
     }
    },
  })

  export const {login, dashboard} = userSlice.actions

  export const selectUser = (state:(any)) => state.user.user

  export default userSlice.reducer