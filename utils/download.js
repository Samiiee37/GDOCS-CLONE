const downloadFile = (content, type, filename) => {
  const blob = new Blob([content], { type });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(url);
};

const downloadJSON = (editor) => {
  if (!editor) return;

  downloadFile(
    JSON.stringify(editor.getJSON(), null, 2),
    "application/json",
    "document.json"
  );
};

const downloadHTML = (editor) => {
  if (!editor) return;

  downloadFile(
    editor.getHTML(),
    "text/html",
    "document.html"
  );
};

const downloadText = (editor) => {
  if (!editor) return;

  downloadFile(
    editor.getText(),
    "text/plain",
    "document.txt"
  );
};

const downloadPDF = () => {
  window.print();
};

export default {
  downloadJSON,
  downloadHTML,
  downloadText,
  downloadPDF,
};

