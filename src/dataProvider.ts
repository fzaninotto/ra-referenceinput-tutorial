import fakeRestProvider from "ra-data-fakerest";
import generateData from "data-generator-retail";

const data = generateData();

const categories = data.categories.map((category, index) => ({
  ...category,
  disabled: index % 3 === 0,
}))

export const dataProvider = fakeRestProvider({ ...data, categories }, true, 500);