let htmlButton = document.getElementById("html-button");
let pdfButton = document.getElementById("pdf-button");

htmlButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["js/getHtml.js", "js/downloadHtml.js"],
  });
});

pdfButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["js/html2pdf.bundle.min.js", "js/getHtml.js", "js/downloadPdf.js"],
  });
});
