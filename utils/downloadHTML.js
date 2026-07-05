export const downloadHTML = (editor) => {
  if (!editor) return;

  const html = editor.getHTML();

  const blob = new Blob([html], {
    type: "text/html",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "document.html";
  link.click();

  URL.revokeObjectURL(url);
};