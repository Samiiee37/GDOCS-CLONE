export const downloadText = (editor) => {
  if (!editor) return;

  const text = editor.getText();

  const blob = new Blob([text], {
    type: "text/plain",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "document.txt";
  link.click();

  URL.revokeObjectURL(url);
};