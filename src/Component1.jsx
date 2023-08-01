import { useContext } from "react";
import { Texts } from "./Coba";
import Component2 from "./Component2";

export default function Component1() {
  const use = useContext(Texts);

  return (
    <>
      <Component2 />
    </>
  );
}
