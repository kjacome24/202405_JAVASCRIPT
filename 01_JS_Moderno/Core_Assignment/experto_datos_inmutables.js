const videojuegos = Object.freeze([
        { "id": 1, "nombre": "The Legend of Zelda: Breath of the Wild", "genero": "aventura", "plataforma": "Nintendo Switch" },
        { "id": 2, "nombre": "Super Mario Odyssey", "genero": "plataformas", "plataforma": "Nintendo Switch" },
        { "id": 3, "nombre": "Red Dead Redemption 2", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
        { "id": 4, "nombre": "The Witcher 3: Wild Hunt", "genero": "RPG", "plataforma": "PC" },
        { "id": 5, "nombre": "Fortnite", "genero": "battle royale", "plataforma": "multiplataforma" },
        { "id": 6, "nombre": "Minecraft", "genero": "sandbox", "plataforma": "multiplataforma" },
        { "id": 7, "nombre": "Overwatch", "genero": "shooter", "plataforma": "multiplataforma" },
        { "id": 8, "nombre": "FIFA 20", "genero": "deportes", "plataforma": "multiplataforma" },
        { "id": 9, "nombre": "Super Smash Bros. Ultimate", "genero": "lucha", "plataforma": "Nintendo Switch" },
        { "id": 10, "nombre": "League of Legends", "genero": "MOBA", "plataforma": "PC" },
        { "id": 11, "nombre": "God of War", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
        { "id": 12, "nombre": "Animal Crossing: New Horizons", "genero": "simulación", "plataforma": "Nintendo Switch" },
        { "id": 13, "nombre": "Call of Duty: Warzone", "genero": "shooter", "plataforma": "multiplataforma" },
        { "id": 14, "nombre": "Cyberpunk 2077", "genero": "acción-RPG", "plataforma": "multiplataforma" },
        { "id": 15, "nombre": "Assassin's Creed Valhalla", "genero": "acción-aventura", "plataforma": "multiplataforma" },
        { "id": 16, "nombre": "Among Us", "genero": "party", "plataforma": "multiplataforma" },
        { "id": 17, "nombre": "Pokémon Sword and Shield", "genero": "RPG", "plataforma": "Nintendo Switch" },
        { "id": 18, "nombre": "Genshin Impact", "genero": "acción-RPG", "plataforma": "multiplataforma" },
        { "id": 19, "nombre": "Valorant", "genero": "shooter táctico", "plataforma": "PC" },
        { "id": 20, "nombre": "Death Stranding", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
        { "id": 21, "nombre": "Spider-Man: Miles Morales", "genero": "acción-aventura", "plataforma": "PlayStation 5" },
        { "id": 22, "nombre": "Hades", "genero": "roguelike", "plataforma": "PC" },
        { "id": 23, "nombre": "Overcooked! 2", "genero": "cooperativo", "plataforma": "multiplataforma" },
        { "id": 24, "nombre": "Sekiro: Shadows Die Twice", "genero": "acción-aventura", "plataforma": "multiplataforma" },
        { "id": 25, "nombre": "Rainbow Six Siege", "genero": "shooter táctico", "plataforma": "multiplataforma" },
        { "id": 26, "nombre": "Grand Theft Auto V", "genero": "acción-aventura", "plataforma": "multiplataforma" }
    ]);

////////////////////1. Un conjunto de videojuegos cuyo número de identificación es divisible uniformemente por 3.
console.log("////////////////////1. Un conjunto de videojuegos cuyo número de identificación es divisible uniformemente por 3.");
const divisible_3_videojuegos = videojuegos.filter(videojuego => videojuego.id % 3 === 0);
console.log(divisible_3_videojuegos);

////////////////////2. Un conjunto de videojuegos que pertenecen al género «acción-RPG».
console.log("////////////////////2. Un conjunto de videojuegos que pertenecen al género «acción-RPG».");
const accion_rpg_videojuegos = videojuegos.filter(videojuego => videojuego.genero==="acción-RPG");
console.log(accion_rpg_videojuegos);

////////////////////3. Un conjunto de videojuegos que tienen más de un género.
console.log("////////////////////3. Un conjunto de videojuegos que tienen más de un género.");
const mas_de_un_genero = videojuegos.filter(videojuego => videojuego.genero.includes(" "));
console.log(mas_de_un_genero);

////////////////////4. Una lista con los nombres de los videojuegos.
console.log("////////////////////4. Una lista con los nombres de los videojuegos.");
const videojuegos_names = videojuegos.map(videojuego => videojuego.nombre);
console.log(videojuegos_names);


////////////////////5. Una lista con los nombres de los videojuegos con un número de identificación superior a 19.
console.log("////////////////////5. Una lista con los nombres de los videojuegos con un número de identificación superior a 19.");
const id_more_than_19 = videojuegos.filter(videojuego=> videojuego.id>19).map(videojuego => videojuego.nombre);
console.log(id_more_than_19);

////////////////////6. Una lista con los nombres de los videojuegos cuyo único género es «shooter».
console.log("////////////////////6. Una lista con los nombres de los videojuegos cuyo único género es «shooter».");
const shooter_names_games = videojuegos.filter(videojuego => videojuego.genero.includes("shooter")).map(videojuego => videojuego.nombre);
console.log(shooter_names_games);

////////////////////7. Una lista que contenga solo el primer género de todos los videojuegos cuyo segundo género es «aventura».
console.log("////////////////////7. Una lista que contenga solo el primer género de todos los videojuegos cuyo segundo género es «aventura».");
const games_ex_7 = videojuegos.filter(videojuego => videojuego.genero.includes("-aventura")).map(videojuego => videojuego.genero.slice(0,(videojuego.genero.indexOf("-"))));
console.log(games_ex_7);


////////////////////8. Un conteo del número de videojuegos que son del género «party».
console.log("////////////////////8. Un conteo del número de videojuegos que son del género «party».");
const count_party_games = videojuegos.filter(videojuego=> videojuego.genero.includes("party")).length;
console.log(count_party_games);


////////////////////9. Una lista con todos los videojuegos excepto aquellos cuyo número de identificación sea múltiplo de 5.
console.log("////////////////////9. Una lista con todos los videojuegos excepto aquellos cuyo número de identificación sea múltiplo de 5.");
const games_not_divisable_by_5 = videojuegos.filter(videojuego => videojuego.id % 5 !== 0);
console.log(games_not_divisable_by_5);

////////////////////10. Una lista con todos los videojuegos y para el videojuego con el número de identificación 5, se cambia su género por «otro».
console.log("////////////////////10. Una lista con todos los videojuegos y para el videojuego con el número de identificación 5, se cambia su género por «otro».");
const new_video_games = [...videojuegos.slice(0,4),{...videojuegos[4], genero : "otro"},...videojuegos.slice(5)]
console.log(new_video_games)

