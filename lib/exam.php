<?php include("../includes/db_connect.php");
  include("../includes/functions.php");
   if($_REQUEST['act'])
     $_REQUEST['act']();
   // Functio For get Subject.......
     function get_subject(){ 
	      global $con;
		  $sql="SELECT *FROM subject WHERE sub_course_id='$_REQUEST[course_id]'";
		   $rs=mysqli_query($con,$sql) or die(mysqli_error($con));
		    $opt=''; 
			 while($data=mysqli_fetch_assoc($rs)){
			       $opt.="<option value=$data[sub_id]>$data[sub_name]</option>";
			    }
				  echo $opt;
	    }
   //Function For Save  Student Record.......
	    function save_exam(){
		  global $con;
		  $R=$_REQUEST;
			  if($_REQUEST['exam_id']){
			       $sql="UPDATE `exam` SET `exam_title` = '$R[exam_title]', `exam_course` = '$R[exam_course]', `exam_subject` = '$R[exam_subject]', `exam_date` = '$R[exam_date]', `exam_time` = '$R[exam_time]', `exam_desc` = '$R[exam_desc]' WHERE exam_id=$R[exam_id]";
				    $msg="Exam Record Has Been Updated!!!";
			     }else{		 
			 $sql="INSERT INTO `exam` (`exam_title`, `exam_course`, `exam_subject`, `exam_date`, `exam_time`, `exam_desc`) VALUES ('$R[exam_title]', '$R[exam_course]', '$R[exam_subject]', '$R[exam_date]', '$R[exam_time]', '$R[exam_desc]');";
			           $msg="Exam Record Is Saved!!!";
					 }
		    $rs=mysqli_query($con,$sql) or die(mysqli_error($con));
			   if($rs)
			     header("location:../exam_view.php?msg=$msg");
		   }
	
	//Function For Delete Student Record.......	   
		   function delete_exam(){
		      global $con;
		         $sql="delete from exam where exam_id='$_REQUEST[exam_id]'";
				 $rs=mysqli_query($con,$sql) or die(mysqli_error());
				    if($rs)
					   header("location:../exam_view.php?msg=Record is Deleted!!");
		      }
 // Function For Delete All Record.......
      function multiple_exam_delete(){
	       $exam_multi_id=$_REQUEST['exam_multi_id'];
		      if($exam_multi_id==0)
			    header("location:../exam_view.php?msg=Plz Select Any Record To Continue!!");
		        foreach($exam_multi_id as $exam_id){
						global $con;
		                $sql="delete from exam where exam_id='$exam_id'";
				        $rs=mysqli_query($con,$sql) or die(mysqli_error());					
					   }
				      if($rs)
					   header("location:../exam_view.php?msg=Selected Records Are Deleted!!");
	     }
  ?>