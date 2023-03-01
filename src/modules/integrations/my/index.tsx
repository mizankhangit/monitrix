import { BsBellFill } from "react-icons/bs";
import IntegrationCard from "../@components/integrationMy_card";
import myIntegrationCardData from "../../../_fakeData/myIntegrationCardData.json";

export const IntegrationsMy = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <BsBellFill className="text-2xl" />
        <span className="text-2xl font-bold">
          Downtime happens. Get notified!
        </span>
      </div>
      <div className="mt-2">My Integrations</div>

      <div className="grid grid-cols-3 gap-6 mt-7">
        {myIntegrationCardData.map((item: any, i: any) => {
          return <IntegrationCard item={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default IntegrationsMy;
