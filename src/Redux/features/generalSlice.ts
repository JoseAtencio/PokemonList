import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { RootState } from '../';
import { ScrollState, Theme } from '../../Helpers/types'; 

interface IInittialState extends ScrollState {
    theme: Theme;
}

const initialState: IInittialState = {
    scrollYRedux: 0,
    scrollingIsUp: false,
    scrollingFinished: false,
    scrollingIsDown: false,
    theme: 'light', // Estado inicial del tema
}

const generalSlice: Slice = createSlice({
  name: 'genearlSlice',
  initialState,
  reducers: {
    setScrollState: (state, action: PayloadAction<ScrollState>) => {
      state.scrollYRedux = action.payload.scrollYRedux;
      state.scrollingIsUp = action.payload.scrollingIsUp;
      state.scrollingFinished = action.payload.scrollingFinished;
      state.scrollingIsDown = action.payload.scrollingIsDown;
    },
    setScrollStateMoveUp: (state, action: PayloadAction<boolean>) => {
        state.scrollingIsUp = action.payload;
    },
    setScrollStateMoveDown: (state, action: PayloadAction<boolean>) => {
        state.scrollingIsDown = action.payload;
    },
    setScrollStateMoveFinished: (state, action: PayloadAction<boolean>) => {
        state.scrollingFinished = action.payload;
    },
    resetScrollState: (state:ScrollState, action: PayloadAction<boolean>) => {
        state.scrollYRedux = 0;
        state.scrollingIsUp = false;
        state.scrollingFinished = false;
        state.scrollingIsDown = false;
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
        state.theme = action.payload;
    }
   }
});

export const { setScrollState, setScrollStateMoveUp, setScrollStateMoveDown, setScrollStateMoveFinished, resetScrollState, setTheme } = generalSlice.actions;

export const selectGenearlSlice = (state: RootState) => state.genearlSlice;

export default generalSlice.reducer;