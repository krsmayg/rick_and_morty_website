import React from 'react';
import Typography from "@material-ui/core/Typography";

const HomeBoard = (props) => {
  return ( 
    <div className="main-board">
      <Typography variant="h1" >{props.title}</Typography>
    </div>
   );
}
 
export default HomeBoard;