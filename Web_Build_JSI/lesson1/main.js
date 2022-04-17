let arrObject = [
  {
    name: "Khoa",
    age: 10,
  },
  {
    name: "May",
    age: 10,
  },
  {
    name: "Gio",
    age: 10,
    name: "yasuo",
    age: 10,
  },
  {
    name: "Riven",
    age: 10,
  },
];
arrObject.map((item, index) => {
  console.log(`Item of array: ${item.name} with index: ${index}`);
});

arrObject.filter((item, index) => {
    return (item.age > 5) ? console.log(item.name, item.age) : ""
})
