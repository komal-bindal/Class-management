import React, { useEffect } from "react";
import { groupActions } from "../../actions/groups.actions";
import { fetchGroups } from "../../api";
import ListGroup from "../../components/ListGroup/ListGroup";
import {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    groupActions.groupQueryAction(event.target.value);
  };

  useEffect(() => {
    fetchGroups({ status, query }).then((groups) => {
      groupActions.groupQueryCompletedAction(groups, query);
    });
  }, [query]); //eslint-disable-line
  let count = true;

  return (
    <div className="p-10 flex flex-col items-center justify-center w-full bg-gray-100 min-h-screen" >
      <div className="h-10 ">
        <input
          className="border-2 py-1 px-3 outline-none "
          onChange={handleChange}
          value={query}
          placeholder="type here"
        ></input>
      </div>
      <div className="  rounded-md max-w-3xl mx-auto my-6">
        {groups.map((group: any) => (
          <ListGroup
          className = {(count = !count)? "bg-white": "bg-gray-300"}
            name={group.name}
            id = {group.id}
            title={group.description}
            image={group.group_image_url}
          ></ListGroup>
        ))}
      </div>
    </div>
  );
};
Groups.defaultProps = { status: "all-groups" };

export default React.memo(Groups);
