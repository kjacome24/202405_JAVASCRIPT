////Ejercicio 1: Conversor de Temperatura
const cels_to_fahre = temp_celsius => ((temp_celsius * (9/5))+32);
console.log(cels_to_fahre(100)) // 212
console.log(cels_to_fahre(10)) // 50

////Ejercicio 2: Generador de Mensajes Personalizados
const string_generator = (nombre , edad) => console.log(`Hola ${nombre}, tienes ${edad} años de edad`);
string_generator("Kevin",34);//Hola Kevin, tienes 34 años de edad
string_generator("Arturo",64);//Hola Arturo, tienes 64 años de edad

////Ejercicio 3: Convertir de Millas a Kilómetros
const miles_to_km = input_miles => `${input_miles * 1.60934} kms`;
console.log(miles_to_km(10));//16.0934 kms
console.log(miles_to_km(14));//22.53076 kms


////Ejercicio 4: Que llevar con el clima
const clima_prediccion = clima_input => clima_input == "soleado" ? "Lleva sombrero!" : (clima_input == "lluvioso" ? "LLeva paraguas!" : "Bro, no tengo idea, ve con dios!" );
console.log(clima_prediccion("lluvioso"));//LLeva paraguas!
console.log(clima_prediccion("soleado"));//Lleva sombrero!
console.log(clima_prediccion("Humedo"))//Bro, not tengo idea, ve con dios!


