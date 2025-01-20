import { useReducer, useMemo } from "react";
import { createContext, useContext } from "react";
// import { config } from '../config/config';

const INIT_STATE: InitStateObject = {
  loading: false,

  loginStatus: false,
  userInfo: {
    name: "",
    email: "",
    avatar: "",
    language: "",
    balance: 0,
  }
}

// create context
const GlobalContext = createContext<any>({});
const reducer = (state: InitStateObject, { type, payload }: ReducerObject) => {
  // if (type === 'authToken') setStore(payload);
  return { ...state, [type]: payload };
}

// use contexts
function useGlobalContext() {
  return useContext(GlobalContext);
}

// // setAuthToken to localstorage Start
// const getStore = async (): Promise<string> => {
//   try {
//     const appKey = config.FRONTEND_URL + '-config';
//     const buf = window.localStorage.getItem(appKey + 'authToken');

//     if (typeof buf === 'string' && !!buf) {
//       return buf;
//     } else {
//       throw new Error("Type Error!");
//     }
//   } catch (err) {
//     return '';
//   }
// }

// const setStore = (authToken: string) => {
//   const appKey = config.FRONTEND_URL + '-config';
//   window.localStorage.setItem(appKey + 'authToken', authToken);
// }
// // setAuthToken to localstorage End

const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <GlobalContext.Provider
      value={useMemo(() => [
        state, { dispatch }
      ], [state])}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { useGlobalContext, Provider }; 