import useCalculator from "../hooks/useCalculator";
import "../css/button.css";
import {
  cnst_concatenar,
  cnst_calcular,
  cnst_limpiar_todo,
  cnst_borrar,
  cnst_operacion,
  cnst_agregar_decimal,
} from "../constant/utility";

export const Button = ({ props }) => {
  const { value, typeButton } = props;
  let classButton = " button button-default-styles";
  let handleFunction;
  const [, concatenar, concatenarDecimal, calcular, eliminar, limpiarTodo] =
    useCalculator();
  switch (typeButton) {
    case cnst_calcular:
      classButton = "button button-equal-styles";
      handleFunction = calcular;
      break;
    case cnst_limpiar_todo:
      classButton = " button button-ac-styles";
      handleFunction = limpiarTodo;
      break;
    case cnst_borrar:
      classButton = "btn btn-outline-secondary ps-3";
      handleFunction = eliminar;
      break;
    case cnst_concatenar:
      handleFunction = concatenar;
      break;
    case cnst_operacion:
      classButton = "button button-operation-styles";
      handleFunction = concatenar;
      break;
    case cnst_agregar_decimal:
      handleFunction = concatenarDecimal;
      break;
    default:
      break;
  }

  return (
    <button className={classButton} onClick={() => handleFunction(value)}>
      {value}
    </button>
  );
};

export default Button;
