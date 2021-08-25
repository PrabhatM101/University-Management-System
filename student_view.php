<?php include("includes/header.php");  ?>
  <div style="margin-top:45px;background:#99FF99;text-align:center;color:#003366;font-size:24px;">
    <?php if(isset($_REQUEST['msg'])) echo $_REQUEST['msg'];?>
  </div>
  <form action="#" name="form_search">
     Enter Text To Search:<input type="text" name="st_search" />
	    <input type="submit" value="Search" />
  </form>
 <form action="lib/student.php" id="student_view" name="student_view" method="post"> 
  <table border="1" width="1275">
     <tr>
	    <th colspan="17" align="right"><a href="student_add.php">Add Student </a>||<a href="javascript:multiple_student_delete()">Delete All</a>||<a href="javascript:printout();"><img src="images/print.ico" height="40" width="40" /></a></th>
	 </tr>
	 <tr>
	    <th><input type="checkbox" name="check_All" onclick="mark_All(this)" /></th>
	    <th>Name</th>
		<th>Father Name</th>
		<th>Phone</th>
		<th>Email</th>
		<th>Gender</th>
		<th>Address1</th>
		<th>Address2</th>
		<th>Pincode</th>
		<th>DOB</th>
		<th>DOA</th>
		<th>Image</th>
		<th>Action</th>
	 </tr>
	 <?php
	   include("includes/db_connect.php");
	   global $con;
	     if(isset($_REQUEST['st_search'])){
		      $sql="SELECT *FROM student WHERE st_name LIKE '%$_REQUEST[st_search]%' or st_father LIKE '%$_REQUEST[st_search]%' or st_gen LIKE '$_REQUEST[st_search]' or st_pincode LIKE '$_REQUEST[st_search]' ";
		    }else{
	               $sql="SELECT * FROM `student` ORDER BY `st_id`";
			    }
	               $rs=mysqli_query($con,$sql) or die(mysqli_error($con));
	               while($data=mysqli_fetch_assoc($rs)){
	  ?>
	  <tr align="center">
	    <td><input type="checkbox" name="st_multi_id[]" id="st_multi_id[]" value="<?=$data['st_id']?>" /></td>
	    <td><?php echo $data['st_name'];?></td>
		<td><?php echo $data['st_father'];?></td>
		<td><?php echo $data['st_phone'];?></td>
		<td><?php echo $data['st_email'];?></td>
		<td><?php echo $data['st_gen'];?></td>
		<td><?php echo $data['st_address1'];?></td>
		<td><?php echo $data['st_address2'];?></td>
		<td><?php echo $data['st_pincode'];?></td>
		<td><?php echo $data['st_dob'];?></td>
		<td><?php echo $data['st_doa'];?></td>
		<td><a href="uploads/<?php echo $data['st_image']?>" target="_blank"><img src="uploads/<?php echo $data['st_image']?>" height="50" width="50" border="2"/></a></td>
		
	  <th><a href="student_add.php?st_id=<?=$data['st_id']?>" rel='facebox'><img src="images/edit.ico" height="20" width="20"/></a>||
	     <a href="javascript:delete_student(<?php echo $data['st_id']?>)"><img src="images/delete.ico" height="20" width="20"/></a>||
		 <a href="student_details.php?st_id=<?=$data['st_id']?>" rel='facebox'><img src="images/details.ico" height="20" width="20"/></a>
	  </th>
	  </tr>
	  <?php } ?>
	  <input type="hidden" name="act" />
	  <input type="hidden" name="st_id" />
	
  </table>
 </form> 
<?php include("includes/footer.php"); ?>