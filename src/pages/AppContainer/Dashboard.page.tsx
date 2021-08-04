import React, { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { fetchGroups } from "../../api";
import ListGroup from "../../components/ListGroup/ListGroup";
import {
  groupQuery,
  groupQueryCompleted,
  GROUP_QUERY_COMPLETED,
  useAppSelector,
} from "../../store";

interface Props {
  query?: string;
  status?: "all-groups" | "suggestions" | "invitations";
}

const Dashboard: React.FC<Props> = ({ status }) => {
  const dispatch = useDispatch();

  const query = useAppSelector((state) => state.query);

  const user = useAppSelector((state) => state.me);

  const groups = useAppSelector((state) => {
    const groupIds = state.groupQueryMap[state.query] || [];
    const groups = groupIds.map((id) => state.groups[id]);
    return groups;
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(groupQuery(event.target.value));
  };
  useEffect(() => {
    fetchGroups({ status, query }).then((groups) => {
      dispatch(groupQueryCompleted(groups, query));
    });
  }, [query]);
  console.log("Groups", groups);

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
