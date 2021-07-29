import React, { useEffect, useState } from "react";
import { fetchGroups } from "../api";
import ListGroup from "../components/ListGroup/ListGroup";

interface Props {
  query?: string;
  status?: "all-groups" | "suggestions" | "invitations";
}

const Dashboard: React.FC<Props> = ({ status, query }) => {
  const [groups, setGroups] = useState<any>([]);

  useEffect(() => {
    fetchGroups({ status, query }).then((response) => {
      setGroups(response.data.data);
    });
  }, [query]);

  return (
    <div className="">
      <div className=" border rounded-md max-w-3xl mx-auto my-6">
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
