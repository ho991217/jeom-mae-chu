export * from './category';
export * from './korean';
export * from './japanese';
export * from './chinese';
export * from './western';
export * from './vietnamese';

import { 한식, Korean } from './korean';
import { 중식, Chinese } from './chinese';
import { 일식, Japanese } from './japanese';
import { 양식, Western } from './western';
import { 베트남, Vietnamese } from './vietnamese';

const foods = {
  한식,
  중식,
  일식,
  양식,
  베트남,
};

export type Food = Korean | Chinese | Japanese | Western | Vietnamese;

export default foods;
