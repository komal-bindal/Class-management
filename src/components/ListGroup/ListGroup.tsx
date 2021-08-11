import React from "react";
import { Link } from "react-router-dom";
interface Props {
  image?: string;
  name?: string;
  title?: string;
  className: string;
  id: number;
}
const ListGroup: React.FC<Props> = ({ image, name, title, className, id }) => {
  if (image === null || image === undefined) {
    image =
      "https://www.pngitem.com/pimgs/m/537-5372558_flat-man-icon-png-transparent-png.png";
  }
  const link = `/groups/id/${id}`;
  return (
    <div
      className={
        "flex items-center px-6 py-3 m-4 border-2 rounded-xl shadow-lg " +
        className
      }
    >
      <img src={image} alt="" className="h-10 w-10" />
      <div className="flex flex-col pl-6 ">
        <Link className="hover:border-b-2 hover:border-black w-max " to={link}>
          <h1>{name}</h1>
        </Link>
        <h3>{title}</h3>
      </div>
    </div>
  );
};
ListGroup.defaultProps = {
  name: "",
  title: "",
};

export default React.memo(ListGroup);
