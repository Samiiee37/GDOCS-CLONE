"use client";

import { useRef, useState } from "react";
import { TriangleIcon } from "lucide-react";
const LEFT_MARGIN_DEFAULT = 56;
const RIGHT_MARGIN_DEFAULT = 56;

const PAGE_WIDTH = 816;
const MINIMUM_SPACE = 100;

const markers = Array.from({ length: 83 }, (_, i) => i);

export const Ruler = () => {
  const [leftMargin, setLeftMargin] = useState(LEFT_MARGIN_DEFAULT);
  const [rightMargin, setRightMargin] = useState(RIGHT_MARGIN_DEFAULT);

  const [isDraggingLeft, setIsDraggingLeft] = useState(false);
  const [isDraggingRight, setIsDraggingRight] = useState(false);

  const rulerRef = useRef(null);

  const handleLeftMouseDown = () => {
    setIsDraggingLeft(true);
  };

  const handleRightMouseDown = () => {
    setIsDraggingRight(true);
  };

  const handleMouseMove = (e) => {
    if (!(isDraggingLeft || isDraggingRight) || !rulerRef.current) return;

    const container = rulerRef.current.querySelector("#ruler-container");
    if (!container) return;

    const containerRect = container.getBoundingClientRect();

    const relativeX = e.clientX - containerRect.left;

    const rawPosition = Math.max(
      0,
      Math.min(PAGE_WIDTH, relativeX)
    );

    if (isDraggingLeft) {
      const maxLeftPosition =
        PAGE_WIDTH - rightMargin - MINIMUM_SPACE;

      setLeftMargin(Math.min(rawPosition, maxLeftPosition));
    }

    if (isDraggingRight) {
      const maxRightPosition =
        PAGE_WIDTH - (leftMargin + MINIMUM_SPACE);

      const newRightPosition = Math.max(
        PAGE_WIDTH - rawPosition,
        0
      );

      setRightMargin(
        Math.min(newRightPosition, maxRightPosition)
      );
    }
  };

  const handleMouseUp = () => {
    setIsDraggingLeft(false);
    setIsDraggingRight(false);
  };

  return (
    <div
      ref={rulerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="relative mx-auto flex h-6 w-[816px] select-none items-end border-b border-gray-300 print:hidden"
    >
      <div
        id="ruler-container"
        className="relative h-full w-full"
      >
        <Marker
          position={leftMargin}
          isLeft
          isDragging={isDraggingLeft}
          onMouseDown={handleLeftMouseDown}
          onDoubleClick={() =>
            setLeftMargin(LEFT_MARGIN_DEFAULT)
          }
        />

        <Marker
          position={rightMargin}
          isLeft={false}
          isDragging={isDraggingRight}
          onMouseDown={handleRightMouseDown}
          onDoubleClick={() =>
            setRightMargin(RIGHT_MARGIN_DEFAULT)
          }
        />

        <div className="absolute inset-x-0 bottom-0 h-full">
          <div className="relative h-full w-[816px]">
            {markers.map((marker) => {
              const position = (marker * PAGE_WIDTH) / 82;

              return (
                <div
                  key={marker}
                  className="absolute bottom-0"
                  style={{ left: `${position}px` }}
                >
                  {marker % 10 === 0 ? (
                    <>
                      <div className="absolute bottom-0 h-2 w-px bg-neutral-500" />
                      <span className="absolute bottom-2 -translate-x-1/2 text-[10px] text-neutral-500">
                        {marker / 10 + 1}
                      </span>
                    </>
                  ) : marker % 5 === 0 ? (
                    <div className="absolute bottom-0 h-1.5 w-px bg-neutral-500" />
                  ) : (
                    <div className="absolute bottom-0 h-1 w-px bg-neutral-500" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Marker = ({
  position,
  isLeft,
  isDragging,
  onMouseDown,
  onDoubleClick,
}) => {
  return (
    <div
      className="group absolute top-0 z-[5] -ml-2 h-full w-4 cursor-ew-resize"
      style={{
        [isLeft ? "left" : "right"]: `${position}px`,
      }}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
    >
     <TriangleIcon
  className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 fill-blue-500 text-blue-500 rotate-180"
/>

      {isDragging && (
        <div
          className="absolute left-1/2 top-4 -translate-x-1/2 bg-blue-500"
          style={{
            width: "1px",
            height: "100vh",
            transform: "scaleX(0.5)",
          }}
        />
      )}
    </div>
  );
};