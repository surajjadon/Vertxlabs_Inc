import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import countries from "../Data/countries";
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";
export default function DemographicsMapMobile() {
  return (
    <div className="flex flex-col gap-4 w-full min-h-[350px]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-semibold text-base">Demographics</span>
        <select className="bg-black border border-gray-900 rounded-full px-2 py-1 text-white text-xs">
          <option>Visitors</option>
          <option>Connections</option>
          <option>Impressions</option>
        </select>
      </div>
      <div className="w-full h-[220px] bg-black rounded-2xl overflow-hidden">

        <ComposableMap
          projectionConfig={{ scale: 90, center: [20, 20] }}
          width={350}
          height={220}
        
        > 
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1D1D1D"
                  stroke="#1D1D1D"
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          {countries.map((c) => (
            <Marker key={c.code} coordinates={c.coords}>
              <circle r={4} fill="transparent" stroke={c.color} strokeWidth={1.5} />
              <circle r={2} fill={c.color} />
            </Marker>
          ))}
        </ComposableMap>
      </div>
      <div className="flex gap-3 flex-wrap">
        {countries.map((c) => (
          <span
            key={c.code}
            className="flex items-center px-2 py-1 rounded-full text-xs font-semibold"
            style={{ background: "#181818", color: c.color }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full mr-1"
              style={{ background: c.color }}
            />
            {c.name}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-4 py-4">
        {countries.map((c) => (
          <div key={c.code} className="flex items-center gap-2">
            <img src={c.flag} alt={c.name} className="w-6 h-4 rounded object-cover" />
            <div className="flex-1">
              <div className="flex justify-between text-xs text-white mb-0.5">
                <span>{c.name}</span>
                <span>{c.percent}%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
                <div
                  className="h-1.5 rounded-full"
                  style={{ width: `${c.percent}%`, background: c.color }}
                />
              </div>
            </div>
          </div>
        ))}
        <button className="flex items-center mt-1 text-gray-300 hover:text-white text-xs font-medium">
          View all countries
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
