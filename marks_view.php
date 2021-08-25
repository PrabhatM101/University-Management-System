<?php include('includes/header.php'); ?>
<div style="border:4px solid black;margin:30px;">
<form action="lib/result.php" name="marks_view" id="marks_view">
<?php
      error_reporting(0);
	     $sql="SELECT DISTINCT student.st_id,st_name,st_father,st_gen,student.st_course,st_image FROM fees,student,exam WHERE student.st_id=fees.st_id && fees.st_bal=0 && student.st_course=exam.exam_course";
		 $rs=mysqli_query($con,$sql) or die(mysqli_error());
		 while($data=mysqli_fetch_assoc($rs)){
    ?>
 <div style="padding:20px;border:3px solid teal;margin:15px;">
 
 <table border="1">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Father Name</th>
      <th>Gender</th>
      <th>Course</th>
      <th>Image</th>
      
    </tr>
   
    <tr>
      <td><?=$data['st_id']?></td>
      <td><?=$data['st_name']?></td>
      <td><?=$data['st_father']?></td>
      <td><?=$data['st_gen']?></td>
      <td><?=get_value('course','course_id','course_name',$data['st_course'])?></td>
      <td><img src="uploads/<?=$data['st_image']?>" height="30" width="40"></td>
      
    </tr>
</table>
    <table border="1">
      <tr>
        <th>SN.</th>
        <th>Subject</th>
        <th>Total</th>
        <th>Theory</th>
        <th>Practical</th>
        <th>Assignment</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
      <?php 
        $sqlf="SELECT *FROM marks where m_sid='$data[st_id]'";
        $rsf=mysqli_query($con,$sqlf);
        while($dataf=mysqli_fetch_assoc($rsf)){
            $sn++;
      ?>
      <tr>
        <td><?=$sn?></td>
        <td ><?=$dataf['subject']?></td>
        <td><?=$dataf['total_marks']?></td>
        <td><?=$dataf['ob_theory']?></td>
        <td><?php if($dataf['ob_practical']!=''){echo $dataf['ob_practical'];}else{echo "-";}?></td>
        <td><?php if($dataf['ob_assignment']!=''){echo $dataf['ob_assignment'];}else{echo "-";}?></td>
        <td><?php if($dataf['ob_desc']!=''){echo $dataf['ob_desc'];}else{echo "-";}?></td>
        <td>
        <a href="marks_add.php?st_id=<?=$data['st_id']?>&sub=<?=$dataf['subject']?>" rel="facebox" ><img src="images/edit.ico" height="20" width="20"/></a>||       
        <a href="javascript:delete_result(<?=$dataf['id']?>)"><img src="images/delete.ico" height="20" width="20"/></a>
       
    </td>
      </tr>
        
    <?php } echo"</table></div><hr/>"; }?>
    <input type="hidden" name="act" id="act">
           <input type="hidden" name="id" id="id">
           
        </form>
</div>     
<?php include("includes/footer.php"); ?>