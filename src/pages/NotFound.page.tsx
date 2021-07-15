import React from "react";
interface Props {}
const NotFound: React.FC<Props> = (props) => {
    return( <div className=" h-20 bg-red-600">
        Page not found.
    </div>
    );
}
 NotFound.defaultProps={};

 export default React.memo(NotFound);