function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  result.sort((arr1, arr2) => arr2.year - arr1.year);

  console.log(result);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
