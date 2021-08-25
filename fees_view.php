<?php include("includes/header.php");  ?>
  <div style="margin-top:65px;background:#99FF99;text-align:center;color:#003366;font-size:24px;">
    <?php if(isset($_REQUEST['msg'])) echo $_REQUEST['msg'];?>
  </div>
  <form action="#" name="form_search">
     Enter Text To Search:<input type="text" name="st_search" />
	    <input type="submit" value="Search" />
  </form>
 <form action="lib/fees.php" id="student_view" name="student_view" method="post"> 
  <table border="1" width="1275">
     <tr>
	    <th colspan="17" align="right"><a href="student_add.php">Add Student </a>||<a href="javascript:multiple_student_delete()">Delete All</a>||<a href="javascript:printout();"><img src="images/print.ico" height="40" width="40" /></a></th>
	 </tr>
	 <tr>
	    <th><input type="checkbox" name="check_All" onclick="mark_All(this)" /></th>
	    <th>Name</th>
		<th>Father Name</th>
		<th>Course</th>
		<th>Gender</th>
		<th>Image</th>
		<th>Balance</th>
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
	  <?php
		     global $con;
	         $sqlf="SELECT *FROM fees WHERE st_id=$data[st_id]";
			 $rsf=mysqli_query($con,$sqlf);
			 $dataf=mysqli_fetch_assoc($rsf);
		 ?>
	  <tr align="center">
	    <td><input type="checkbox" name="st_multi_id[]" id="st_multi_id[]" value="<?=$data['st_id']?>" /></td>
	    <td><?php echo $data['st_name'];?></td>
		<td><?php echo $data['st_father'];?></td>
		<td><?=get_value("course","course_id","course_name",$data['st_course'])?></td>
		<td><?php echo $data['st_gen'];?></td>

		<td><a href="uploads/<?php echo $data['st_image']?>" target="_blank"><img src="uploads/<?php echo $data['st_image']?>" height="50" width="50" border="2"/></a></td>
		
	  <td><?php if(isset($dataf['st_id'])){ if($dataf['st_bal']==0){$dataf['st_bal']='NIL';}echo $dataf['st_bal'];}else{echo get_value("course","course_id","course_total_fees",$data['st_course']);}?></td>	     
		  <th>
		    <?php

		    if(isset($dataf['st_bal']) && $dataf['st_bal']=='NIL'){
			    echo "<p style='background:green;color:white;'>Completed</p>";
			  }else{
			    ?>  
	           <a href="fees_add.php?st_id=<?=$data['st_id']?>"style="background:red;color:white;"/>Pay Fees</a>||
			   <?php }  ?>
	    <!-- <a href="fees_add.php?st_id=<?#=$data['st_id']?>& id='edit'" ><img src="images/edit.ico" height="20" width="20"/></a>|| -->
	     <a href="javascript:delete_student(<?php echo $data['st_id']?>)"><img src="images/delete.ico" height="20" width="20"/></a>||
		 <a href="fees_details.php?st_id=<?=$data['st_id']?>"><img src="images/details.ico" height="20" width="20"/></a>
	  </th>
	  </tr>
	  <?php } ?>
	  <input type="hidden" name="act" />
	  <input type="hidden" name="st_id" />
  </table>
 </form> 
<?php include("includes/footer.php"); ?>