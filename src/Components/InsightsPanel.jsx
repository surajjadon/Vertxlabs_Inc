import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

// Dropdown component
const Dropdown = ({ options, selected, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center px-3 py-1 bg-black border border-gray-900 rounded-full text-white font-medium text-sm"
      >
        {selected}
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-black border border-gray-900 rounded-xl shadow-lg z-10">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`block w-full px-4 py-2 text-left text-sm ${
                opt === selected
                  ? "bg-gray-900 text-white"
                  : "text-gray-400 hover:bg-gray-900 hover:text-white"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const metrics = [
  {
    label: "Founders",
    value: 7400,
    percent: 75.5,
    prev: 78.8,
  },
  {
    label: "Investors",
    value: 6090,
    percent: 0.979,
    prev: 56.5,
  },
];

const dropdownOptions = ["Visitors", "Connections", "Impressions"];

export default function InsightsPanel() {
  const [selected, setSelected] = useState(dropdownOptions[0]);
  const formatNumber = (n) =>
    n >= 1000 ? (n / 1000).toLocaleString(undefined, { maximumFractionDigits: 2 }) + "K" : n;

  return (
    <div className="max-w-xs w-full bg-black rounded-2xl p-5 shadow-lg ">
      <div className="flex items-center justify-between mb-6">
        <span className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Insights</span>
        <Dropdown options={dropdownOptions} selected={selected} onChange={setSelected} />
      </div>

      <div className="space-y-10">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="text-gray-200 font-medium text-base mb-1">{m.label}</div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-white">
                <CountUp end={m.value} duration={0.8} formattingFn={formatNumber} />
              </span>
              <span className="ml-2 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-green-400 font-semibold">+{m.percent.toString().padStart(3, "0")}%</span>
              <span className="ml-2 text-gray-400 text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px]">({m.prev.toString().padStart(3, "0")})</span>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-900 my-6 space-y-10" />
      
      <div className="flex justify-end">
  <button className="flex items-center text-white text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] font-medium hover:underline">
    View detailed insights
    <svg className="w-4 h-4 ml-1" fill="none" stroke="white" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
</div>

    </div>
    
  );
}
