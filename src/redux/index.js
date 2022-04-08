import {
  fetchAllCasesSuccess,
  fetchAllCasesRequest,
  fetchAllCasesFailure,
  fetchCountryCasesRequest,
  fetchCountryCasesSuccess,
  fetchCountryCasesFailure,
  fetchGraphCasesRequest,
  fetchGraphCasesSuccess,
  fetchGraphCasesFailure,
} from "./Actions";
import axios from "axios";

export const fetchAllCases = () => {
  return (dispatch) => {
    dispatch(fetchAllCasesRequest());
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/all`)
      .then((response) => {
        dispatch(fetchAllCasesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchAllCasesFailure(error.message));
      });
  };
};

export const fetchCountryCases = () => {
  return (dispatch) => {
    dispatch(fetchCountryCasesRequest());
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/countries`)
      .then((response) => {
        dispatch(fetchCountryCasesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCountryCasesFailure(error.message));
      });
  };
};

export const fetchGraphCases = () => {
  return (dispatch) => {
    dispatch(fetchGraphCasesRequest());
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/historical/all?lastdays=all`)
      .then((response) => {
        dispatch(fetchGraphCasesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchGraphCasesFailure(error.message));
      });
  };
};
