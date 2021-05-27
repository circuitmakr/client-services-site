const initialState = {
  appointment: [],
};

// action type
const SET_APPOINTMENT = "SET_APPOINTMENT";
//action builder
export function setAppointment(appointment) {
  return {
    type: SET_APPOINTMENT,
    payload: appointment,
  };
}
//reducer
export default function appointmentReducer(state = initialState, action) {
  switch (action.type) {
    case SET_APPOINTMENT:
      return { ...state, appointment: action.payload };
    default:
      return { ...state };
  }
}
