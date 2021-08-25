<?php
  session_start();
  if(!isset($_SESSION['st_login'])){
    header("location:student_login.php?msg=Login First Then Continue");
  }
  
  include("includes/db_connect.php");
  include("includes/functions.php");
  if($_SESSION['st_login']){
    $sql="select student.st_course,st_bal from student,fees where student.st_id='$_SESSION[st_login]' and fees.st_id='$_SESSION[st_login]'";
    $rs=mysqli_query($con,$sql) or mysqli_error($con);
    $data=mysqli_fetch_assoc($rs);
    if($data){
    if($data['st_bal']>0){
       header("location:fees_details.php?msg=Please submit your complete fees <br> to download your admit card");
     }
     $sql="select *from exam where exam_course='$data[st_course]'";
     $rs=mysqli_query($con,$sql) or die;

     if(!mysqli_fetch_assoc($rs)){ 
      header("location:exam_view.php?st_id=student&msg=No Exam Scheduled Yet");
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
      <title>Admit Card</title>
      <style>
        .container{
            margin:auto;
            height:auto;
            width:800px;
            border:2px solid black;
            background-image:url("images/logo.png");
            background-repeat:no-repeat;
            background-size:500px 400px;
            background-position:center;

        }
       .admit_card{
           font-weight:bolder;
           margin-left:210px;
           font-size:40px;
       } 
      .st_info span{
          font-size:20px;
          padding:8px;
      } 
     .st_info .title{
        display:inline-block;
        width:140px; 
        height:1px;
     } 
      </style>
   </head>
   <body>     
      <div class="container">
         <div class="header">
            <div class="basic">
               <span><img src="images/logo.png" height="50" width="50"/></span>
               <span class="admit_card">ADMIT CARD</span>
               <span style="float:right;margin-top:20px;font-size:18px;">Date:<?=date('d/m/20y',time())?></span>
            </div>
            <div style="margin-top:30px;">
              <span class="st_info">
                <span class="title">Roll No.</span><span>:</span><span><?=$data['st_id']?></span><br>
                <span class="title">Name</span><span>:</span><span><?=$data['st_name']?></span><br>
                <span class="title">Father Name</span><span>:</span><span><?=$data['st_father']?></span><br>
                <span class="title">Gender</span><span>:</span><span><?=$data['st_gen']?></span><br>
                <span class="title">Course</span><span>:</span><span><?=get_value("course","course_id","course_name",$data['st_course'])?></span><br>
                <span class="title">Dob</span><span>:</span><span><?=$data['st_dob']?></span><br>
              </span>
              <span style="position:relative;margin-left:598px;top:-160px;">
                <img src="uploads/<?=$data['st_image']?>" height="120" width="120">
              </span>
              <span style="position:relative;margin-left:598px;top:-160px;display:none;">
                <img src="" height="30" width="120">
              </span>
            </div>
         </div>
         <div class="time_table">
            <table cellspacing="0" border="2" cellpadding="5" width="780px;" align="center" style="position:relative;top:-90px;">
               <tr>
                 <th>SN.</th>
                 <th>Subject</th>
                 <th>Date</th>
                 <th>Time</th>
               </tr>
                 <?php
                  $sql="select *from exam where exam_course='$data[st_course]'";
                  $rs=mysqli_query($con,$sql);
                  $sn=0; 
                  while($data=mysqli_fetch_assoc($rs)){  
                      $sn++;
                 ?>
               <tr>
                 <td><?=$sn?></td>
                 <td><?=get_value("subject","sub_id","sub_name",$data['exam_subject'])?></td>
                 <td><?=$data['exam_date']?></td>
                 <td><?=$data['exam_time']?></td>
               </tr>
               <?php } ?>
            </table>
         </div>
         <div class="instructions" style="position:relative;top:-110px;">
           <h2>Instructions:</h2>
           <ul>
              <li>Reach center before 30 minutes of exam. </li>
              <li>Do not carry any electronics gadjets like phone,laptop,smart watches</li>
              <li>Do not use calculator.</li>
              <li>Please bring any identity card(PAN card,DL) along with Aadhar card.</li>
              <li>Note:This is electronic generated Admit card So Please confirm all details to your college.</li>
           </ul>
           <h3><input type="checkbox" id="t&c">I have red all instructions carefully.</h3>
         </div>
         <div class="action" style="position:relative;top:-90;left:370px;;">
            <button onclick="javascript:printout()"><img src="images/print.ico" height="30" width="30"/></button>
            <button onclick="history.back()"><<<</button>
         </div>
      </div>
   </body>
</html>
<script>
  function printout(){
  t=document.getElementById("t&c");
    if(t.checked){
      window.print();
    }else{
      alert("Please Read All Instrucions Carefully");
      t.focus();
    }
  }
</script>