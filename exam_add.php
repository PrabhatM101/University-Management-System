<?php include('includes/header.php'); ?>
<?php
   error_reporting(0);
    if($_REQUEST['exam_id']){
	     $sql="SELECT *FROM exam WHERE exam_id='$_REQUEST[exam_id]'";
		 $rs=mysqli_query($con,$sql) or die(mysqli_error());
		 $data=mysqli_fetch_assoc($rs);
	   }
 ?>
     <form action="lib/exam.php" method="post" enctype="multipart/form-data" name="frm" id="frm" onsubmit="return valid_student(this);">
  <table width="1274" height="361" border="1">
    <tr>
      <td colspan="4">
	      <div align="center"><font color="#0000FF" size="+5">
	        Student Exam Form
        </font> </div></td>
    </tr>
    <tr>
      <td width="236"><div align="center">Exam Title:</div></td>
      <td width="300"><label>
      <input name="exam_title" type="text" id="exam_title" value="<?=$data['exam_title']?>" placeholder="Exam Title"/>
      </label></td>
      <td width="323"><div align="center">Exam Course: </div></td>
      <td width="383"><select id="exam_course" name="exam_course" onchange="getSubject(this.value)"><?=get_option_list('course','course_id','course_name',$data['exam_course'])?></select></td>
    </tr>
    <tr>
      <td><div align="center">Exam Subject: </div></td>
      <td><label> 
	     <select id="exam_subject" name="exam_subject"><option value="0">Please Select</option>
		    <?php
			    if(isset($data['exam_subject']))
	        	 echo get_option_list('subject','sub_id','sub_name',$data['exam_subject']);
		     ?>
		</select>
	  </label></td>
      <td><div align="center">Exam Date:</div></td>
      <td><label>
       <input type="text" name="exam_date" id="exam_date"  value="<?=$data['exam_date']?>" placeholder="dd/mm/yyyy"/>
      </label></td>
    </tr>
	<tr>
	  <td align="center">Exam Timing:</td>
	  <td><input type="radio" name="exam_time" id="exam_time" value="Morning(10:00-01:00PM)" <?php if($data['exam_time']=='Morning(10:00-01:00PM)') echo 'checked'; ?>>Morning(10:00-01:00PM)<br />
	         <input type="radio" name="exam_time" id="exam_time" value="Evening(02:00-05:00PM)" <?php if($data['exam_time']=='Evening(02:00-05:00PM)') echo 'checked';?> />Evening(02:00-05:00PM)
	  </td>
	
	  <td align="center">Exam Description:</td>
	  <td><textarea name="exam_desc" cols="60"><?=$data['exam_desc']?></textarea>
	  </td>
	</tr>  
    <tr>
      <td height="28" colspan="4" align="center"><div align="center">
        <label>
        <input name="Submit" type="submit" value="Submit" /> 
        </label>
        <label>
        <input name="reset" type="reset" value="Reset" />
        </label>
      </div></td>
    </tr>
  </table>
  <input type="hidden" value="<?=$data['exam_id']?>" name="exam_id"/>
  <input type="hidden" value="save_exam" name="act" />
</form>
<?php include("includes/footer.php"); ?>