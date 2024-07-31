import { setScrollState, setScrollStateMoveUp, setScrollStateMoveDown, setScrollStateMoveFinished, resetScrollState, setTheme } from '../Redux/features/generalSlice';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { selectGenearlSlice } from '../Redux/features/generalSlice';
import {ScrollState, Theme} from '../Helpers/types';

const useGeneralState = () => {
  const dispatch = useAppDispatch();
  const generalState = useAppSelector(selectGenearlSlice);

  const updateScrollState = (scrollState: ScrollState) => {
    dispatch(setScrollState(scrollState));
  };

  const updateScrollStateMoveUp = (scrollState: ScrollState) => {
    dispatch(setScrollStateMoveUp(scrollState));
  };

  const updateScrollStateMoveDown = (scrollState: ScrollState) => {
    dispatch(setScrollStateMoveDown(scrollState));
  };

  const updateScrollStateMoveFinished = (scrollState: ScrollState) => {
    dispatch(setScrollStateMoveFinished(scrollState));
  };

  const resetScroll = () => {
    dispatch(resetScrollState({reset: true}));
  };

  const changeTheme = (theme: Theme) => {
    dispatch(setTheme(theme));
  };

  return {
    generalState,
    updateScrollState,
    updateScrollStateMoveUp,
    updateScrollStateMoveDown,
    updateScrollStateMoveFinished,
    resetScroll,
    changeTheme,
  };
};

export default useGeneralState;