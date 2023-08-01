import { createContext, useState } from "react";
import Component1 from "./Component1";
import Uye from "./Uye";

export const Texts = createContext("");

export function Coba() {
  const [nama, setNama] = useState("");
  return (
    <>
      <Texts.Provider value={nama}>
        <input type="text" onChange={(e) => setNama(e.target.value)} />
        haha
        <Component1 />
      </Texts.Provider>
      <Uye />
    </>
  );
}
