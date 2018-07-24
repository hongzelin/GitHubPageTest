import axios from 'axios';
import { INCREMENT, DECREMENT } from '../constants';
import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILURE } from '../constants';
import { LOAD_USER, ADD_REMINDER, DETELE_REMINDER, CLEAR_REMINDER } from '../constants';


export const addReminder = (text, dueDate) => {
  return {
    type: ADD_REMINDER,
    text,
    dueDate
  }
}

export const deleteReminder = (id) => {
  return {
    type: DETELE_REMINDER,
    id
  }
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDER
  }
}


export const increment = () => {
  // return dispatch => {  // dispatch这个是形参
  //   setTimeout(() => {
  //     dispatch({
  //       type: INCREMENT
  //     });
  //   }, 2000);
  // };
  return {
    type: INCREMENT,
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("rails365");
      });
    })
  }
};

export const decrement = () => {
  return {
    type: DECREMENT
  }
};

export const get_user = () => {
  // return dispatch => {
  //   dispatch(fetch_user_request())
  //   axios.get("https://randomuser.me/api/")
  //     .then(res => {
  //       dispatch(fetch_user(res.data.results[0]));
  //     })
  //     .catch(error => {
  //       dispatch(fetch_user_failure(error.response.data));
  //     })
  // };
  return {
    type: LOAD_USER,
    // payload: axios.get("https://randomuser.me/api/")
    payload: {
      promise: axios.get("https://randomuser.me/api/")
    }
  };
};

export const fetch_user_failure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    error
  };
};

export const fetch_user = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  }
};

export const fetch_user_request = () => {
  return {
    type: FETCH_USER_REQUEST
  }
};