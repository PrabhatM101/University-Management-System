<?php include("../includes/db_connect.php");
   if($_REQUEST['act'])
     $_REQUEST['act']();
    global $con;
     function saveResult(){
        global $con;
        $sql="SELECT subject from marks WHERE m_sid='$_REQUEST[st_id]'";
        $rs=mysqli_query($con,$sql) or die(mysqli_error($con));
        while($data=mysqli_fetch_assoc($rs)){
         if($data['subject']==$_REQUEST['sub']){ 
           $f=1;
           break;
         }
        }
        if($f==1)     
          $sql="UPDATE marks set ob_theory='$_REQUEST[ob_theory]',ob_practical='$_REQUEST[ob_practical]',ob_assignment='$_REQUEST[ob_assignment]',ob_desc='$_REQUEST[ob_desc]' WHERE m_sid='$_REQUEST[st_id]' && subject='$_REQUEST[sub]'";
        else
          $sql="INSERT INTO marks  (m_sid,course,subject,ob_theory,ob_practical,ob_assignment,ob_desc) VALUES ('$_REQUEST[st_id]','$_REQUEST[course]','$_REQUEST[sub]','$_REQUEST[ob_theory]','$_REQUEST[ob_practical]','$_REQUEST[ob_assignment]','$_REQUEST[ob_desc]')";
       
        $rs=mysqli_query($con,$sql) or die(mysqli_error($con));
          if($rs){
            
              header("location:../marks_view.php?msg=Marks Added Successfully");
          }
     }

  // function for delete result
  function delete_result(){
    global $con;
    $sql="delete from marks where id='$_REQUEST[id]'";
    $rs=mysqli_query($con,$sql) or die(mysqli_error($con));
    if($rs){ 
      header("location:../marks_view.php?msg=Result Deleted Successfully");
    }
  }
