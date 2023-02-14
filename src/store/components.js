import { createSlice } from '@reduxjs/toolkit'
import {produce} from 'immer'
export const initialState = {
  currentlyEdited: null,
  items: [],
};

export const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    addComponent: (state, action) => {
      return produce(state,newState => {
        newState.currentlyEdited={...action.payload, values: {}}
        newState.items.push({...action.payload, values: {}})
      })
    },
    updateComponent: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)

      if(index !== -1){
        return produce(state,newState => {
          newState.currentlyEdited = null
          newState.items[index]={...newState.items[index], values: action.payload.data.values}
        })
      }
    },
    removeComponent: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);

      if (index !== -1) {
        return produce(state,newState =>{
          newState.items.splice(index, 1);
          newState.currentlyEdited = null;
        })
      } else return state
    },
    setEditedComponent: (state, action) => {
      return produce(state,newState=>{
        newState.currentlyEdited = action.payload.component
      });
    },
  },
})

export const componentsActions = componentsSlice.actions
export const componentsReducer = componentsSlice.reducer


