import { Check, Palette } from "lucide-react";
import React, { useState } from "react";

const ColorPicker = ({ selectedColor, onChange }) => {
  const colors = [
    { name: "Navy Blue", value: "#1E3A8A" },
    { name: "Sky Blue", value: "#0EA5E9" },

    { name: "Black", value: "#111827" },
    { name: "Light Gray", value: "#9CA3AF" },

    { name: "Emerald", value: "#059669" },
    { name: "Mint", value: "#34D399" },

    { name: "Burgundy", value: "#7F1D1D" },
    { name: "Rose", value: "#BE123C" },

    { name: "Purple", value: "#6D28D9" },
    { name: "Lavender", value: "#A78BFA" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-[#2d4a8a] bg-gradient-to-br from-[#eef2ff] to-[#dce6f9] ring-[#4a6aaa] hover:ring transition-all px-3 py-2 rounded-lg"
      >
        <Palette size={16} />
        <span className="max-sm:hidden">Accent</span>
      </button>

      {isOpen && (
        <div className="grid grid-cols-4 w-60 gap-2 absolute top-full left-0 right-0 p-3 mt-2 z-10 bg-white rounded-md border border-gray-200 shadow-sm">
          {colors.map((color) => (
            <div
              key={color.value}
              className="relative cursor-pointer group flex flex-col items-center"
              onClick={() => {
                onChange(color.value);
                setIsOpen(false);
              }}
            >
              <div
                className="w-12 h-12 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition-all duration-200"
                style={{ backgroundColor: color.value }}
              ></div>
              {selectedColor === color.value && (
                <div className="absolute top-0 left-0 right-0 inset-0 w-12 h-12 flex items-center justify-center">
                  <Check className="size-5 text-white" />
                </div>
              )}
              <p className="">{color.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
