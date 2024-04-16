export const category = ['한식', '중식', '일식', '양식', '베트남', '디저트'] as const;

export type Category = (typeof category)[number];
