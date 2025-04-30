import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import countries from "../Data/countries";
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";
export default function DemographicsMap() {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full min-h-[400px]">
      <div className="flex-1 flex flex-col min-h-0">
        
        <div className="flex flex-col justify-between mb-4 gap-4">
          <span className="text-white font-semibold text-xl">Demographics</span>
          <div>

          <select
  className="bg-black border border-gray-900 rounded-full px-3 py-1 text-white text-sm focus:outline-none hover:bg-gray-900 transition duration-300"
  onChange={(e) => console.log(e.target.value)} 
>
  <option className="bg-gray-900 hover:bg-gray-900">Visitors</option>
  <option className="bg-gray-900 hover:bg-gray-900">Connections</option>
  <option className="bg-gray-900 hover:bg-gray-900">Impressions</option>
</select>

<div></div>
</div>

        </div>
        <div className="w-full flex-1 min-h-[100px] rounded-r-3xl overflow-hidden mb-4 bg-black">
          <ComposableMap
            projectionConfig={{ scale: 200,
              center: [10, 10]
            }}
            width={800}
            height={100}
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <pattern id="dotPattern" patternUnits="userSpaceOnUse" width="6" height="6">
                <circle cx="3" cy="3" r="1.5" fill="#1D1D1D" />
              </pattern>
            </defs>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="url(#dotPattern)"
                    stroke="none"
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
                <circle r={6} fill="transparent" stroke={c.color} strokeWidth={2} />
                <circle r={3} fill={c.color} />
              </Marker>
            ))}
          </ComposableMap>
        </div>

        <div className="flex gap-3 flex-wrap">
          {countries.map((c) => (
            <span
              key={c.code}
              className="flex items-center px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: "#181818", color: c.color }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full mr-2"
                style={{ background: c.color }}
              />
              {c.name}
            </span>
          ))}
        </div>
      </div>


      <div className="w-full md:w-52 flex-shrink-0 flex flex-col gap-8 py-10">
  {countries.map((c) => (
    <div key={c.code} className="flex items-center gap-3">
      <img src={c.flag} alt={c.name} className="w-7 h-5 rounded object-cover" />
      <div className="flex-1">
        <div className="flex justify-between text-sm text-white mb-1">
          <span>{c.name}</span>
          <span>{c.percent}%</span>
        </div>
        <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
          <div
            className="h-2 rounded-full"
            style={{ width: `${c.percent}%`, background: c.color }}
          />
        </div>
      </div>
    </div>
  ))}
  <button className="flex items-center mt-2 text-gray-300 hover:text-white text-sm font-medium">
    View all countries
    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>


    </div>
  );
}
