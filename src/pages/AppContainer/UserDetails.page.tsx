import React, { useEffect } from "react";
import { ImSpinner } from "react-icons/im";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { userFetchOneAction } from "../../actions/users.actions";
import Button from "../../components/Button/Button";
import {
  selectedUserSelector,
  userSelectedIdErrorSelector,
  userSelectedIdLoadingSelector,
  usersListSelector,
} from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const UserDetails: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = +useParams<{ id: string }>().id;

  const user = useAppSelector(selectedUserSelector);
  const loading = useAppSelector(userSelectedIdLoadingSelector);
  const error = useAppSelector(userSelectedIdErrorSelector);
  const users = useAppSelector(usersListSelector);

  let prevDisabled =
    users === undefined ? true : users.length > 0 ? false : true;
  let nextDisabled =
    users === undefined ? true : users.length > 0 ? false : true;

  let index: number;

  if (users !== undefined && users.length > 0) {
    for (let i = 0; i < users!.length; i++) {
      if (users![i].id === id) {
        index = i;
        break;
      }
    }
    if (index! === 0) {
      prevDisabled = true;
    }
    if (index! === users!.length - 1) {
      nextDisabled = true;
    }
  }

  useEffect(() => {
    dispatch(userFetchOneAction(id));
  }, [id]); //eslint-disable-line

  return (
    <div className="h-full w-full">
      {user && loading && <div className="mt-10"></div>}
      {!user && loading && <div className="mt-10"></div>}

      {loading && (
        <div className="flex flex-col justify-center items-center">
          <ImSpinner className="animate-spin h-7 w-7"></ImSpinner>
          <h1 className="text-lg">Loading Group....</h1>
        </div>
      )}
      {user && loading && <div className="mt-5"></div>}
      {user && !loading && <div className="mt-28"></div>}
      {error && (
        <div className="flex flex-col mt-20 justify-center items-center">
          <h1 className="text-2xl">{error}</h1>
        </div>
      )}
      {user && (
        <div className="w-full   flex flex-col justify-center items-center bg-gray-100">
          <div className="flex min-w-min max-w-max p-4 flex-col  border border-gray-700 shadow-xl bg-white ">
            <div className="flex items-center mb-3">
              <h1 className="font-bold text-2xl">
                {`${user.first_name} ${user.last_name}`}{" "}
              </h1>
            </div>
            <div className="flex items-center">
              <h2 className="font-bold text-lg mr-3">Role:</h2>
              <h3 className="text-md font-semibold">{user.role}</h3>
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
                  history.push(`/users/id/${users![index].id}`);
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
                  history.push(`/users/id/${users![index].id}`);
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

UserDetails.defaultProps = {};
export default React.memo(UserDetails);
