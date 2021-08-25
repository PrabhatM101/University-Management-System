<?php include("../includes/db_connect.php");
 include("../includes/functions.php");
  session_start();
   if($_REQUEST['act'])
     $_REQUEST['act']();
 
   //Function For Valid Login.......
	    function check_login(){
		  global $con;
		  $R=$_REQUEST;
		  if($R['login_type']=='admin'){	
		      $sql="SELECT *FROM login WHERE login_name='$R[login_name]' and login_pass='$R[login_pass]'"; 
		      $rs=mysqli_query($con,$sql) or die(mysqli_error($con));
			     if(mysqli_num_rows($rs)){
			        $_SESSION['login_name']=$R['login_name'];
				    $_SESSION['login_pass']=$R['login_pass'];
				    header("location:../student_view.php?msg=Login SuccessFull!!");
				  }
			     else{
			        header("location:../admin_login.php?msg=Please Check Your Username Or Password!!!"); 
				 }
		    }else if($R['login_type']=='faculty'){
				$sql="select user_auth_name,user_pass from user where user_auth_name='$_REQUEST[login_name]' and user_pass='$_REQUEST[login_pass]'";
			    $rs=mysqli_query($con,$sql) or die(mysqli_error($con));
			    if(mysqli_num_rows($rs)){
				    $_SESSION['user_login']= $_REQUEST['login_name'];
				    $_SESSION['user_pass']= $_REQUEST['login_pass'];
				    header("location:../user_details.php?st_id=$_REQUEST[login_name]");
		         }else{
			        header("location:../admin_login.php?msg=Please Check Your Username Or Password");
				}
			  }  
		}
	
	//Function For Logout.......	   
		   function logout(){
		         if(isset($_SESSION['login_name']) && !isset($_REQUEST['l'])){
		            $_SESSION['login_name']='';
					$_SESSION['login_pass']='';
				    session_destroy();
			        header("location:../index.php?msg=Logout SuccessFully!!");
				  }else if(isset($_SESSION['st_login']) && isset($_REQUEST['l'])){
                    $_SESSION['st_login']='';
					$_SESSION['st_pass']='';
				    session_destroy();
			        header("location:../student_login.php?msg=Logout SuccessFully!!");
				  }
				  else if(isset($_SESSION['user_login'])){
                    $_SESSION['user_login']="";
					$_SESSION['user_pass']="";
				    session_destroy();
			        header("location:../index.php?msg=Logout SuccessFully!!");
				    }else{
					 session_destroy();
				  }
		      }
  			  
 // Function For Recover Password.......
      function recover_pass(){
	       global $con;
		   $sql="SELECT login_ques,login_ans FROM login WHERE login_name='$_REQUEST[login_name]'";
		   $rs=mysqli_query($con,$sql);
		   $data=mysqli_fetch_assoc($rs);
		    $sec_ques=get_value('security_ques','sec_id','sec_ques',$_REQUEST['sec_ques']);
		     if($data['login_ques']==$sec_ques && $data['login_ans']==$_REQUEST['sec_ans']){
			       $_SESSION['login_name']=$_REQUEST['login_name'];
				   header("location:../change_pass.php");
			    }else
				   header("location:../forget_pass.php?msg=Plz Correct Your Answers");
		 }  
	// Function For Change Password...........
	   function change_pass(){
	        global $con;
	        $sql="UPDATE login SET login_pass='$_REQUEST[new_pass]',login_cpass='$_REQUEST[c_pass]'";
	        $con=mysqli_query($con,$sql) or die(mysqli_error($con));
			 $_SESSION['login_pass']=$_REQUEST['new_pass'];
			header("location:../student_view.php?msg=Login SuccessFull!!!");
		  }	 
		  
	 //Function For Student Login............
	    function student_login(){
			global $con;
			$sql="select st_id,st_dob from student where st_id='$_REQUEST[login_name]' and st_dob='$_REQUEST[login_pass]'";
			$rs=mysqli_query($con,$sql) or die(mysqli_error($con));
			if(mysqli_num_rows($rs)){
				$_SESSION['st_login']= $_REQUEST['login_name'];
				$_SESSION['st_pass']= $_REQUEST['login_pass'];
				header("location:../student_zone.php?st_id=$_REQUEST[login_name]");
			}else
			    header("location:../student_login.php?msg=Please Check Your Username & Password");

		}
		
  ?>