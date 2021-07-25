import React, { useEffect, useState } from 'react'
import {Datum} from "../groupInterrfaces"
import { fetchGroups } from '../api'
import ListGroup from '../components/ListGroup/ListGroup'

interface Props {
  query?: string;
}

const Dashboard: React.FC<Props> = ({ query }) => {
  const [dataList, setDataList] = useState<any>([])

  useEffect(() => {
    fetchGroups({ status: "all-groups", query }).then((response) => {
      setDataList(response.data.data);
    });
  }, [query]);

  return (
      <div className = "">
    <div className=" border rounded-md max-w-3xl mx-auto my-6">
      {dataList.map((data:Datum, index:number) => {
        <ListGroup></ListGroup>;
      })}
    </div>
    </div>
  )
}
Dashboard.defaultProps = {};

export default React.memo(Dashboard);
