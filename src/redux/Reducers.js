import {
  FETCH_ALL_CASES_REQUEST,
  FETCH_ALL_CASES_SUCCESS,
  FETCH_ALL_CASES_FAILURE,
  FETCH_COUNTRY_CASES_REQUEST,
  FETCH_COUNTRY_CASES_SUCCESS,
  FETCH_COUNTRY_CASES_FAILURE,
  FETCH_GRAPH_CASES_REQUEST,
  FETCH_GRAPH_CASES_SUCCESS,
  FETCH_GRAPH_CASES_FAILURE,
} from "./ActionTypes";
import { combineReducers } from "redux";

const initialState = {
  loading: false,
  error: "",
  data: {},
};
//All reducers
export const allDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CASES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_CASES_SUCCESS:
      return {
        loading: false,
        error: "",
        data: action.payload,
      };
    case FETCH_ALL_CASES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_CASES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRY_CASES_SUCCESS:
      return {
        loading: false,
        error: "",
        data: action.payload,
      };
    case FETCH_COUNTRY_CASES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const graphReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GRAPH_CASES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GRAPH_CASES_SUCCESS:
      return {
        loading: false,
        error: "",
        data: action.payload,
      };
    case FETCH_GRAPH_CASES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

///we combine all the reducers here
export default combineReducers({
  allDataReducer,
  countryReducer,
  graphReducer,
});
