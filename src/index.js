document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/**
 * map, filter, reduce
 */

const nameArr = ["田中", "山田", "佐藤"];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}`);
// }

/**
 * map
 */
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

/**
 * filter
 */
// const numArr = [1, 2, 3, 4, 5];
// const oddArr = numArr.filter((num) => num % 2 === 1);
// console.log(oddArr);

/**
 * index
 */
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

const newNameArr = nameArr.map((name) =>
  name === "佐藤" ? name : `${name}さん`
);
