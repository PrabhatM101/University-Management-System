<?php include("includes/header.php");?>
  <div style="padding:50px 100px 0px 100px;">
   <form action="lib/data.php" name="frm" id="frm" method="post">
    <table border="1" height="300" width="400">
       <tr>
         <th colspan="2">Add Subject</th>
       </tr>
       <tr>
         <th>Subject Name</th>
         <td><input type="text" name="sub_name" id="sub_name" required/></td>
       </tr>
       <tr>
         <th>Choose Course</th>
         <td>
           <select id="sub_course_id" name="sub_course_id" required>
           <?=get_option_list('course','course_id','course_name','course_id')?>
           </select>
         </td>
       </tr>
       <tr>
         <th>Total Marks</th>
         <td><input type="number" name="total_marks" id="total_marks" max="100" min="100"  required/></td>
       </tr>
       <tr>
         <th>Theory Marks</th>
         <td><input type="number" name="total_theory" id="total_theory" max="100" min="70" required/></td>
       </tr>
       <tr>
         <th>Practical Marks</th>
         <td><input type="number" name="total_practical" id="total_practical" max="20" min="20" /></td>
       </tr>
       <tr>
         <th>Assignment Marks</th>
         <td><input type="number" name="sub_assignment" id="sub_assignment" max="10" min="10" /></td>
       </tr>       
       <tr>
         <th colspan="2"> 
           <input type="submit" value="submit" /> 
           <input type="hidden" name="act" id="act" value="save_subject">    
           <input type="reset" value="reset" />    
         </th>
       </tr>
    </table>
   </form>
  </div>
<?php include("includes/footer.php"); ?>