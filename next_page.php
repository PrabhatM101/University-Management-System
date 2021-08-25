<?php include("includes/header3.php"); ?>

<form action="lib/student.php" method="post" enctype="multipart/form-data" name="frm" id="frm">
<br><span align="center">Select Image: </span></td>
        <label>
            <input type="file" name="user_image" id="user_image" required/>
        </lable><br>
        <label>
            <input name="Submit" type="submit" value="Submit" /> 
        </label>
        <label>
            <input name="reset" type="reset" value="Reset" />
        </label>
        <input type="hidden" value="img" name="img" />
         <input type="hidden" value="save_user" name="act" />
</form>
<form action="lib/student.php" method="post" name="frm" id="frm">
        <label>
           <input name="Submit" type="submit" value="Skip>>" style="background:red;padding:10px;" /> 
        </label>
 
  <input type="hidden" value="save_user" name="act" />
</form>
<?php include("includes/footer.php");?>