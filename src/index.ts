import foods, { type Category, type Food, category } from './data/index';

function getRandomInteger(length: number) {
  return Math.floor(Math.random() * length);
}

function getJeomshim(...selectedCategory: Category[]): Food {
  const jeomshimCategory = selectedCategory.length
    ? selectedCategory[getRandomInteger(selectedCategory.length)]
    : category[getRandomInteger(category.length)];

  const jeomshim =
    foods['한식'][getRandomInteger(foods[jeomshimCategory].length)];

  return jeomshim;
}

export default getJeomshim;
export * from './data';
