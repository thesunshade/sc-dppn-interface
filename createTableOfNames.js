export default function createTableOfNames(dictionary) {
  let table = "";
  const regex = new RegExp("<dt>(<dfn.+?)</dt>", "g");
  const regexIds = new RegExp("<dt><dfn id='(.+?)'>.+?</dt>", "g");
  dictionary.forEach(item => {
    const found = [...item.text.matchAll(regex)];
    if (found.length > 1) {
      table += `<div class="multiple">`;
    } else {
      table += `<div class="single">`;
    }

    table += `<h1><a rel="noreferrer" target="_blank" href="https://suttacentral.net/define/${item.word}">${
      item.word
    }</a></h1>${item.text
      .replace(regexIds, "$&<span class='id'>$1</span>")
      .replace(/<dd>/g, "<details>")
      .replace(/<\/dd>/g, "</details>")}`;
    table += `</div>`;
  });

  return table;
}
// export default function createTableOfNames(dictionary) {
//   let table = "word\t \n";
//   const regex = new RegExp("<dt>(<dfn.+?)</dt>", "g");

//   dictionary.forEach(item => {
//     const found = [...item.text.matchAll(regex)];
//     if (found.length > 1) {
//       table += `${item.word}`;
//       found.forEach(person => {
//         table += `\t${person[1]}`;
//       });
//       table += "\n";
//     }
//   });
//   console.log(table);
// }
