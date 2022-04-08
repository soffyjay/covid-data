import actionType from "./ActionTypes";

export const fetchAllCasesRequest = () => {
  return {
    type: actionType.FETCH_ALL_CASES_REQUEST,
  };
};

export const fetchAllCasesSuccess = (countries) => {
  return {
    type: actionType.FETCH_ALL_CASES_SUCCESS,
    payload: countries,
  };
};

export const fetchAllCasesFailure = (error) => {
  return {
    type: actionType.FETCH_ALL_CASES_FAILURE,
    payload: error,
  };
};
export const fetchCountryCasesRequest = () => {
  return {
    type: actionType.FETCH_COUNTRY_CASES_REQUEST,
  };
};

export const fetchCountryCasesSuccess = (countries) => {
  return {
    type: actionType.FETCH_COUNTRY_CASES_SUCCESS,
    payload: countries,
  };
};

export const fetchCountryCasesFailure = (error) => {
  return {
    type: actionType.FETCH_COUNTRY_CASES_FAILURE,
    payload: error,
  };
};
export const fetchGraphCasesRequest = () => {
  return {
    type: actionType.FETCH_GRAPH_CASES_REQUEST,
  };
};

export const fetchGraphCasesSuccess = (countries) => {
  return {
    type: actionType.FETCH_GRAPH_CASES_SUCCESS,
    payload: countries,
  };
};

export const fetchGraphCasesFailure = (error) => {
  return {
    type: actionType.FETCH_GRAPH_CASES_FAILURE,
    payload: error,
  };
};
