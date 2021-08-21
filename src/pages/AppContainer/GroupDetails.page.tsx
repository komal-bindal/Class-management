import React from "react";
import { useEffect } from "react";
import { ImSpinner } from "react-icons/im";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { groupFetchOneAction } from "../../actions/groups.actions";
import Button from "../../components/Button/Button";
import {
  groupSelectedIdErrorSelector,
  groupSelectedIdLoadingSelector,
  groupsRelatedToQuerySelector,
  selectedGroupSelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const GroupDetails: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = +useParams<{ id: string }>().id;

  const group = useAppSelector(selectedGroupSelector);
  const loading = useAppSelector(groupSelectedIdLoadingSelector);
  const error = useAppSelector(groupSelectedIdErrorSelector);
  const groups = useAppSelector(groupsRelatedToQuerySelector);

  let prevDisabled = groups.length > 0 ? false : true;
  let nextDisabled = groups.length > 0 ? false : true;
  let index: number;

  if (groups.length > 0) {
    for (let i = 0; i < groups.length; i++) {
      if (groups[i].id === id) {
        index = i;
        break;
      }
    }
    if (index! === 0) {
      prevDisabled = true;
    }
    if (index! === groups.length - 1) {
      nextDisabled = true;
    }
  }

  useEffect(() => {
    dispatch(groupFetchOneAction(id));
  }, [id]); //eslint-disable-line

  return (
    <div className="h-full w-full">
      {group && loading && <div className="mt-10"></div>}
      {!group && loading && <div className="mt-10"></div>}

      {loading && (
        <div className="flex flex-col justify-center items-center">
          <ImSpinner className="animate-spin h-7 w-7"></ImSpinner>
          <h1 className="text-lg">Loading Group....</h1>
        </div>
      )}
      {group && loading && <div className="mt-5"></div>}
      {group && !loading && <div className="mt-28"></div>}
      {error && (
        <div className="flex flex-col mt-20 justify-center items-center">
          <h1 className="text-2xl">{error}</h1>
        </div>
      )}
      {group && (
        <div className="w-full   flex flex-col justify-center items-center bg-gray-100">
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
          <div className="mt-5 flex items-center justify-around w-full">
            <Button
              type="button"
              theme="primary"
              outline={false}
              disabled={prevDisabled}
              onClick={() => {
                if (!prevDisabled) {
                  index = index - 1;
                  history.push(`/groups/id/${groups[index].id}`);
                }
              }}
            >
              Previous
            </Button>
            <Button
              type="button"
              theme="primary"
              outline={false}
              disabled={nextDisabled}
              onClick={() => {
                if (!nextDisabled) {
                  index = index + 1;
                  history.push(`/groups/id/${groups[index].id}`);
                }
              }}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

GroupDetails.defaultProps = {};
export default React.memo(GroupDetails);
