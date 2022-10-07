import { API_URL } from "./config";

const getAllCategoris = async () => {
  const respons = await fetch(API_URL + "categories.php");
  return respons.json();
};

const getFilterCategore = async (catName) => {
  const respons = await fetch(API_URL + "filter.php?c=" + catName);
  return respons.json();
};

const getMealById = async (id) => {
  const respons = await fetch(API_URL + "lookup.php?i=" + id);
  return respons.json();
};

export { getAllCategoris, getFilterCategore, getMealById };
