import VisitorsChart from './VisitorsChart';
import InsightsPanel from './InsightsPanel';
import DemographicsMap from './Demographics/DemographicsMap';
import DemographicsMapMobile from './Demographics/DemographicsMapMobile'; 

const Overview = () => {
  return (
    <div className="bg-dark text-white px-2 py-4">
      <h1 className="text-3xl font-bold mb-6">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-span-8 bg-black border border-gray-900 rounded p-4">
          <VisitorsChart />
        </div>
        <div className="col-span-1 md:col-span-4 bg-black border border-gray-900 rounded p-4">
          <InsightsPanel />
        </div>
        <div className="col-span-1 md:col-span-12 bg-black border border-gray-900 rounded p-4 md:hidden">
          <DemographicsMapMobile />
        </div>
        <div className="hidden md:block md:col-span-12 bg-black border border-gray-900 rounded p-4">
          <DemographicsMap />
        </div>
      </div>
    </div>
  );
};

export default Overview;
