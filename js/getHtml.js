style = `
<style>
.option-content{display:flex;align-items: center;}
.connector{
  stroke: #979797;
  stroke-width: 2;
}
.question-container > svg{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.option-container {
  min-height: 38px;
  width: auto;
  max-width: 280px;
  padding: 2%;
  min-width: 160px;
  border: 1px solid #CCCCCC;
  border-radius: 3px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.option-incorrect {
  -webkit-print-color-adjust: exact;
  background-color: rgba(200, 33, 40, 0.12);
}
.option-correct {
  -webkit-print-color-adjust: exact;
  background-color: #DFEEDB;
}
.question {
  margin-bottom: 30px;
  break-inside: avoid;
}
.title {
  text-align: center;
}
hr {
  border-top: 1px solid #ccc;
}
</style>
`;

function getQuestions() {
  var qns = document.getElementsByClassName("question-view");
  var html = ``;
  for (let q of qns) {
    const clonedQ = q.cloneNode(true);
    for (let box of clonedQ.querySelectorAll("input")) {
      if ((box.type == "checkbox" || box.type == "radio") && box.checked) {
        box.setAttribute("checked", true);
      } else if (box.type == "text" || box.type === "number") {
        box.setAttribute("value", box.value);
      }
    }
    for (let box of clonedQ.querySelectorAll("textarea")) {
      box.innerHTML = box.value;
    }
    if (q.querySelectorAll(".matching-left").length > 0) {
      let container = clonedQ.querySelector(".question-container");
      container.style =
        "display:flex;justify-content: space-between;position:relative;";
    }
    html += `<div class="question">` + clonedQ.innerHTML + `</div>`;
  }
  return html;
}

function getTitle() {
  title =
    document
      .getElementsByClassName("header-name")[0]
      ?.getElementsByTagName("h1")[0] ??
    document
      .getElementsByClassName("closing-title")[0]
      ?.getElementsByTagName("strong")[0];

  return title ? `<h1 class="title">` + title.innerHTML + `</h1><hr>` : ``;
}

function getHtml() {
  return style + getTitle() + getQuestions();
}
