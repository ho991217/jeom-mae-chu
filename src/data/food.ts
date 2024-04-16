import { 한식, Korean } from './korean';
import { 중식, Chinese } from './chinese';
import { 일식, Japanese } from './japanese';
import { 양식, Western } from './western';
import { 베트남, Vietnamese } from './vietnamese';
import { 디저트, Dessert } from './dessert';

export const food = {
  한식,
  중식,
  일식,
  양식,
  베트남,
  디저트,
};

export type Food = Korean | Chinese | Japanese | Western | Vietnamese | Dessert;
