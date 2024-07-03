
//////////////////////////coping dictionary but still using the same space of memory//////////////////////////
const usuario = {
    nome: 'Diego',
    idade: 23,
    id : 1
};

const usuario2 = usuario;
usuario2.nome = 'Cleiton';

console.log(usuario);

//-------------------------Spread function
const usuario = {
    nome: 'Diego',
    idade: 23,
    id : 1
};

const usuario2 = {...usuario}
usuario2.nome = 'Cleiton';

console.log(usuario);
console.log(usuario2);


///-------------------------Spread function with arrays inside the dictionary
const usuario = {
    nome: 'Diego',
    idade: 23,
    id : 1,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};
console.log(usuario2)
console.log(usuario3)