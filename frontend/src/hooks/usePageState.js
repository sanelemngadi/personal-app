import { useState } from 'react';

const usePageState = () => {
    const [pageState, setPageState] = useState({
        isLoading: false,
        hasError: null
    });

    return [pageState, setPageState]
};

export default usePageState;
