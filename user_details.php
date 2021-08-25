<?php
session_start();
//echo $_SESSION['login_name'];die;
error_reporting(0);
  if(isset($_SESSION['login_name'])){
	   include("includes/header.php");
	   $sql="SELECT *FROM user";
  }
  else{
	 include("includes/header4.php");
	 $sql="SELECT * FROM `user` WHERE user_auth_name='$_SESSION[user_login]'";
  }	   
 ?>

  <div style="background:#997733;text-align:center;color:#DEF;font-size:24px;">
    <?php if(isset($_REQUEST['msg'])) echo $_REQUEST['msg'];?>
	</div> 
         <?php
	          include("includes/db_connect.php");	   
			
			  $rs=mysqli_query($con,$sql) or die(mysqli_error($con));
			  $sn=0;  
			  while($data=mysqli_fetch_assoc($rs)){
				
	     ?>
  <table border="1" width="1275" >
     <tr style="background:#CCFF99;">
	    <th colspan="4" ><a href="uploads/<?=$data['user_image']?>"><img src="uploads/<?=$data['user_image']?>" height="100" width="100" style="border-radius:50%;margin:15px;"></a> <?php if(isset($_SESSION['user_login'])){ echo"<a href='add_user.php?msg=$data[user_auth_name]'>Edit Details </a>"; } ?>
	 </tr>
     <tr>
	    <th>Name</th>
		  <td><?php echo $data['user_name'];?></td>
        <th>Designation</th>
		  <td><?=$data['user_deg']?></td>
	 </tr>
	 <tr>
        <th>Phone</th>
		  <td><?=$data['user_phone']?></td>
        <th>Email</th>
	      <td><?php echo $data['user_email'];?></td>
	</tr>
	<tr>
        <th>Gender</th>
		  <td><?php echo $data['user_gen'];?></td>  
        <th>Qualification</th>
	      <td><?php echo $data['user_qual'];?></td>
	</tr>	
	<tr>
        <th>Experience</th>
		  <td><?php echo $data['user_exp'];?></td>  
        <th>Interest</th>
	      <td><?php echo $data['user_interest'];?></td> 
	</tr>	
	<tr>
        <th>Username</th>
		  <td id="user_id" name="user_id"><?php echo $data['user_auth_name'];?></td>  
        <th>Date of Birth</th>
	      <td><?php echo $data['user_dob'];?></td>	
    </tr>
	<tr align="center">
	  <th >Approve Status</th>
	  <td style="font-weight:bolder;" colspan="2" width="100" class="status" name="status"><?php if($data['user_status']){ echo "<font color=green>Approved</font>";}else{ echo "<font color=red>Waiting For Approval</font>";} ?></td>
	  <td><?php if(isset($_SESSION['login_name'])){ echo "<a href='javascript:approve($data[user_id],$sn)'><button class=btn name=btn>";if($data['user_status']==0){echo "Approve";}else{ echo "Remove";}"</button></a>";}?></td>
	</tr>
	<?php $sn++;} ?>  
  </table>

<?php include("includes/footer.php");?>