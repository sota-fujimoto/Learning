let arrayOfIds = [1, 1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 8, 9];
arrayOfIds = [...new Set(arrayOfIds)];

console.log(arrayOfIds);
