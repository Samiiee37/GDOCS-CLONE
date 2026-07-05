"use client";

import { useState } from "react";

const MAX_ROWS = 10;
const MAX_COLS = 8;

const TablePicker = ({ editor }) => {
  const [selection, setSelection] = useState({
    rows: 0,
    cols: 0,
  });

  const insertTable = (rows, cols) => {
    editor
      ?.chain()
      .focus()
      .insertTable({
        rows,
        cols,
        withHeaderRow: false,
      })
      .run();
  };

  return (
    <div className="p-2 w-fit">
      <div className="flex flex-col gap-[2px]">
        {Array.from({ length: MAX_ROWS }).map((_, row) => (
          <div key={row} className="flex gap-[2px]">
            {Array.from({ length: MAX_COLS }).map((_, col) => {
              const active =
                row < selection.rows &&
                col < selection.cols;

              return (
                <button
                  key={`${row}-${col}`}
                  className={`h-5 w-5 border transition-colors ${
                    active
                      ? "bg-blue-500 border-blue-500"
                      : "bg-white border-gray-300 hover:bg-gray-100"
                  }`}
                  onMouseEnter={() =>
                    setSelection({
                      rows: row + 1,
                      cols: col + 1,
                    })
                  }
                  onClick={() =>
                    insertTable(row + 1, col + 1)
                  }
                />
              );
            })}
          </div>
        ))}
      </div>

      <p className="mt-3 text-center text-sm">
        {selection.rows > 0
          ? `${selection.rows} × ${selection.cols} Table`
          : "Insert Table"}
      </p>
    </div>
  );
};

export default TablePicker;