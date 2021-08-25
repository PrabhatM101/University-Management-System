<?php include("includes/header3.php");
  error_reporting(0);
  if(isset($_REQUEST['msg'])){
    $sql="SELECT *FROM user WHERE user_auth_name='$_REQUEST[msg]'";
    $rs=mysqli_query($con,$sql) or die;
    $data=mysqli_fetch_assoc($rs);
  }
  
?>
<form action="lib/student.php" method="post" enctype="multipart/form-data" name="frm" id="frm" onsubmit="return valid_user()">
  <table width="1274" height="361" border="1" cellspacing="0">
    <tr>
      <td colspan="4">
	      <div align="center" style="font-size:30px;"><font color="#0000FF" >
	        User Registration Form
        </font> </div></td>
    </tr>
    <tr>
      <td width="236"><div align="center">Enter Name: </div></td>
      <td width="300"><label>
      <input name="user_name" type="text" id="user_name" placeholder="Enter Your Name" value="<?=$data['user_name']?>" onkeydown="goods='abcdefghijklmnopqrstuvwxyz '; return limitchar(event)" required/>
      </label></td>
      <td width="323"><div align="center">Enter Designation: </div></td>
      <td width="383"><input name="user_deg" type="text" placeholder="Enter Designation"  value="<?=$data['user_deg']?>"  onkeydown="goods='abcdefghijklmnopqrstuvwxyz '; return limitchar(event)" required/></td>
    </tr>
    <tr>
      <td><div align="center">Enter Phone: </div></td>
      <td><input name="user_phone" type="text" maxlength="10" placeholder="Enter Phone No." onkeydown="goods='0123456789'; return limitchar(event)" value="<?=$data['user_phone']?>" required/></td>
      <td><div align="center">Enter Email: </div></td>
      <td><input name="user_email" type="email" placeholder="example@gmail.com"  value="<?=$data['user_email']?>" required/></td>
    </tr>
    <tr>
      <td><div align="center">Select Gender: </div></td>
      <td>
      <input name="user_gen" type="radio" value="male" <?php if($data['user_gen']=='male'){ echo "checked";} ?> required>
      Male 
      <input name="user_gen" type="radio" value="female" <?php if($data['user_gen']=='female'){ echo "checked";} ?> required/>
Female</td>
<td><div align="center">Qualification: </div></td>
      <td><input type="text" name="user_qual" maxlength="30" placeholder="Qualification"  value="<?=$data['user_qual']?>" required/></td>
    </tr>
    <tr>
      <td><div align="center">Enter Experience(In Years): </div></td>
      <td><input type="text" name="user_exp" maxlength="2" placeholder="Enter Experience" onkeydown="goods='0123456789'; return limitchar(event)" value="<?=$data['user_exp']?>" required/></td>
      <td><div align="center">Area Of Interest: </div></td>
      <td><input type="text" name="user_interest" maxlength="100" placeholder="Area of Interest" value="<?=$data['user_interest']?>" required/></td>
    </tr>
   <tr>  
      <td><div align="center">Enter DOB: </div></td>
      <td><input type="text" name="user_dob" id="user_dob" maxlength="16" placeholder="dd/mm/yy"  value="<?=$data['user_dob']?>"  required/>      
      <td><div align="center">Enter Username: </div></td>
      <td><input type="text" name="user_auth_name" id="user_auth_name" maxlength="16" placeholder="Enter Username"  value="<?=$data['user_auth_name']?>" onkeyup="user_auth(this)" <?php if(isset($data['user_auth_name'])){ echo"disabled";} ?> required/>
      <div id="valid_user" style="color:red;"></div>
      </td>  
    </tr>
    <tr>
      <td height="28" colspan="4"><div align="center">
        <label>
        <input name="Submit" type="submit" value="Submit" /> 
        </label>
        <label>
        <input name="reset" type="reset" value="Reset" />
        </label>
      </div></td>
    </tr>
  </table>
  <input type="hidden" value="" name="user_id"/>
 
  <input type="hidden" value="next_page" name="act" />
</form>

<?php include("includes/footer.php");?>