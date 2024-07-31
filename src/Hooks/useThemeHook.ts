import { selectGenearlSlice, setTheme } from '../Redux/features/generalSlice';
import { Theme } from '../Helpers/types';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';

const useTheme = () => {
    const dispatch = useAppDispatch();
    const {theme} = useAppSelector(selectGenearlSlice);

    const toggleTheme = () => {
        const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
        dispatch(setTheme(newTheme));
    };

    return { theme, toggleTheme };
};

export default useTheme;