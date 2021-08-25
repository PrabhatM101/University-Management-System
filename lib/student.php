<?php include("../includes/db_connect.php");
   if($_REQUEST['act'])
     $_REQUEST['act']();
 
   //Function For Save  Student Record.......
	    function save_student(){		
		  global $con;
		  $R=$_REQUEST;
			  if($_FILES['st_image']['name']){
			       $st_image=$_FILES['st_image']['name'];
				   $st_img_arr=explode(".",$st_image);
				   $st_image=$st_img_arr[0].time().".".$st_img_arr[1];
				   move_uploaded_file($_FILES['st_image']['tmp_name'],"../uploads/".$st_image);
			     }else{
				        $st_image=$R['st_image'];
				     }
					$st_qual=implode(",",$R['st_qual']);
			  if($_REQUEST['st_id']){
			       $sql="UPDATE `student` SET `st_name` = '$_REQUEST[st_name]', `st_father` = '$_REQUEST[st_father]', `st_phone` = '$_REQUEST[st_phone]', `st_email` = '$_REQUEST[st_email]', `st_gen` = '$_REQUEST[st_gen]', `st_qual` = '$st_qual', `st_address1` = '$_REQUEST[st_address1]', `st_address2` = '$_REQUEST[st_address2]', `st_city` = '$_REQUEST[st_city]', `st_state` = '$_REQUEST[st_state]', `st_country` = '$_REQUEST[st_country]', `st_pincode` = '$_REQUEST[st_pincode]', `st_dob` = '$_REQUEST[st_dob]', `st_doa` = '$_REQUEST[st_doa]', `st_course` = '$_REQUEST[st_course]', `st_image` ='$st_image' WHERE `st_id` =$_REQUEST[st_id]";
				   $msg="Record Has Been Updated!!!";
			     }else{		 
			 $sql="INSERT INTO `student` (`st_name`, `st_father`, `st_phone`, `st_email`, `st_gen`, `st_qual`, `st_address1`, `st_address2`, `st_city`, `st_state`, `st_country`, `st_pincode`, `st_dob`, `st_doa`, `st_course`, `st_image`) VALUES ('$R[st_name]', '$R[st_father]', '$R[st_phone]', '$R[st_email]', '$R[st_gen]', '$st_qual', '$R[st_address1]', '$R[st_address2]', '$R[st_city]', '$R[st_state]', '$R[st_country]', '$R[st_pincode]', '$R[st_dob]', '$R[st_doa]', '$R[st_course]', '$st_image')";
			           $msg="Record Is Saved!!!";
					 }
		    $rs=mysqli_query($con,$sql) or die(mysqli_error($con));
			   if($rs){
				   header("location:../student_view.php?msg=$msg"); 
				}else{
					header("location:../admin_login.php?msg=Something went wrong!!!"); 
				}
			    
		   }
	
	//Function For Delete Student Record.......	   
		   function delete_student(){
		      global $con;
			    $sql="select st_image from student where st_id='$_REQUEST[st_id]'";
				$rs=mysqli_query($con,$sql) or die(mysqli_error());
				  $data=mysqli_fetch_assoc($rs);
				    if($data['st_image'])
					  unlink("../uploads/".$data['st_image']);
					  
		         $sql="delete from student where st_id='$_REQUEST[st_id]'";
				 $rs=mysqli_query($con,$sql) or die(mysqli_error());
				    if($rs)
					   header("location:../student_view.php?msg=Record is Deleted!!");
		      }
 // Function For Delete All Record.......
      function multiple_student_delete(){
	       $st_multi_id=$_REQUEST['st_multi_id'];
		      if($st_multi_id==0)
			    header("location:../student_view.php?msg=Plz Select Any Record To Continue!!");
		        foreach($st_multi_id as $st_id){
						global $con;
			            $sql="select st_image from student where st_id='$st_id'";
				        $rs=mysqli_query($con,$sql) or die(mysqli_error());
				        $data=mysqli_fetch_assoc($rs);
				           if($data['st_image'])
					           unlink("../uploads/".$data['st_image']);
					  
		                $sql="delete from student where st_id='$st_id'";
				        $rs=mysqli_query($con,$sql) or die(mysqli_error());					
					   }
				      if($rs)
					   header("location:../student_view.php?msg=Selected Records Are Deleted!!");
		 }
	
		 //Function to save User Record
		 function save_user(){
			 session_start();
			 $S=$_SESSION;
			 
			 global $con;
			 $user_pass=mt_rand(111,999).$S['user_name'].$S['user_dob'];
			 $_SESSION['user_pass']=$user_pass;			 

			  if(isset($_FILES['user_image'])) {
					$user_image=$_FILES['user_image']['name'];
					$user_img_arr=explode(".",$user_image);
					$user_image=$user_img_arr[0].time().".".$user_img_arr[1];
					move_uploaded_file($_FILES['user_image']['tmp_name'],"../uploads/".$user_image);
				  }else{
						 $user_image="user.png";
					}	
		     if(isset($_SESSION['user_login'])){		 								  
			    $sql="UPDATE user SET user_name='$S[user_name]',user_deg='$S[user_deg]',user_phone='$S[user_phone]',user_email='$S[user_email]',user_gen='$S[user_gen]',user_qual='$S[user_qual]',user_exp='$S[user_exp]',user_interest='$S[user_interest]',user_dob='$S[user_dob]',user_auth_name='$S[user_auth_name]',user_pass='$user_pass',user_image='$user_image' WHERE user_auth_name='$_SESSION[user_auth_name]'";	  
				$msg="Record Updated!!!"; 
			}else{					 	 
				$sql="INSERT INTO user(user_name,user_deg,user_phone,user_email,user_gen,user_qual,user_exp,user_interest,user_dob,user_auth_name,user_pass,user_image) VALUES('$S[user_name]','$S[user_deg]','$S[user_phone]','$S[user_email]','$S[user_gen]','$S[user_qual]','$S[user_exp]','$S[user_interest]','$S[user_dob]','$S[user_auth_name]','$user_pass','$user_image')"; 
			    $_SESSION['user_login']=$_SESSION['user_auth_name'];
				$msg="Record Saved!!!";
			}
				$rs=mysqli_query($con,$sql) or die(mysqli_error($sql));
			   if($rs){
				header("location:../user_details.php?msg=$msg");   
			     }
			
		 }

	//Function For User Authentication......................
	   function user_auth(){
		   global $con;
		   $sql="SELECT *FROM user WHERE user_auth_name='$_REQUEST[user]'";
		   $rs=mysqli_query($con,$sql);
		     if(mysqli_fetch_assoc($rs)){
				 echo "Username is Already Taken";
			 }
	   }

	   // Maintain Session..................
	   function next_page(){
		   session_start();
		   $R=$_REQUEST;
		  $_SESSION['user_name']=$R['user_name'];
		  $_SESSION['user_deg']=$R['user_deg'];
		  $_SESSION['user_phone']=$R['user_phone'];
		  $_SESSION['user_email']=$R['user_email'];
		  $_SESSION['user_gen']=$R['user_gen'];
		  $_SESSION['user_qual']=$R['user_qual'];
		  $_SESSION['user_exp']=$R['user_exp'];
		  $_SESSION['user_interest']=$R['user_interest'];
		  $_SESSION['user_dob']=$R['user_dob'];
		  if($R['user_auth_name']=="")
		    $_SESSION['user_auth_name']=$_SESSION['user_login'];
		  else
		     $_SESSION['user_auth_name']=$R['user_auth_name'];
		 header("location:../next_page.php");
	   }

	   // function for get Marks
	function getMarks(){
	   error_reporting(0);
		global $con;	
		$sql="SELECT total_marks,total_theory,total_practical,sub_assignment FROM subject WHERE sub_name='$_REQUEST[sub]'";
		$rs=mysqli_query($con,$sql) or die;
		$data=mysqli_fetch_assoc($rs);
          echo "$data[total_marks]/$data[total_theory]/$data[total_practical]/$data[sub_assignment]";
	
	}
// Function For Approve User
  function approve_user(){
	  global $con;
     if($_REQUEST['status']==1){
        $sql="UPDATE user set user_status=0 Where user_id='$_REQUEST[user]'";
	    $rs=mysqli_query($con,$sql);
	    if($rs)
		   echo "Waiting For Approval" ;
	 }else if($_REQUEST['status']==0){
        $sql="UPDATE user set user_status=1 Where user_id='$_REQUEST[user]'";
	    $rs=mysqli_query($con,$sql);
	    if($rs){
		   echo "Approved" ;
         }	 
	 }	
  }
 
?>