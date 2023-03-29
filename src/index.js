document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/**
 * const, let等の変数宣言
 */
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

// letは上書き可能
let val2 = "let変数";
console.log(val2);

val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";

const val3 = "const変数";
console.log(val3);

// constは上書き不可能
// val3 = "const変数を上書き";

// const変数は再宣言不可能
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "じゃけえ",
  age: 28,
};
val4.name = "jak";
val4.address = "Hiroshima";
console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
