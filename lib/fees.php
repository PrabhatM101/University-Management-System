<?php include("../includes/db_connect.php");
   if($_REQUEST['act'])
     $_REQUEST['act']();
 
   //Function For Save  Student Record.......
	    function save_fees(){
		  global $con;
		  $R=$_REQUEST;
			  if($_REQUEST['f_id']){
			     $sql="SELECT st_paid,st_date,st_desc FROM fees where st_id=$_REQUEST[st_id]";
				 $rs=mysqli_query($con,$sql) or die(mysqli_query());
				 $data=mysqli_fetch_assoc($rs);
				 
				 $st_paid=$data['st_paid'].','.$_REQUEST['st_paid'];
				 $st_date=$data['st_date'].','.date('Y/m/d');
				if($data['st_desc']!='') 
				   $st_desc=$data['st_desc'].','.$_REQUEST['st_desc'];
				else
				   $st_desc= $_REQUEST['st_desc'];
				   
			       $sql="UPDATE fees SET st_id=$_REQUEST[st_id],st_course='$_REQUEST[st_course]',st_total_fees='$_REQUEST[st_total_fees]',st_paid='$st_paid',st_bal='$_REQUEST[st_bal]',st_date='$st_date',st_desc='$st_desc' where st_id=$_REQUEST[st_id]";
				    $msg="Fees Has Been Updated!!!";
			     }else{		 
			 $sql="INSERT INTO `fees` (`st_id`, `st_course`, `st_total_fees`, `st_paid`, `st_bal`, `st_date`, `st_desc`) VALUES ('$R[st_id]', '$R[st_course]', '$R[st_total_fees]', '$R[st_paid]', '$R[st_bal]', CURRENT_DATE, '$R[st_desc]')";
			           $msg="Fees paid!!!";
					 }
		    $rs=mysqli_query($con,$sql) or die(mysqli_error($con));
				  if($rs)
					header("location:../fees_view.php?msg=$msg");
					exit(0);
			
		   }
	
//    Function For Delete Student Record.......	   
		   function delete_student(){
		      global $con;
		         $sql="delete from fees where st_id='$_REQUEST[st_id]'";
				 $rs=mysqli_query($con,$sql) or die(mysqli_error());
				    if($rs)
					   header("location:../fees_view.php?msg=Record is Deleted!!");
		      }
 // Function For Delete All Record.......
      function multiple_student_delete(){
	       $st_multi_id=$_REQUEST['st_multi_id'];
		      if($st_multi_id==0)
			    header("location:../fees_view.php?msg=Plz Select Any Record To Continue!!");
		        foreach($st_multi_id as $st_id){
						global $con;
		                $sql="delete from fees where st_id='$st_id'";
				        $rs=mysqli_query($con,$sql) or die(mysqli_error());					
					   }
				      if($rs)
					   header("location:../fees_view.php?msg=Selected Records Are Deleted!!");
	     }
  ?>