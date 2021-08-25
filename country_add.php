<?php include("includes/header.php");?>
  <div style="padding:50px 100px 0px 100px;">
   <form action="lib/data.php" name="frm" id="frm" method="post">
    <table border="1" height="300" width="400">
       <tr>
         <th colspan="2">Add Country</th>
       </tr>
       <tr>
         <th>Country Name</th>
         <td><input type="text" name="country_name" id="country_name" required/></td>
       </tr>
            
         <th colspan="2"> 
           <input type="submit" value="submit" /> 
           <input type="hidden" name="act" id="act" value="save_country">    
           <input type="reset" value="reset" />    
         </th>
       </tr>
    </table>
   </form>
  </div>
<?php include("includes/footer.php"); ?>