import React from "react";
interface Props {
  image?: string;
  name?: string;
  title?: string;
}
const ListGroup: React.FC<Props> = ({ image, name, title }) => {
  if (image === null || image === undefined) {
    image =
      "https://www.pngitem.com/pimgs/m/537-5372558_flat-man-icon-png-transparent-png.png";
  }

  return (
    <div className="flex items-center px-6 py-3 m-4 border-2 roundedd-xl">
      <img src={image} className="h-10 w-10" />
      <div className="flex flex-col pl-6 ">
        <h1>{name}</h1>
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
