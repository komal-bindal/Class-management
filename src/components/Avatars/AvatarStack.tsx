import React from "react";
import Avatar from "./Avatar";
interface Props {}
const AvatarStack: React.FC<Props> = (props) => {
  return (
    <div className="flex -space-x-4">
      <Avatar className="z-10"></Avatar>
      <Avatar className="z-20"></Avatar>
      <Avatar className="z-30"></Avatar>
      <Avatar className="z-40"></Avatar>
      <Avatar className="z-50"></Avatar>
    </div>
  );
};
AvatarStack.defaultProps = {};

export default React.memo(AvatarStack);
