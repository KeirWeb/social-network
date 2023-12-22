import store from "./redux/redux-store";
import React, { ReactNode } from "react";

const StoreContext = React.createContext<typeof store>({} as typeof store);

export type ProviderType = {
  store: typeof store;
  children: ReactNode;
};
export const Provider = (props: ProviderType) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContext;
