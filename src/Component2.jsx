import { useContext } from "react";
import { Texts } from "./Coba";
import Component3 from "./Component3";

export default function Component2() {
  const use2 = useContext(Texts);
  return (
    <>
      {use2}
      <Component3 />
    </>
  );
}
