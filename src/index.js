document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/**
 * テンプレート文字列
 */
const name = "Kauzki";
const age = 28;

// old
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// new
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
