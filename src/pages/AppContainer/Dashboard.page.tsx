import React, { useEffect, useState } from "react";
import { fetchGroups } from "../../api";
import ListGroup from "../../components/ListGroup/ListGroup";

interface Props {
  query?: string;
  status?: "all-groups" | "suggestions" | "invitations";
}

const Dashboard: React.FC<Props> = ({ status }) => {
  const [groups, setGroups] = useState<any>([]);
  const [query, setQuery] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    fetchGroups({ status, query }).then((response) => {
      setGroups(response.data.data);
    });
  }, [query]);

  return (
    <div className="">
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
