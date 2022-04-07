import { dppn } from "./DPPN.js";
import { mnTable } from "./mnTable.js";
import findInDppn from "./findInDppn.js";
import getDefinition from "./getDefinition.js";

const list: any = document.getElementById("list-area");

function listHeadWords() {
  let html: string = "<ul>";
  dppn.forEach(item => {
    html += `<li id="${item.word}">${item.word}</li>`;
  });
  list.innerHTML = html + "</ul>";
}

const definition: any = document.getElementById("definition");

function makeTable(table: any) {
  let html: string = "<table>";
  html += `<thead class="table-header"><tr><th>sutta</th><th>character</th><th>character_id</th><th>presence</th><th>role</th>`;
  // html+=`<th>type</th><th>aliases</th>`
  html += `</tr></thead>`;
  html += `<tbody>`;
  for (let i: number = 0; i < table.length; i++) {
    html += `<tr>`;

    html += `<td><a rel="noreferrer" target="_blank"href="http://suttacentral.net/${table[i][0]}/en/sujato">${table[i][0]}</a></td>`;
    html += `<td ${table[i][1] !== table[i][2] ? "class='different'" : ""}>${table[i][1]}</td>`;
    html += `<td ${findInDppn(table[i][2]) ? `class="class-id found"` : `class="class-id not-found"`}>${
      table[i][2]
    }</td>`;
    html += `<td>${table[i][3]}</td>`;
    html += `<td>${table[i][4]}</td>`;
    // html += `<td>${table[i][5]}</td>`;
    // html += `<td>${table[i][6]}</td>`;

    html += `</tr>`;
  }
  html += "</tbody></table>";
  list.innerHTML = html;

  const characterIdNode = document.querySelectorAll(".class-id");
  //   console.log(characterIdNode);
  characterIdNode.forEach(id => {
    id.addEventListener("click", e => {
      definition.innerHTML = getDefinition(e.currentTarget.textContent);
    });
  });
}

makeTable(mnTable);
