import { createContext, useReducer } from "react";

export const AcademyContext = createContext({});

const initialState = {};

function reducer(state, action) {
  switch (action.type) {
    case "something":
      return { something: state.something + 1 };
  }
}

export const AcademyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AcademyContext.Provider value={{ state, dispatch }}>
      {children}
    </AcademyContext.Provider>
  );
};
