class Animal {
    constructor(name,age) {
        this.name = name;
        this.age = age;

    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

let dog = new Animal('Rex', 5);
dog.speak(); // Rex makes a noise.

class Dog extends Animal {
    constructor(name,age,breed) {
        super(name,age);
        this.breed = breed;
    }
    speak() {
        console.log(this.name + ' barks.');
    }
}


let dog2 = new Dog('Rexo', 5, 'Golden Retriever');
dog2.speak(); 



//static methods

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}