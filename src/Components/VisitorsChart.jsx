import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import DataStore from "./Data/DataStore";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Dropdown = ({ options, selected, onChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full px-4 py-2 bg-black border rounded-full shadow-md text-white text-sm font-semibold flex justify-between items-center ${
          label === "+Add"
            ? "border-dashed border-gray-900 border"
            : "border-gray-900"
        }`}
      >
        {selected}
        <svg
          className={`w-4 h-4 ml-2 transition-transform font-bold ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 z-20 w-full bg-black border border-gray-900 rounded-xl shadow-md">
          {options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-[10px] sm:text-xs md:text-sm ${
                option === selected
                  ? "bg-gray-900 text-white"
                  : "text-gray-400 hover:bg-gray-900 hover:text-white"
              }`}
              
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
const selectOptions = [
  {
    label: "Visitors",
    options: ["Visitors", "Connections", "Interactions", "Impressions"],
  },
  {
    label: "Last 30 days",
    options: [
      "Today",
      "Yesterday",
      "This week",
      "Last week",
      "Last 7 days",
      "Last 30 days",
    ],
  },
  {
    label: "+Add",
    options: ["Connections", "Impressions", "Interactions"],
  },
];

function mergeLineData(mainArr, addArr, mainKey, addKey) {
  const allDates = Array.from(
    new Set([...mainArr.map((d) => d.date), ...addArr.map((d) => d.date)])
  );
  return allDates.map((date) => ({
    date,
    [mainKey]: mainArr.find((d) => d.date === date)?.value ?? null,
    [addKey]: addArr.find((d) => d.date === date)?.value ?? null,
  }));
}

const VisitorsPage = () => {
  const [selectedValues, setSelectedValues] = useState(
    selectOptions.map((select) => select.label)
  );
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [mainStats, setMainStats] = useState({ total: 0, percentChange: 0, previous: 0 });
  const [addStats, setAddStats] = useState({ total: 0, percentChange: 0, previous: 0 });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const checkScreenWidth = () => setIsWideScreen(window.innerWidth >= 868);
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  useEffect(() => {
    const main = selectedValues[0];
    const time = selectedValues[1];
    const add = selectedValues[2];

    const mainObj = DataStore[main]?.[time];
    const mainArr = mainObj?.data || [];
    setMainStats({
      total: mainObj?.total ?? 0,
      percentChange: mainObj?.percentChange ?? 0,
      previous: mainObj?.previous ?? 0,
    });

    let addArr = [];
    if (add !== "+Add" && DataStore[add]?.[time]) {
      const addObj = DataStore[add][time];
      addArr = addObj.data;
      setAddStats({
        total: addObj.total,
        percentChange: addObj.percentChange,
        previous: addObj.previous,
      });
    } else {
      setAddStats({ total: 0, percentChange: 0, previous: 0 });
    }

    if (addArr.length) {
      setChartData(mergeLineData(mainArr, addArr, main, add));
    } else {
      setChartData(mainArr.map((d) => ({ date: d.date, [main]: d.value })));
    }
  }, [selectedValues]);

  const handleSelectChange = (index, value) => {
    if (selectedValues[index] === value) return;
    const updated = [...selectedValues];
    updated[index] = value;
    setSelectedValues(updated);
  };

  const formatNumber = (n) =>
    n >= 1000
      ? (n / 1000).toLocaleString(undefined, { maximumFractionDigits: 2 }) + "K"
      : n;

  return (
    <div className="bg-black border-gray-900 px-2 py-2">

      
<div className="flex flex-wrap gap-2 md:flex-nowrap mb-4 sm:gap-4 md:gap-4 lg:gap-x-4">
        {selectOptions.map((select, idx) => (
          <div key={idx} className="w-1/4 md:w-1/4 sm:w-1/4 lg:w-1/4">
            <Dropdown
              label={select.label}
              options={select.options}
              selected={selectedValues[idx]}
              onChange={(val) => handleSelectChange(idx, val)}
            />
          </div>
        ))}
        {isWideScreen && <div className="w-1/4 md:w-0 sm:w-0 lg:w-1/4" />}
      </div>


      <div className="bg-black rounded p-2 md:p-4 text-white">
       
      <div className="flex flex-col md:flex-row md:items-end mb-4 md:mb-6 gap-y-2 gap-x-2 sm:gap-x-1 md:gap-x-2 lg:gap-x-4">

         {/*text-visitor*/}
          <div className="flex items-end gap-4">
            <div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">

                <CountUp end={mainStats.total} duration={1} separator="," formattingFn={formatNumber} />
              </h2>
            </div>
            <div className="flex flex-col">
              
              <span className={`text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] ${mainStats.percentChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                {mainStats.percentChange >= 0 ? "+" : ""}
                {mainStats.percentChange}%
              </span>

              <span className="text-gray-400 text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px]">({mainStats.previous})</span>
            </div>
          </div>
{/*addontext*/}
          {selectedValues[2] !== "+Add" && addStats.total > 0 && (
            <div className="flex items-center space-x-4">
              <span className="inline-block w-3 h-3 rounded-full" style={{ background: "#9c27b0" }} />
              <h2 className="text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-4xl font-bold text-white">
                <CountUp end={addStats.total} duration={1} separator="," formattingFn={formatNumber} />
              </h2>
              <div className="flex flex-col">
                <span className={`text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] ${addStats.percentChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {addStats.percentChange >= 0 ? "+" : ""}
                  {addStats.percentChange}%
                </span>
                <span className="text-gray-400 text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px]">({addStats.previous})</span>
              </div>
            </div>
          )}
        </div>

        <div className="w-full h-24 sm:h-32 md:h-40">
          {chartData.length === 0 ? (
            <p className="text-gray-500 text-center">No data available for selection</p>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis
                  dataKey="date"
                  tick={{ fill: "#999" }}
                  tickLine={{ stroke: "#333" }}
                  axisLine={{ stroke: "#333" }}
                  minTickGap={16}
                />
                <YAxis
                  tick={{ fill: "#999" }}
                  tickLine={{ stroke: "#333" }}
                  axisLine={{ stroke: "#333" }}
                  domain={["auto", "auto"]}
                  allowDecimals={false}
                  tickFormatter={formatNumber}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: "#222", borderColor: "#444" }}
                  labelStyle={{ color: "#fff" }}
                  formatter={(value, name) => [value, name]}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey={selectedValues[0]}
                  stroke="#fff"
                  dot={false}
                  strokeWidth={2}
                  name={selectedValues[0]}
                  isAnimationActive={true}
                />
                {selectedValues[2] !== "+Add" && addStats.total > 0 && (
                  <Line
                    type="monotone"
                    dataKey={selectedValues[2]}
                    stroke="#9c27b0"
                    dot={false}
                    strokeWidth={2}
                    name={selectedValues[2]}
                    isAnimationActive={true}
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisitorsPage;
