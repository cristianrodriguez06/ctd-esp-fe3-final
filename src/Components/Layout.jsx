import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

export const Layout = ({ children }) => {
  const { providerValues } = useContext(ContextGlobal);
  const { theme } = providerValues.state;
  return <div className={theme}>{children}</div>;
};
