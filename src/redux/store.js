import { configureStore } from '@reduxjs/toolkit'
import calculatorSlice  from './slice/CalculatorSlice'

export const store = configureStore({
  reducer: { 
    calculator:calculatorSlice
  },
})