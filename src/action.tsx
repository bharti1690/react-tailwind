import axios from "axios";
import USER from "./constants";
import * as data from './data.json';

export const requestUsers = (data:any) => async (dispatch:any) => {
  dispatch({
    type: USER.LOAD,
  });
  try {
    const json = await axios.get("./data.json");
   
    console.log(json);
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: json ? json.data :data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: [],
      isError: true,
    });
  }
};