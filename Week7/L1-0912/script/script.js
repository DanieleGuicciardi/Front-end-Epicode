class User {
    constructor(_firstName, _lastName, _age, _location) {
      this.firstName = _firstName;
      this.lastName = _lastName;
      this.age = _age;
      this.location = _location;
    }
  
    ageCompared(user) {
      if (this.age > user.age) {
        return this.firstName + " è più vecchio di " + user.firstName;
      } else if (this.age < user.age) {
        return this.firstName + " è piu giovane di " + user.firstName;
      } else {
        return this.firstName + " e " + user.firstName + " hanno la stessa età";
      }
    }
  }
  
  const mario = new User("Mario", "Rossi", 27, "Genova");
  const andrea = new User("Andrea", "Verdi", 33, "Milano");
  
  console.log(mario.ageCompared(andrea));
  
  //Es 2
  
  const form = document.getElementsByTagName("form")[0];
  const list = document.getElementById("list");
  
  const petName = document.getElementById("name");
  const petOwner = document.getElementById("owner");
  const species = document.getElementById("species");
  const breed = document.getElementById("breed");
  
  const pets = [];
  
  class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
      this.petName = _petName;
      this.ownerName = _ownerName;
      this.species = _species;
      this.breed = _breed;
    }
  
    ownerComparison(pet) {
      for (let i = 0; i < pets.length; i++) {
        if (this.ownerName === pet[i].ownerName) {
          return console.log(true);
        } else {
          return console.log(false);
        }
      }
    }
  }
  
  const viewList = function () {
    list.innerHTML = "";
  
    pets.forEach((pet) => {
      const li = document.createElement("li");
  
      li.innerText =
        "Nome: " +
        pet.petName +
        " Nome del padrone: " +
        pet.ownerName +
        " Specie: " +
        pet.species +
        " Tipo: " +
        pet.breed;
  
      list.appendChild(li);
    });
  };
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const newPet = new Pet(
      petName.value,
      petOwner.value,
      species.value,
      breed.value
    );
  
    console.log("Animale Salvato", newPet);
    console.log(newPet.ownerComparison(pets));
  
    pets.push(newPet);
  
    petName.value = "";
    petOwner.value = "";
    species.value = "";
    breed.value = "";
  
    viewList();
  });