// Classes & Objects

// OOP - Object Orientated Programming

// let favouriteFilm = "Avatar"
// let secondFilm = "Pirates of the Caribbean"

// console.log(favouriteFilm)

// favouriteFilm.length
// favouriteFilm.toUpperCase()

// let bensTaste = {
//     favouriteFilms: [
//         "Avatar",
//         "Pirates of the Caribbean",
//         "Gladiator",
//         "Spiderman: No way home"
//     ],
//     favActors: [
//         "Christoph Waltz",
//         "Adam Driver",
//         "Jonah Hill"
//     ]
// }

// let tracyTaste = {
//     favouriteFilms: [
//         "PS I love you",
//         "Silverling Playbooks",
//         "Home Alone"
//     ],
//     favActors: [
//         "Bradley Cooper"
//     ]

// }

// class Taste {
//   constructor(name, noFilmsWatched, favFilm) {
//     this.name = name
//     this.favFilm = favFilm
//     this.filmsWatched = noFilmsWatched
//   }

//   favActors = ["Bradley Cooper"]
//   isHuman = true
//   atCodeNation = true
// }

// let bensTaste = new Taste("Ben", 1000, "Gladiator")
// let tracyTaste = new Taste("Tracy", 600, "Silverlinings Playbook")
// let danielTaste = new Taste("Daniel", 20, "Spider Man")

// // tracyTaste.favFilms.push("Home Alone")

// console.log(bensTaste)
// console.log(tracyTaste)
// console.log(danielTaste)

class Dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  hunger = 0
  thirst = 0
  energy = 10

  play() {
    console.log(`${this.name} is having a great time playing! Woof!`)
    this.energy--
  }
}

let fido = new Dog("Fido", 2)

console.log(fido)
fido.play()
console.log(fido)
