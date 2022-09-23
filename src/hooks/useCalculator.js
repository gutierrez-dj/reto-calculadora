import { useDispatch, useSelector } from "react-redux";
import {
  clean,
  deleteOne,
  calculate,
  concatenate,
} from "../redux/slice/CalculatorSlice";

const useCalculator = () => {
  const dispath = useDispatch();
  const val = useSelector((state) => state.calculator.val);

  const concatenar = (props) => {
    dispath(concatenate(props));
  };
  const concatenarDecimal = (props) => {
    console.log(props);
    if (val.indexOf(".") === -1) {
      console.log(props);
      dispath(concatenate(props));
    }
  };
  const calcular = () => {
    dispath(calculate());
  };
  const eliminar = () => {
    dispath(deleteOne(val));
  };
  const limpiarTodo = () => {
    dispath(clean());
  };
  return [val, concatenar,concatenarDecimal, calcular, eliminar, limpiarTodo];
};

export default useCalculator;
