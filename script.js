function checkMark() {
    let studentName = document.getElementById("studentName").value;
    let studentMark = parseInt(
        document.getElementById("studentMark").value
    );

    let result = document.getElementById("result");

    if (studentName === "" || isNaN(studentMark)) {
        result.textContent =
            "Please enter a valid name and mark.";
        return;
    }

    if (studentMark < 0 || studentMark > 100) {
        result.textContent =
            "Mark must be between 0 and 100.";
        return;
    }

    let grade = "";
    let status = "";

    if (studentMark >= 80) {
        status = "PASS";
        grade = "Distinction";
    }
    else if (studentMark >= 65) {
        status = "PASS";
        grade = "Merit";
    }
    else if (studentMark >= 50) {
        status = "PASS";
        grade = "Pass";
    }
    else {
        status = "FAIL";
        grade = "Fail";
    }

     result.textContent =
        studentName + " : " + status + " (" + grade + ")";

        let listItem = document.createElement("li");

    listItem.textContent =
        studentName + " - " + studentMark + "% - " + grade;

    studentList.appendChild(listItem);

}