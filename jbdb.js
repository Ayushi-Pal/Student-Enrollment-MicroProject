var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";

var dbName = "SCHOOL_DB";
var relName = "STUDENT_TABLE";
var connToken = "90939802|-31949268974576|90961352";

/* Create PUT request */
function createPUTRequest(connToken, jsonObj, dbName, relName) {
    return JSON.stringify({
        token: connToken,
        cmd: "PUT",
        dbName: dbName,
        rel: relName,
        jsonStr: jsonObj
    });
}

/* Create UPDATE request */
function createUPDATERecordRequest(connToken, jsonObj, dbName, relName, recNo) {
    return JSON.stringify({
        token: connToken,
        cmd: "UPDATE",
        dbName: dbName,
        rel: relName,
        jsonStr: jsonObj,
        rec_no: recNo
    });
}

/* Create GET request */
function createGETRequest(connToken, dbName, relName, jsonObj) {
    return JSON.stringify({
        token: connToken,
        cmd: "GET",
        dbName: dbName,
        rel: relName,
        jsonStr: jsonObj
    });
}

/* Execute API command */
function executeCommand(reqString, apiEndPoint) {
    var url = jpdbBaseURL + apiEndPoint;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(reqString);
    return xhr.responseText;
}

/* Save student record */
function saveStudent() {
    var jsonObj = {
        Roll_No: document.getElementById("roll").value,
        Full_Name: document.getElementById("name").value,
        Class: document.getElementById("class").value,
        Birth_Date: document.getElementById("dob").value,
        Address: document.getElementById("address").value,
        Enrollment_Date: document.getElementById("enroll").value
    };

    var req = createPUTRequest(connToken, JSON.stringify(jsonObj), dbName, relName);
    executeCommand(req, jpdbIML);
    alert("Record Saved Successfully");
}

/* Update student record */
function updateStudent(recNo) {
    var jsonObj = {
        Full_Name: document.getElementById("name").value,
        Class: document.getElementById("class").value,
        Birth_Date: document.getElementById("dob").value,
        Address: document.getElementById("address").value,
        Enrollment_Date: document.getElementById("enroll").value
    };

    var req = createUPDATERecordRequest(
        connToken,
        JSON.stringify(jsonObj),
        dbName,
        relName,
        recNo
    );
    executeCommand(req, jpdbIML);
    alert("Record Updated Successfully");
}
