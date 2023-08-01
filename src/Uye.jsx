import { useContext } from "react";
import { Texts } from "./Coba";

export default function Uye() {
  const uye = useContext(Texts);
  return (
    <>
      BOOOOMMMMM
      {uye}
    </>
  );
}
