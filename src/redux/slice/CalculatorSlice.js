import { createSlice } from "@reduxjs/toolkit";
import _default from "react-redux/es/components/connect";

const initialState = {
  val: "0",
};

const validar = (vali) => {
  if (vali === "Error de sintaxis") {
    return false;
  }
  if (vali === "Inconsistencia") {
    return false;
  }
  return true;
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    clean: (state) => {
      state.val = "0";
    },
    deleteOne: (state, action) => {
      if (!validar(state.val)) {
        state.val = "0";
      }

      state.val.length === 1
        ? (state.val = "0")
        : (state.val = action.payload.slice(0, -1));
    },
    calculate: (state) => {
      try {
        const result = eval(state.val).toString();
        result === "Infinity"
          ? (state.val = "Inconsistencia")
          : (state.val = result);
      } catch (error) {
        state.val = "Error de sintaxis";
      }
    },
    concatenate: (state, action) => {
      if (!validar(state.val)) {
        state.val = "0";
      } 
      state.val === "0"
        ? (state.val = action.payload)
        : (state.val += action.payload);
    },
  },
});

export const { clean, deleteOne, calculate, concatenate } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
