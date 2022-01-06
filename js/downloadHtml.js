html = getHtml();

var datetime = new Date()
  .toLocaleString("en-GB")
  .replace(/[/:]/g, "-")
  .replace(", ", "_");
var filename = "quiz_" + datetime + ".html";

var element = document.createElement("a");
element.setAttribute(
  "href",
  "data:text/plain;charset=utf-8," + encodeURIComponent(html)
);
element.setAttribute("download", filename);
element.style.display = "none";

document.body.appendChild(element);
element.click();
document.body.removeChild(element);
