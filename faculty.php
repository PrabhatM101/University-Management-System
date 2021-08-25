<?php include("includes/header3.php");?>

<div style="background:#FF0000;height:100px;margin-top:40px;line-height:100px;font-size:38px;color:White;">Our Faculties</div>
<?php
  $sql="SELECT *FROM user WHERE user_status=1";
  $rs=mysqli_query($con,$sql);
  while($data=mysqli_fetch_assoc($rs)){
?>
<div style="background:#227777;height:50px;margin-top:40px;"></div>
<div style="margin:0px 120px 0px 120px;box-shadow:2px 2px 7px 2px;">
<table border="1" height="200" width="200">

 <tr>
   <td rowspan="4" height="170" width="170" align="center"><img src="uploads/<?=$data['user_image']?>" style="border-radius:10%;height:180px;width:180px;" ></td>
   <td>Name</td>
   <td><?=$data['user_name']?></td>
   <td>Gender</td>
   <td><?=$data['user_gen']?></td>
 </tr>
 <tr>
   <td>Qualification</td>
   <td><?=$data['user_qual']?></td>
   <td>Designation</td>
   <td><?=$data['user_deg']?></td>
 </tr>
 <tr>
   <td>Experience</td>
   <td><?=$data['user_exp']?></td>
   <td>Phone</td>
   <td><?=$data['user_phone']?></td>
 </tr>
 <tr>
   <td>Email</td>
   <td><?=$data['user_email']?></td>
   <td>Area Of Interest</td>
   <td><?=$data['user_interest']?></td>
 </tr> 
</table>

</div>

<div style="background:#777777;height:50px;"></div>
<?php } ?>

<?php include("includes/footer.php");?>