//Polymorphism

class Animal {
    makeSound() {
        return 'The animal makes a noise'
    }
}

class Dog extends Animal {
    makeSound() {
        return super.makeSound () + ' , the dog barks';
    }
}

class Cat extends Animal {
    makeSound() {
        return super.makeSound() + ',the cat meoowws';
    }
}

