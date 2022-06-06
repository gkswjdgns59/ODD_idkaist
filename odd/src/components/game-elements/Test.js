import React from 'react';
 
// the things passed to setState() is passed to your component as props, it also recieves the manager.
function Name({ name , y, gX}) {
  return (
    <p style={{ position: 'absolute', top: 200, left: y , ghostX: gX}}>
      <img src="assets/circle.png"/>
    </p>
  )
}
 
export default Name;