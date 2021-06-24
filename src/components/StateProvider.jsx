import { createContext, useReducer } from "react";

export const AppContext = createContext();

// reducer function
function reducer(state, action) {
  // create a copy of your state
  let stateCopy = { ...state };

  // set the name on our state copy to action
  stateCopy.action = action;

  if (action.type === "NEW_NOTE") {
    stateCopy.notes.unshift(action.payload);
  
  }

  // if action.type is ALERT_MESSAGE
  //set alert message object
  if (action.type === "ALERT_MESSAGE") {
    stateCopy.alertMessage = action.payload;
  }

  return stateCopy;
}

const initialState = {
  isLoggedIn: false,
  userData: null,
  alertMessage: {
    message: "",
    variant: "",
  },
  notes:[]
};

function StateProvider({ children }) {
  const [appstate, dispatch] = useReducer(reducer, initialState);

  const contextObject = {
    state: appstate,
    dispatch: dispatch,
  };

  return (
    <AppContext.Provider value={contextObject}>{children}</AppContext.Provider>
  );
}

export default StateProvider;
