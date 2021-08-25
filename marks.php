<?php include('includes/header.php'); ?>

 <table border="1">
    <tr>
      <th>Name</th>
      <th>Father Name</th>
      <th>Gender</th>
      <th>Course</th>
      <th>Action</th>
    </tr>
    <?php
      error_reporting(0);
	     $sql="SELECT DISTINCT student.st_id,st_name,st_father,st_gen,student.st_course FROM fees,student,exam WHERE student.st_id=fees.st_id && fees.st_bal=0 && student.st_course=exam.exam_course";
		 $rs=mysqli_query($con,$sql) or die(mysqli_error());
		 while($data=mysqli_fetch_assoc($rs)){
    ?>
    <tr>
      <td><?=$data['st_name']?></td>
      <td><?=$data['st_father']?></td>
      <td><?=$data['st_gen']?></td>
      <td><?=get_value('course','course_id','course_name',$data['st_course'])?></td>
      <td><a href="marks_add.php?st_id=<?=$data['st_id']?>" rel="facebox">Add Marks</a></td>
    </tr>
    <?php } ?>
  </table>

<?php include("includes/footer.php"); ?>