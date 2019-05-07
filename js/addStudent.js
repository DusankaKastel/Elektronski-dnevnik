//Submitovanje forme
document.getElementById("addStudent").addEventListener("submit", saveStudent);

//Funkcija za cuvanje forme
function saveStudent(e) {
  //Inicijalizacija polja u formi
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let gradeMath = document.getElementById("gradeMath").value;
  let gradeSerbian = document.getElementById("gradeSerbian").value;
  let gradePhysics = document.getElementById("gradePhysics").value;
  let gradeEnglish = document.getElementById("gradeEnglish").value;
  let notAttended = document.getElementById("notAttended").value;

  //Validacija imena i prezimena
  if (!firstName || !lastName) {
    alert("Molimo unesite ime i prezime ucenika");
    return false;
  }

  //Object podataka
  let student = {
    firstName: firstName,
    lastName: lastName,
    gradeMath: gradeMath,
    gradeSerbian: gradeSerbian,
    gradePhysics: gradePhysics,
    gradeEnglish: gradeEnglish,
    notAttended: notAttended
  };

  //Testiraj da li ima necega u Local Storage
  if (localStorage.getItem("students") === null) {
    //Prazan array
    let students = [];
    //Dodaj u array
    students.push(student);
    //Ubaci u Local Storage
    localStorage.setItem("students", JSON.stringify(students));
  } else {
    //Pokupi podatke iz Local Storage
    let students = JSON.parse(localStorage.getItem("students"));
    //Dodaj podatak u array
    students.push(student);
    //Resetuj Local Storage
    localStorage.setItem("students", JSON.stringify(students));
  }
  alert("Uspesno ste dodali studenta");

  //Ponovo ucitaj studente
  fetchStudent();

  e.preventDefault();
}
