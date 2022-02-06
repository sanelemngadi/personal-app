import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { useDispatch, useSelector } from 'react-redux';

const useFetchUser = () => {
    const state = useSelector(state => state);
    const dispatchs = useDispatch();

    const dispatch = bindActionCreators(actionCreators, dispatchs);

    return [state, dispatch];
};

export default useFetchUser;
