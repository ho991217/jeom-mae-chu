import foods, { type Category, type Food, category } from './data/index';

function getRandomInteger(length: number) {
  return Math.floor(Math.random() * length);
}

function getRandomValue(array: Record<string, any> | any) {
  const length = array.length;
  return array[getRandomInteger(length)];
}

function getJeomshim(selectedCategory?: Category | Category[]): Food {
  let jeomshimCategory: Category = '한식';

  if (!selectedCategory) {
    jeomshimCategory = getRandomValue(category);
  } else if (Array.isArray(selectedCategory)) {
    const uniqueCategories = Array.from(new Set(selectedCategory));

    jeomshimCategory = getRandomValue(uniqueCategories);
  } else {
    jeomshimCategory = selectedCategory;
  }

  const jeomshimCategoryFoods = foods[jeomshimCategory];
  const jeomshim = getRandomValue(jeomshimCategoryFoods);

  return jeomshim;
}

export default getJeomshim;
export * from './data';
