import React from 'react';
 function Animal ({nome, latim, habitat, url }) {
   return(
     <div>
       <span>Nome: {nome}</span>
      <li> Nome:{nome} --- Nome em latim:{latim} --- Habitat:{habitat} - <img src={url} height="500"/></li>
     </div>
   );
 }
  export default Animal;