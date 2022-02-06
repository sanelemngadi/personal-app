
const useBaseEndPoint = (endpoint) => {
    const url = `${process.env.REACT_APP_BASE_URL}` + endpoint;
    return url;
};

export default useBaseEndPoint;
