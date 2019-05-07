function fetchStudent() {
  //Povuci studente iz Local Storage
  let students = JSON.parse(localStorage.getItem("students"));
  //Pokupi id izlaza
  let studentsResults = document.getElementById("studentsResults");

  //Napravi unos u tabeli
  studentsResults.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    let studentId = i;
    let firstName = students[i].firstName;
    let lastName = students[i].lastName;
    let gradeMath = students[i].gradeMath;
    let gradeSerbian = students[i].gradeSerbian;
    let gradePhysics = students[i].gradePhysics;
    let gradeEnglish = students[i].gradeEnglish;
    let notAttended = students[i].notAttended;

    studentsResults.innerHTML += `<tr>
                                    <th scope="row">${studentId}</th>
                                    <td>${firstName}</td>
                                    <td>${lastName}</td>
                                    <td>${gradeMath}</td>
                                    <td>${gradeSerbian}</td>
                                    <td>${gradePhysics}</td>
                                    <td>${gradeEnglish}</td>
                                    <td>${notAttended}</td>
                                    <td>
                                    <a onclick="deleteStudent('${studentId}')" href="#" class="btn btn-danger btn-sm">Izbrisi</a>
                                    </td>
                                </tr>`;
  }
}

function deleteStudent(studentId) {
  //Povuci studente iz Local Storage
  let students = JSON.parse(localStorage.getItem("students"));
  //Loop kroz studente
  for (let i = 0; i < students.length; i++) {
    if (i == studentId) {
      //Obrisi ucenika
      students.splice(i, 1);
    }
  }
  //Resetuj Local Storage
  localStorage.setItem("students", JSON.stringify(students));

  //Ponovo ucitaj studente
  fetchStudent();
}
