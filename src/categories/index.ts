import { ListGuesser } from "react-admin";
import type { Category } from "data-generator-retail";
export default {
  list: ListGuesser,
  recordRepresentation: (record: Category) => ucFirst(record.name),
};

const ucFirst = (v: string) => v.charAt(0).toUpperCase() + v.slice(1);