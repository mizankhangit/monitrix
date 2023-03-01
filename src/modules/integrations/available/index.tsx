import { BsBellFill } from "react-icons/bs";
import IntegrationAvailableCard from "../@components/integrationAvailable_card";
import availableIntegrationCardData from "../../../_fakeData/availableIntegrationCardData copy.json";

export const IntegrationsAvailable = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <BsBellFill className="text-2xl" />
        <span className="text-2xl font-bold">
          Downtime happens. Get notified!
        </span>
      </div>
      <div className="mt-2">Available Integrations</div>

      <div className="grid grid-cols-3 gap-6 mt-7">
        {availableIntegrationCardData.map((item: any, i: any) => {
          return <IntegrationAvailableCard item={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default IntegrationsAvailable;
