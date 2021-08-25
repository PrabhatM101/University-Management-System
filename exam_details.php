<?php include("includes/header.php");  ?>
  <div style="background:#99FF99;text-align:center;color:#003366;font-size:24px;">
    <?php if(isset($_REQUEST['msg'])) echo $_REQUEST['msg'];?>
  </div> 
  <table border="1" width="1275">
     <tr>
	    <th colspan="17" align="right"><a href="exam_add.php">Add Exam </a>||<a href="javascript:multiple_exam_delete()">Delete All</a>||<a href="javascript:printout();"><img src="images/print.ico" height="40" width="40" /></a></th>
	 </tr>
	     <?php
	          include("includes/db_connect.php");	   
	          $sql="SELECT * FROM `exam` WHERE exam_id='$_REQUEST[exam_id]'";
	          $rs=mysqli_query($con,$sql) or die(mysqli_error($con));
	             while($data=mysqli_fetch_assoc($rs)){
	     ?>
	 <tr>
	    <th>Exam Title</th>
		<td><?php echo $data['exam_title'];?></td>
	 </tr>
	 <tr>
	    <th>Exam Course</th>
		<td><?=get_value("course","course_id","course_name",$data['exam_course'])?></td>
	</tr>
	<tr>
	    <th>Exam Subject</th>
		<td><?=get_value("subject","sub_id","sub_name",$data['exam_subject'])?></td>
	</tr>	
	<tr>
	    <th>Exam Date</th>
	    <td><?php echo $data['exam_date'];?></td>
	</tr>	
	<tr>
	    <th>Exam Time</th>
		<td><?php echo $data['exam_time'];?></td>	
    </tr>
	 <tr>		
		<th>Exam Description</th>
		<td><?php echo $data['exam_desc'];?></td>
	 </tr>	 
	 <tr>
	    <td height="28" colspan="4">
	      <div align="center"> 
            <button onclick="printout()"><img src="images/print.ico" height="30" width="30"/></button>
            <button onclick="history.back()"><<<</button>
	       </div> 
	    </td>
	 </tr>		
  <?php } ?>
	  <input type="hidden" name="exam_id" />
  </table>
<?php include("includes/footer.php"); ?>