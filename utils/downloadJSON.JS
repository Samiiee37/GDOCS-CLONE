export const downloadJSON = (editor) => {
  if (!editor) return;

  const json = editor.getJSON();

  const blob = new Blob(
    [JSON.stringify(json, null, 2)],
    {
      type: "application/json",
    }
  );

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "document.json";
  link.click();

  URL.revokeObjectURL(url);
};