<?php include("includes/header2.php"); 

   $sql="select st_name,st_image from student where st_id='$_SESSION[st_login]'"; 
   $rs=mysqli_query($con,$sql);
   $data=mysqli_fetch_assoc($rs);
  date_default_timezone_set("Asia/Kolkata");
?>
<div style="margin-left:800px;margin-top:5px;display:inline-block;">
   <p style="font-size:16px;">Date:<?=date('d/m/20y',time())?></p>
   <p style="font-size:16px;">Time:<?=date('g:i:sa')?></p>
</div>
<img src="<?="uploads/".$data['st_image']?>" height="100" width="100" style="border:2px solid black;"/>
<div style="margin:auto;margin-bottom:300px;margin-top:100px;"><h1 style="color:C2D418;font-size:88px;font-weight:bolder;">Welcome Mr. <?=$data['st_name']?></h1></div>

<?php include("includes/footer.php"); ?>  