<?php
include 'db.php';
$id = $_POST['id'];
$query = "SELECT * FROM tbl_office Order BY office_id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("office_id"=>$row["office_id"], "office_name"=>$row["office_name"], "office_address"=>$row['office_address']));
} 
echo json_encode($response);
mysqli_close($conn);
?>