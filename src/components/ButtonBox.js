import { Button } from "./Button";
import {
  cnst_limpiar_todo,
  cnst_operadores,
  cnst_button,
  cnst_operacion,
} from "../constant/utility";

const ButtonBox = () => {
  return (
    <>
      <div className=" d-flex flex-row m-2">
        <div className="">
          {cnst_button.map((valor, index) => {
            return (
              <Button
                props={{ value: valor.num, typeButton: valor.typeButton }}
                key={index}
              />
            );
          })}
        </div>
        <div>
          {cnst_operadores.map((valor, index) => {
            return (
              <Button
                props={{ value: valor, typeButton: cnst_operacion }}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="row m-2 ">
        <Button props={{ value: "AC", typeButton: cnst_limpiar_todo }} />
      </div>
    </>
  );
};

export default ButtonBox;
