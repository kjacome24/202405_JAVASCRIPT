"use strict";

numeroMagico = 123; // Da error, porque numeroMagico no está declarado

/////////////////
"use strict";

var miObjeto = Object.freeze({ clave: 42 });
miObjeto.clave = 101; // Error, no puedes cambiar esto, aqui normalmente suin el use strict no hubiera habiado error

///////// For example of use stric with this not working well

"use strict";

function mostrarThis() {
  console.log(this);
}

mostrarThis(); // undefined, en lugar de referirse al objeto global

/////////////Same example fixed
"use strict";

const kev = {
    name : "Kev",
    funct : 
function mostrarThis() {
        console.log(this.name)
}
}
kev.funct(); // undefined, en lugar de referirse al objeto global