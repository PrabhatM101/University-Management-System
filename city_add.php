<?php include("includes/header.php");?>
  <div style="padding:50px 100px 0px 100px;">
   <form action="lib/data.php" name="frm" id="frm" method="post">
    <table border="1" height="300" width="400">
       <tr>
         <th colspan="2">Add City</th>
       </tr>
       <tr>
         <th>City Name</th>
         <td><input type="text" name="city_name" id="city_name" required/></td>
       </tr>
       <tr>
         <th>Choose State</th>
         <td>
           <select id="city_state_id" name="city_state_id" required>
           <?=get_option_list('state','state_id','state_name','state_id')?>
           </select>
         </td>
       </tr>      
         <th colspan="2"> 
           <input type="submit" value="submit" /> 
           <input type="hidden" name="act" id="act" value="save_city">    
           <input type="reset" value="reset" />    
         </th>
       </tr>
    </table>
   </form>
  </div>
<?php include("includes/footer.php"); ?>