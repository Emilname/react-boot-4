import { createContext, useContext } from "react";
import api from "./api.js";

export const ApiContext = createContext(api);

export function ApiProvier({ value = api, children, ...props }) {
  return (
    <ApiContext.Provider value={value} {...props}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
