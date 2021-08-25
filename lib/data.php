<?php include("../includes/db_connect.php");
  include("../includes/functions.php");
   if($_REQUEST['act'])
     $_REQUEST['act']();
  
     // Function For Add Course 
     function save_course(){
       global $con;
       $sql="INSERT INTO course(course_name,course_total_fees,eligibility,duration,description) VALUES('$_REQUEST[course_name]','$_REQUEST[course_total_fees]','$_REQUEST[eligibility]','$_REQUEST[duration]','$_REQUEST[description]')";    
       $rs=mysqli_query($con,$sql);
         if($rs){
             header("location:../data_view.php?msg=Course Added Successfully");
         }    
     }
// Function For Add Subject...................
     function save_subject(){
       global $con;
        $sql="INSERT INTO subject(sub_name,sub_course_id,total_marks,total_practical,total_theory,sub_assignment) VALUES('$_REQUEST[sub_name]','$_REQUEST[sub_course_id]','$_REQUEST[total_marks]','$_REQUEST[total_practical]','$_REQUEST[total_theory]','$_REQUEST[sub_assignment]')";    
        $rs=mysqli_query($con,$sql);
          if($rs){
             header("location:../data_view.php?msg=Subject Added Successfully");
           }   
     }
// Function For Add City
     function save_city(){
       global $con;
        $sql="INSERT INTO city(city_name,city_state_id) VALUES('$_REQUEST[city_name]','$_REQUEST[city_state_id]')";    
        $rs=mysqli_query($con,$sql);
          if($rs){
             header("location:../data_view.php?msg=City Added Successfully");
           }   
     }  

     // Function For Add State

     function save_state(){
      global $con;
       $sql="INSERT INTO state(state_name,state_country_id) VALUES('$_REQUEST[state_name]','$_REQUEST[state_country_id]')";    
       $rs=mysqli_query($con,$sql);
         if($rs){
            header("location:../data_view.php?msg=State Added Successfully");
          }   
    } 
    
     // Function For Add Country

     function save_country(){
      global $con;
       $sql="INSERT INTO country(country_name) VALUES('$_REQUEST[country_name]')";    
       $rs=mysqli_query($con,$sql);
         if($rs){
            header("location:../data_view.php?msg=Country Added Successfully");
          }   
    }   

     // Function For Add Country

     function save_qual(){
      global $con;
       $sql="INSERT INTO qualification(qual_name) VALUES('$_REQUEST[qual_name]')";    
       $rs=mysqli_query($con,$sql);
         if($rs){
            header("location:../data_view.php?msg=Qualification Added Successfully");
          }   
    }   
 
    // Function For Get State.................
      
     function get_state(){
       if($_REQUEST['city']!=0)
         echo get_option_list("state","state_id","state_name",$_REQUEST['city']);
     }
// Function For Get State.................
      
     function get_country(){
       if($_REQUEST['state']!=0)
       echo get_option_list("country","country_id","country_name",$_REQUEST['state']);
      }
  ?>