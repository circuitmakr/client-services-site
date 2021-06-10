const initialState = {
  appointment: [],
  status: false
};

// action type
const SET_APPOINTMENT = "SET_APPOINTMENT";
const SET_STATUS = "SET_STATUS";
//action builder
export function setAppointment(appointment) {
  return {
    type: SET_APPOINTMENT,
    payload: appointment,
  };
}
export function setStatus(status) {
  return {
    type: SET_STATUS,
    payload: status,
  };
}
//reducer
export default function appointmentReducer(state = initialState, action) {
  switch (action.type) {
    case SET_APPOINTMENT:
      console.log(action.payload)
      return { ...state, appointment: [...state.appointment, action.payload] };
    case SET_STATUS:
      return { ...state, status: action.payload };
    default:
      return { ...state };
  }
}
