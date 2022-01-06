html = getHtml();

var datetime = new Date()
  .toLocaleString("en-GB")
  .replace(/[/:]/g, "-")
  .replace(", ", "_");
var filename = "quiz_" + datetime + ".pdf";

var opt = {
  margin: 0.5,
  filename: filename,
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  pagebreak: { mode: ["avoid-all"] },
};

html2pdf().set(opt).from(html).save();
