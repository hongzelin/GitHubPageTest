import { ADD_REMINDER, DETELE_REMINDER, CLEAR_REMINDER } from '../constants';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const actionResult = (action) => {
  const {text, dueDate} = action;
  return {
    id: Math.random(),
    text,
    dueDate
  }
} 

const reminder = (state = read_cookie("reminders") || [], action = {}) => {
  let data = null;
  switch (action.type) {
    case ADD_REMINDER:
      data = [
        ...state,
        actionResult(action)
      ];
      bake_cookie("reminders", data);
      return data;
    case DETELE_REMINDER:
      data = state.filter(item => item.id !== action.id);
      bake_cookie("reminders", data);
      return data;
    case CLEAR_REMINDER:
      delete_cookie("reminders");
      return [];
    default: return state;
  }
}

export default reminder;