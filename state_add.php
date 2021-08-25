<?php include("includes/header.php");?>
  <div style="padding:50px 100px 0px 100px;">
   <form action="lib/data.php" name="frm" id="frm" method="post">
    <table border="1" height="300" width="400">
       <tr>
         <th colspan="2">Add State</th>
       </tr>
       <tr>
         <th>State Name</th>
         <td><input type="text" name="state_name" id="state_name" required/></td>
       </tr>
       <tr>
         <th>Choose Country</th>
         <td>
           <select id="state_country_id" name="state_country_id" required>
           <?=get_option_list('country','country_id','country_name','country_id')?>
           </select>
         </td>
       </tr>      
         <th colspan="2"> 
           <input type="submit" value="submit" /> 
           <input type="hidden" name="act" id="act" value="save_state">    
           <input type="reset" value="reset" />    
         </th>
       </tr>
    </table>
   </form>
  </div>
<?php include("includes/footer.php"); ?>