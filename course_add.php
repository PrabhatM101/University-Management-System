<?php include("includes/header.php"); ?>
  <div style="padding:50px 100px 0px 100px;">
   <form action="lib/data.php" name="frm" id="frm" method="post">
    <table border="1" height="300" width="400">
       <tr>
         <th colspan="2">Add Course</th>
       </tr>
       <tr>
         <th>Course Name</th>
         <td><input type="text" name="course_name" id="course_name" required/></td>
       </tr>
       <tr>
         <th>Course Fees</th>
         <td><input type="number" name="course_total_fees" id="course_total_fees" required/></td>
       </tr>
       <tr>
         <th>Eligibility</th>
         <td><input type="text" name="eligibility" id="eligibility"  required/></td>
       </tr>
       <tr>
         <th>Duration</th>
         <td><input type="number" name="duration" id="duration" max="9"  required/></td>
       </tr>
       <tr>
         <th>Description</th>
         <td><input type="text" name="description" id="description" maxlength="255" required/></td>
       </tr>
       <tr>
         <th colspan="2"> 
           <input type="submit" value="submit" /> 
           <input type="hidden" name="act" id="act" value="save_course">    
           <input type="reset" value="reset" />    
         </th>
       </tr>
    </table>
   </form>
  </div>
<?php include("includes/footer.php"); ?>