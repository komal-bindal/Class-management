import React from "react";
import { useParams } from "react-router-dom";
import { groupByIdSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}
const GroupDetails: React.FC<Props> = (props) => {
  const { id } = useParams<{ id: string }>();
  const groups = useAppSelector((state) => groupByIdSelector(state));
  const group = groups[Number(id)];

  return (
    <div
      className="w-full flex items-center justify-center bg-gray-100"
      style={{ height: "calc(100vh - 112px)" }}
    >
      <div className="flex min-w-min max-w-max p-4 flex-col  border border-gray-700 shadow-xl bg-white ">
        <div className="flex items-center mb-3">
          <img
            src={
              group.group_image_url === null ||
              group.group_image_url === undefined
                ? "https://www.pngitem.com/pimgs/m/537-5372558_flat-man-icon-png-transparent-png.png"
                : group.group_image_url
            }
            alt=""
            className="h-10 w-10 mr-5"
          />
          <h1 className="font-bold text-2xl">{group.name}</h1>
        </div>
        <div className="flex items-center">
          <h2 className="font-bold text-lg mr-3">Description:</h2>
          <h3 className="text-md font-semibold">{group.description}</h3>
        </div>
        <div className="flex items-center">
          <h2 className="font-bold text-lg mr-3">Creator:</h2>
          <h3 className="text-md font-semibold">
            {group.creator?.first_name + " " + group.creator?.last_name}
          </h3>
        </div>
        <div className="flex items-center">
          <h2 className="font-bold text-lg mr-3">Created at:</h2>
          <h3 className="text-md font-semibold">{group.created_at}</h3>
        </div>
      </div>
    </div>
  );
};

GroupDetails.defaultProps = {};
export default React.memo(GroupDetails);
