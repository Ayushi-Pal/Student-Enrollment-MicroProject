<?php
$conn = mysqli_connect("localhost", "root", "", "SCHOOL_DB");

$roll = $_POST['roll'];
$name = $_POST['name'];
$class = $_POST['class'];
$dob = $_POST['dob'];
$address = $_POST['address'];
$enroll = $_POST['enroll'];

$check = mysqli_query($conn, "SELECT * FROM STUDENT_TABLE WHERE Roll_No=$roll");

if (isset($_POST['save'])) {

    if (mysqli_num_rows($check) == 0) {
        $insert = "INSERT INTO STUDENT_TABLE VALUES
        ($roll, '$name', '$class', '$dob', '$address', '$enroll')";
        mysqli_query($conn, $insert);
        echo "Record Saved Successfully";
    }

}

if (isset($_POST['update'])) {

    $update = "UPDATE STUDENT_TABLE SET
        Full_Name='$name',
        Class='$class',
        Birth_Date='$dob',
        Address='$address',
        Enrollment_Date='$enroll'
        WHERE Roll_No=$roll";

    mysqli_query($conn, $update);
    echo "Record Updated Successfully";
}
?>
