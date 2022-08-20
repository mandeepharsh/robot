
import React from 'react';
const Scroll = (props)=>{
return   (
  <div style={{height:"800px",overflowY:"scroll",border:'5 px solid black'}}>
   {props.children}
  </div>
);

};

export default Scroll;
