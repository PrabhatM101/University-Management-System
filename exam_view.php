<?php 
session_start();
error_reporting(0);
if(isset($_SESSION['login_name'])  && !isset($_REQUEST['st_id'])){
	 include("includes/header.php"); 
	 $d=0;
	}else if(isset($_SESSION['st_login']) && isset($_REQUEST['st_id'])){
	    include("includes/header2.php"); 
	}else{
		header("location:student_login.php?msg=Login First Then Continue");
	}
  ?>
  <div style='margin-top:45px;color:red;font-size:24px;background:#00ff00;font-weight:bolder;'>
    <?php if(isset($_REQUEST['msg'])) echo $_REQUEST['msg'];?>
  </div>
  
  <form action="#" name="form_search">
     Enter Text To Search:<input type="text" name="st_search" />
	    <input type="submit" value="Search" />
  </form>
 <form action="lib/exam.php" id="exam_view" name="exam_view" method='post'> 
  <table border="1" width="1275">
     <tr>
	
	     <th colspan="17" align="right"> <?php if(isset($d)) {?> 
		 <a href="exam_add.php">Add Exam </a>||<a href="javascript:multiple_exam_delete()">Delete All</a>||
	 <?php }?>
	 <a href="javascript:printout();"><img src="images/print.ico" height="40" width="40" /></a></th>
	 </tr>
	 <tr>
	 <?php if(isset($d)) {?> <th><input type="checkbox" name="check_All" onclick="mark_All_Exam(this)" /></th><?php }?>
	    <th>Exam Title</th>
		<th>Exam Course</th>
		<th>Exam Subject</th>
		<th>Exam Date</th>
		<th>Exam Time</th>
		<th>Exam Description</th>
		<?php if(isset($d)) {?><th>Action</th> <?php }?>
	 </tr>
	 <?php
	   include("includes/db_connect.php");
	   global $con;
	     if(isset($_REQUEST['st_search'])){
		      $sql="SELECT *FROM exam WHERE exam_title LIKE '%$_REQUEST[st_search]%' or exam_course LIKE '%$_REQUEST[st_search]%' or exam_subject LIKE '%$_REQUEST[st_search]%' or exam_date LIKE '$_REQUEST[st_search]' or exam_time LIKE '$_REQUEST[st_search]' ";
		    }else if(isset($_SESSION['st_login']) && isset($_REQUEST['st_id'])){
				$sql="SELECT st_course FROM `student` Where st_id='$_SESSION[st_login]'";
				$rs=mysqli_query($con,$sql);
				$data=mysqli_fetch_assoc($rs);
				$st_course=$data['st_course'];
				$sql="select *from exam where exam_course=$st_course order by exam_date";
			    }else{
					$sql="select *from exam order by exam_id";
				}
	               $rs=mysqli_query($con,$sql) or die(mysqli_error($con));
	               while($data=mysqli_fetch_assoc($rs)){
	  ?>
	 
	  <tr align="center">
	  <?php if(isset($d)) {?>  <td><input type="checkbox" name="exam_multi_id[]" id="exam_multi_id[]" value="<?=$data['exam_id']?>" /></td><?php }?>
	    <td><?php echo $data['exam_title'];?></td>
		<td><?=get_value("course","course_id","course_name",$data['exam_course'])?></td>
		<td><?=get_value("subject","sub_id","sub_name",$data['exam_subject'])?></td>
		<td><?php echo $data['exam_date'];?></td>

		<td><?php echo $data['exam_time'];?></td>
		
	  <td><?php echo $data['exam_desc'];?></td>	     

		<?php if(isset($d)) {?> 
		  <td>
		  
	  <a href="exam_add.php?exam_id=<?=$data['exam_id']?>" ><img src="images/edit.ico" height="20" width="20"/></a>||
	     <a href="javascript:delete_exam(<?php echo $data['exam_id']?>)"><img src="images/delete.ico" height="20" width="20"/></a>||
		 <a href="exam_details.php?exam_id=<?=$data['exam_id']?>"><img src="images/details.ico" height="20" width="20"/></a>
	  </td>
	  </tr>
	  <?php } }?>
	  <input type="hidden" name="act" />
	  <input type="hidden" name="exam_id" />
  </table>
 </fieldset>
<?php include("includes/footer.php"); ?>