import { useContext } from "react";
import { Texts } from "./Coba";

export default function Component3() {
  const use3 = useContext(Texts);
  return <>{use3}</>;
}
