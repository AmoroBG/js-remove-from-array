const removeFromArray = (array, ...args) => {
  let newArray = [];
  array.forEach((element) => {
    if (!args.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // should remove 3 and return [1,2,4]
