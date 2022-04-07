import { dppn } from "./DPPN.js";
import createTableOfNames from "./createTableOfNames.js";

// makeTable(mnTable);
const testArea = document.querySelector("#test-area");
testArea.innerHTML = createTableOfNames(dppn);

const singletons = document.querySelectorAll(".single");
const hideButton = document.querySelector("#hide");
hideButton.addEventListener("click", () => {
  if (hideButton.textContent === "Hide Singletons") {
    hideButton.textContent = "Show Singletons";
  } else {
    hideButton.textContent = "Hide Singletons";
  }
  singletons.forEach(single => {
    single.classList.toggle("hidden");
  });
  console.log("click");
});
