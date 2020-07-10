import { handleActions } from 'redux-actions';
import * as actionTypes from 'src/redux/actionTypes';

const initialState = {
  enable: false,
};

export default handleActions(
  {
    [actionTypes.GET_BOOKS]: (state) => ({
      ...state,
      enable: true,
    }),
  },
  initialState,
);
