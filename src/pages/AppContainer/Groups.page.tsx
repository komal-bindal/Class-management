import React from "react";
import { ImSpinner } from "react-icons/im";
import { useDispatch } from "react-redux";
import { groupFetchOneAction, groupQueryAction } from "../../actions/groups.actions";
import ListGroup from "../../components/ListGroup/ListGroup";

import {
  groupQueryLoadingSelector,
  groupQuerySelector,
  groupsRelatedToQuerySelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {
  query?: string;
  status?: "all-groups" | "suggestions" | "invitations";
}

const Groups: React.FC<Props> = ({ status }) => {
  const query = useAppSelector((state) => groupQuerySelector(state));

  const groups = useAppSelector((state) => groupsRelatedToQuerySelector(state));
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(groupQueryAction(event.target.value, true));
  };

  const loading = useAppSelector((state) => groupQueryLoadingSelector(state));

  let count = true;

  const baseLink = "/groups";

  return (
    <div className="p-10 flex flex-col items-center  w-full bg-gray-100 ">
      <div className="h-10 ">
        <input
          className="border-2 py-1 px-3 outline-none "
          onChange={handleChange}
          value={query}
          placeholder="type here"
        ></input>
      </div>
      <div className="  rounded-md max-w-3xl mx-auto my-6">
        {loading && (
          <div className="flex flex-col justify-center items-center">
            <ImSpinner className="animate-spin h-7 w-7"></ImSpinner>
            <h1 className="text-xl">Loading....</h1>
          </div>
        )}
        {groups.length > 0 &&
          groups.map((group: any) => (
            <ListGroup
            dispatchedAction = {groupFetchOneAction(group.id)}
              className={(count = !count) ? "bg-white" : "bg-gray-300"} //eslint-disable-line
              name={group.name}
              id={group.id}
              baseLink={baseLink}
              title={group.description}
              image={group.group_image_url}
            ></ListGroup>
          ))}
        {loading === false && groups.length === 0 && query !== "" && (
          <h1 className="text-2xl text-center">Oops!! No group found.</h1>
        )}
      </div>
    </div>
  );
};
Groups.defaultProps = { status: "all-groups" };

export default React.memo(Groups);
