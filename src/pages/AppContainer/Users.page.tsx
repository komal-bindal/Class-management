import React from "react";
import { useEffect } from "react";
import { ImSpinner } from "react-icons/im";
import { useDispatch } from "react-redux";
import { fetchUsersAction, userFetchOneAction } from "../../actions/users.actions";
import ListGroup from "../../components/ListGroup/ListGroup";
import { User } from "../../models/User";
import {
  usersListSelector,
  usersLoadingListSelector,
} from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Users: React.FC<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAction(true));
  }, []); //eslint-disable-line

  const users = useAppSelector(usersListSelector);
  const loading = useAppSelector(usersLoadingListSelector);
  

  let count = true;
  const baseLink = "/users";

  return (
    <div className="p-5 flex flex-col items-center  w-full bg-gray-100 ">
      <div className="  rounded-md max-w-3xl mx-auto ">
        {loading && (
          <div className="flex flex-col justify-center items-center">
            <ImSpinner className="animate-spin h-7 w-7"></ImSpinner>
            <h1 className="text-xl">Loading....</h1>
          </div>
        )}
        {users !== undefined &&
          users.length > 0 &&
          users.map((user: User) => (
            <ListGroup
              dispatchedAction = {userFetchOneAction(user.id)}
              className={(count = !count) ? "bg-white" : "bg-gray-300"} //eslint-disable-line
              name={user.first_name + " " + user.last_name}
              id={user.id}
              baseLink={baseLink}
              title={user.role}
            ></ListGroup>
          ))}
      </div>
    </div>
  );
};
Users.defaultProps = {};

export default React.memo(Users);
