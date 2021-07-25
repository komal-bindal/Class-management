import React from "react";
interface Props {
  image?: string;
  name?: string;
  title?: string;
}
const ListGroup: React.FC<Props> = ({ image, name, title }) => {
  return (
    <div className="flex justify-between items-center px-6 py-3 m-4 roundedd-xl">
      <div className="flex flex-col ">
        <h1>{name}</h1>
        <h3>{title}</h3>
      </div>
    </div>
  );
};
ListGroup.defaultProps = {
    name:"komal",
    title: "hi"
};

export default React.memo(ListGroup);
