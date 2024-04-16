import { type Category, type Food, category, food } from './data/index';
import { getRandomValue } from './utils/index';

type GetJeomshimOptions = {
  include?: Category | Category[];
  exclude?: Category | Category[];
};

function getJeomshim({ include, exclude }: GetJeomshimOptions): Food | null {
  if (include !== undefined && exclude !== undefined) {
    throw new Error('You cannot specify both include and exclude options');
  }

  let jeomshimCategory: Category = '한식';

  if (include !== undefined) {
    if (Array.isArray(include)) {
      const uniqueCategories = Array.from(new Set(include));

      jeomshimCategory = getRandomValue(uniqueCategories);
    } else {
      jeomshimCategory = include;
    }
  } else if (exclude !== undefined) {
    if (Array.isArray(exclude)) {
      const uniqueCategories = new Set(exclude);
      const availableCategories =
        category.filter((c) => !uniqueCategories.has(c)) ?? [];

      if (availableCategories.length === 0) {
        return null;
      }

      jeomshimCategory = getRandomValue(availableCategories);
    } else {
      const availableCategories = category.filter((c) => c !== exclude);

      jeomshimCategory = getRandomValue(availableCategories);
    }
  } else {
    jeomshimCategory = getRandomValue(category);
  }
  const jeomshimCategoryFoods = food[jeomshimCategory];
  const jeomshim = getRandomValue(jeomshimCategoryFoods);

  return jeomshim;
}

export default getJeomshim;
