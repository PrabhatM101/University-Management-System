<?php
  session_start();
  if(!isset($_SESSION['st_login'])){
    header("location:student_login.php?msg=Login First Then Continue");
  }
  
  include("includes/db_connect.php");
  include("includes/functions.php");
  if($_SESSION['st_login']){
    $sql="select student.st_course,student.st_id,st_bal from student,fees where student.st_id='$_SESSION[st_login]' and fees.st_id='$_SESSION[st_login]'";
    $rs=mysqli_query($con,$sql) or mysqli_error($con);
    $data=mysqli_fetch_assoc($rs);
    if($data){
    if($data['st_bal']>0){
       header("location:fees_details.php?msg=Please submit your complete fees <br> to download your admit card");
     }
     $sql="select *from exam,marks where exam_course='$data[st_course]' and m_sid='$data[st_id]'";
     $rs=mysqli_query($con,$sql) or die;

     if(!mysqli_fetch_assoc($rs)){ 
      header("location:exam_view.php?st_id=student&msg=Result Not Declared Yet");
     }
    }else 
       {
        header("location:fees_details.php?msg=Please submit your complete fees <br> to download your admit card");
       }
      $sql="select *from student where st_id='$_SESSION[st_login]'";
      $rs=mysqli_query($con,$sql);
      $data=mysqli_fetch_assoc($rs);    
    }
?>
<html>
   <head>
      <title>Result</title>
      <style>
        .container{
            margin:auto;
            height:auto;
            width:800px;
            border:10px double black;
          }
      
      </style>
   </head>
   <body>     
      <div class="container" >
        <div  style="font-size:32px;margin:5px;" align="center">Result</div>
     <div style="margin-top:30px;">
         <div class="st_details">
            <table cellspacing="0" border="2" cellpadding="0" width="380px;" height="100" align="center">
               <tr>
                 <th>ID</th>
                 <td><?=$data['st_id']?></td>
                 <td rowspan="6"><img src="uploads/<?=$data['st_image']?>" width="100%" height="100%" /></td>
               </tr>
               <tr>
                 <th>Name</th>
                 <td><?=$data['st_name']?></td>
               </tr>
               <tr>
                 <th>Father</th>
                 <td><?=$data['st_father']?></td>
               </tr>
               <tr>
                 <th>Gender</th>
                 <td><?=$data['st_gen']?></td>
               </tr> 
               <tr>
                 <th>Course</th>
                 <td><?=get_value('course','course_id','course_name',$data['st_course'])?></td>
               </tr> 
               <tr>
                 <th>Address</th>
                 <td><?=$data['st_address1']?></td>
               </tr>
             
            </table>
            <table border="1" align="center" cellspacing="0" style="margin-top:50px;">
              <tr>
                  <th rowspan="2" >SN.</th>
                  <th rowspan="2">Subject</th>
                  <th rowspan="2" colspan="2">Maximum Mark</th>
                  <th colspan="2">Theory</th>
                  <th colspan="2">Practical</th>
                  <th colspan="2">Assignment</th>
                  <th rowspan="2" colspan="2">Obtained Total</th>
              </tr>
              <tr>
              <th>Obtain</th>
              <th>Max</th>
              <th>Obtain</th>
              <th>Max</th>
              <th>Obtain</th>
              <th>Max</th>
              </tr>
              <?php
                  $total_obtain=0;
                  $grand_total=0;
                  $sub=get_value('subject','sub_course_id','sub_name',$data['st_course']);
                  $sql_r="select *from marks where m_sid='$_SESSION[st_login]'";
                  $rs_r=mysqli_query($con,$sql_r) or die(mysqli_error($sql_r));
                  $sn=0; 
                  while($data_r=mysqli_fetch_assoc($rs_r)){  
                      $sn++;
                 ?>
              <tr align="center">
                <td><?=$sn?></td>
                <td><?=$data_r['subject']?></td> 
                <td colspan="2"><?php $grand_total+=(int)(get_value('subject','sub_course_id','total_marks',$data['st_course'])); echo get_value('subject','sub_course_id','total_marks',$data['st_course']); ?></td> 
                <td><?=$data_r['ob_theory']?></td> 
                <td><?=get_value('subject','sub_course_id','total_theory',$data['st_course']); ?></td> 
                <td><?php if($data_r['ob_practical']){ echo $data_r['ob_practical']; }else { echo '-'; }?></td> 
                <td><?=get_value('subject','sub_course_id','total_practical',$data['st_course']);?></td> 
                <td><?php if($data_r['ob_assignment']){ echo $data_r['ob_assignment']; }else { echo '-'; }?></td> 
                <td><?=get_value('subject','sub_course_id','sub_assignment',$data['st_course']);?></td> 
                <td><?php $ob_total=(int)$data_r['ob_theory']+(int)$data_r['ob_practical']+(int)$data_r['ob_assignment'];
                   $total_obtain+=$ob_total;
                   echo $ob_total;?></td>        
              </tr>
            
              <?php } ?>
              <tr>
                <th colspan="10" align="left">Percentage : <?php $p=round(($total_obtain)/($sn),2);echo $p."%"?></th>
                <th rowspan="2">Complete : <?=$total_obtain."/".$grand_total?></th>
              </tr>
              <tr>
                <th colspan="10" align="left">
                  Grade:
                   <?php
                  
                     if($p>=95)
                       echo "<span style=color:green;>A+</span>";
                     else if($p>=80)
                       echo "<span style=color:blue;>A</span>";
                     else if($p>=60)
                       echo "<span style=color:aqua;>B</span>";
                     else if($p>=45)
                       echo "<span style=color:teal;>C</span>";
                     else if($p>=33)
                       echo "<span style=color:maroon;>D</span>";
                     else
                       echo "<span style=color:red;>Fail</span>";  
                   ?>
                </th>
              </tr>
            </table>
       
         </div>
         <div class="note" >
           <h2>Note:</h2>
           <fieldset ><legend>Gradding Method:</legend>
           <ul>
              
                 <li>A+:Percentage>=95</li>
                 <li>A:Percentage>=80</li>
                 <li>B:Percentage>=60</li>
                 <li>C:Percentage>=45</li>
                 <li>D:Percentage>=33</li>
                 <li>Fail:Percentage<=33</li> 
                 
           </ul>  
           </fieldset>       
           </div>
         <div class="action" style="" align="center">
            <button onclick="window.print()"><img src="images/print.ico" height="30" width="30"/></button>
            <button onclick="history.back()"><<<</button>
         </div>
      </div>
        </div>
   </body>
</html>
