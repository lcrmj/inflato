import { combineReducers } from 'redux';
import indices from './indices';
import indiceFilter from './filter';
import cestaBasica from './cestaBasica';
import cestaBasicaFilter from "./cestaBasicaFilter";

export default combineReducers({indices, indiceFilter, cestaBasica, cestaBasicaFilter});
