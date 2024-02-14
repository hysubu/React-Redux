import {createSlice} from "@reduxjs/toolkit"


const userSlice = createSlice({
    name :"UserDetails", 
    initialState : [],
    reducers :{
        adduser(state , action){
            return action.payload  = "dddd"
        } , 
        removeUser(state , action){} , 
        deleteUser(state , action){}
    }
})
console.log("user" , userSlice)


export default userSlice