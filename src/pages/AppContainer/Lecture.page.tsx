import React from "react";
import { useParams } from "react-router-dom";
interface Props {}
const Lecture: React.FC<Props> = (props) => {
  const { batchNumber, lectureNumber } = useParams<{
    lectureNumber: string;
    batchNumber: string;
  }>();
  return (
    <div>
      This is lecture #{lectureNumber} of batch #{batchNumber}
    </div>
  );
};
Lecture.defaultProps = {};

export default React.memo(Lecture);
