import React, { useEffect } from "react";
import { groupActions } from "../../actions/groups.actions";
import { fetchGroups } from "../../api";
import ListGroup from "../../components/ListGroup/ListGroup";
import {
  groupQuerySelector,
  groupsRelatedToQuerySelector,
} from "../../selectors/groups.selectors";
import { authUserSelector } from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";

interface Props {
  query?: string;
  status?: "all-groups" | "suggestions" | "invitations";
}

const Dashboard: React.FC<Props> = ({ status }) => {
  const query = useAppSelector((state) => groupQuerySelector(state));

  const user = useAppSelector((state) => authUserSelector(state));

  const groups = useAppSelector((state) => groupsRelatedToQuerySelector(state));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    groupActions.groupQueryAction(event.target.value);
  };

  useEffect(() => {
    fetchGroups({ status, query }).then((groups) => {
      groupActions.groupQueryCompletedAction(groups, query);
    });
  }, [query]); //eslint-disable-line

  return (
    <div className="">
      <h1 className=" text-2xl px-10 pt-10">Hello.... {user!.first_name}</h1>
      <div className="h-10 px-10 py-10">
        <input
          className="border-2 p-1 outline-none "
          onChange={handleChange}
          value={query}
          placeholder="type here"
        ></input>
      </div>
      <div className="  rounded-md max-w-3xl mx-auto my-6">
        {groups.map((group: any) => (
          <ListGroup
            name={group.name}
            title={group.description}
            image={group.group_image_url}
          ></ListGroup>
        ))}
      </div>
    </div>
  );
};
Dashboard.defaultProps = {
  status: "all-groups",
};

export default React.memo(Dashboard);
