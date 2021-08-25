<html>
   <head>
      <title>Add Marks</title>
      <script src="js/validation.js"></script>
   </head>
   <body>
     <?php
      session_start();
     include("includes/db_connect.php");
     include("includes/functions.php");
     
       if(isset($_REQUEST['st_id']) && isset($_SESSION['login_name'])){
          $sql="SELECT st_id,st_name,st_father,st_course,total_marks,total_theory,total_practical,sub_assignment from student,subject where st_id='$_REQUEST[st_id]'";
          $rs=mysqli_query($con,$sql) or die(mysqli_error($con,$sql));
          $data=mysqli_fetch_assoc($rs);

          if(isset($_REQUEST['sub'])){
            $sql="SELECT *FROM marks WHERE subject='$_REQUEST[sub]' && m_sid='$_REQUEST[st_id]'";
            $rs=mysqli_query($con,$sql) or die(mysqli_error($con));
            $dataf=mysqli_fetch_assoc($rs);
          }
          error_reporting(0);
       }
       else{
           header("location:index.php");
       }
     ?>
      <form action="lib/result.php" name="frm" id="frm" onsubmit="return validMarks(this)">
         <table border="1" cellspacing="0" align="center">
           <tr>
             <th>ID</th>
             <td align="center"><?=$data['st_id']?></td>
           </tr>
           <tr>
             <th>Name</th>
             <td align="center"><?=$data['st_name']?></td>
           </tr>
           <tr>
             <th>Father Name</th>
             <td align="center"><?=$data['st_father']?></td>
           </tr>
           <tr>
             <th>Course</th>
             <td align="center"><?=get_value('course','course_id','course_name',$data['st_course'])?></td>
           </tr>
           <tr>
             <th>Subject</th>
             <td>
                 <select name="sub" id="sub" onchange="getMarks();"  required>
                   <?php 
                   
                         echo get_option_list2('subject','sub_course_id','sub_name',$data['st_course']);
                          ?>
            </td>
                
                 </select> 
           </tr>
           <tr>
             <th>Total Marks</th>
             <td align="center">              
               <div id="total_marks" name="total_marks" ><?=$data['total_marks']?></div>
             </td>
           </tr>
           <tr>
             <th>Theory Marks</th>
             <td>
               <input type="number" value="<?=$dataf['ob_theory']?>" id="ob_theory" name="ob_theory" max="70" min="0" onkeydown="goods='0123456789'; return limitchar(event)"  required/>
               <span id="total_theory" name="total_theory"></span>
             </td>
           </tr>
           <tr>
             <th>Practical Marks</th> 
             <td>
               <input type="number" value="<?=$dataf['ob_practical']?>" id="ob_practical" name="ob_practical" max="20" min="0" onkeydown="goods='0123456789'; return limitchar(event)" required/>
               <span  id="total_practical"  name="total_practical"></span>
             </td>
           </tr>
           <tr>
             <th>Assignment Marks</th> 
             <td>
               <input type="number" value="<?=$dataf['ob_assignment']?>" id="ob_assignment" name="ob_assignment" max="10" min="0" onkeydown="goods='0123456789'; return limitchar(event)" required/> 
               <span id="sub_assignment" name="sub_assignment" ></span>
             </td>
           </tr>
           <tr>
             <th>Description</th>
             <td align="center">
               <textarea id="ob_desc" name="ob_desc" maxlength="100"><?=$dataf['ob_desc']?></textarea> 
            </td>
           </tr>
           <tr>
             <td colspan="2" align="center">
               <input type="submit" value="Submit" />
               <input type="reset" value="Reset" />
             </td>
           </tr>
         </table>
         <input type="hidden" value="saveResult" name="act" id="act" />
         <input type="hidden"  name="st_id" id="st_id" value="<?=$data['st_id']?>" />
         <input type="hidden" name="course" id="course" value="<?=$data['st_course']?>">
      </form>
   </body>
</html>