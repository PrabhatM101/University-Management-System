<?php
     include("includes/header.php");  
?>
<?php
   error_reporting(0);
    if($_REQUEST['st_id']){
	     $sql="SELECT *FROM student WHERE st_id='$_REQUEST[st_id]'";
		 $rs=mysqli_query($con,$sql) or die(mysqli_error());
		 $data=mysqli_fetch_assoc($rs);
	   }
 ?>
     
<form action="lib/student.php" method="post" enctype="multipart/form-data" name="frm" id="frm" onsubmit="return valid_student(this);">
  <table width="1274" height="361" border="1">
    <tr>
      <td colspan="4">
	      <div align="center"><font color="#0000FF" size="+5">
	        Student Registration Form
        </font> </div></td>
    </tr>
    <tr>
      <td width="236"><div align="center">Enter Name: </div></td>
      <td width="300"><label>
      <input name="st_name" type="text" id="st_name" placeholder="Enter Your Name" value="<?=$data['st_name']?>" onkeydown="goods='abcdefghijklmnopqrstuvwxyz '; return limitchar(event)"/>
      </label></td>
      <td width="323"><div align="center">Enter Father Name: </div></td>
      <td width="383"><input name="st_father" type="text" placeholder="Enter Father Name"  value="<?=$data['st_father']?>"  onkeydown="goods='abcdefghijklmnopqrstuvwxyz '; return limitchar(event)"/></td>
    </tr>
    <tr>
      <td><div align="center">Enter Phone: </div></td>
      <td><input name="st_phone" type="text" maxlength="10" placeholder="Enter Phone No." onkeydown="goods='0123456789'; return limitchar(event)" value="<?=$data['st_phone']?>"/></td>
      <td><div align="center">Enter Email: </div></td>
      <td><input name="st_email" type="text" placeholder="example@gmail.com"  value="<?=$data['st_email']?>"/></td>
    </tr>
    <tr>
      <td><div align="center">Select Gender: </div></td>
      <td>
      <input name="st_gen" type="radio" value="male" <?php if($data['st_gen']=='male') echo "checked" ?>/>
      Male 
      <input name="st_gen" type="radio" value="female" <?php if($data['st_gen']=='female') echo "checked" ?>/>
Female</td>
      <td><div align="center">Select Qualification: </div></td>
      <td>
         <?php echo get_check_list("qualification","qual_id","qual_name",$data['st_qual'],"st_qual[]");?>      </td>
    </tr>
    <tr>
      <td><div align="center">Local Address: </div></td>
      <td><label>
        <textarea name="st_address1" placeholder="Enter Local Address" ><?=$data['st_address1']?></textarea>
      </label></td>
      <td><div align="center">Permanent Address: </div></td>
      <td><label>
        <textarea name="st_address2" placeholder="Enter Permanent Address"><?=$data['st_address2']?></textarea>
      </label></td>
    </tr>
    <tr>
      <td><div align="center">Select City: </div></td>
      <td><label>
        <select name="st_city" id="st_city" onchange="getState(this.value)">
		   <?php echo get_option_list("city","city_id","city_name",$data['st_city']);?>
        </select>
      </label></td>
      <td><div align="center">Select State: </div></td>
      <td><label>
      <select  name="st_state" id="st_state"  onchange="getCountry(this.value)">
	     <?php echo get_option_list('state','state_id','state_name',$data['st_state']); ?>
      </select>
      </label></td>
    </tr>
    <tr>
      <td><div align="center">Select Country: </div></td>
      <td> 
      <select  name="st_country" id="st_country">
	     <?php echo get_option_list('country','country_id','country_name',$data['st_country']); ?>
      </select>
      </td>
      <td><div align="center">Enter Pincode: </div></td>
      <td><input type="text" name="st_pincode" maxlength="6" placeholder="Enter Pincode" onkeydown="goods='0123456789'; return limitchar(event)" value="<?=$data['st_pincode']?>"/></td>
    </tr>
    <tr>
      <td><div align="center">Enter DOB: </div></td>
      <td><input name="st_dob" id="st_dob" type="text" placeholder="dd/mm/yyyy"  value="<?=$data['st_dob']?>"/></td>
      <td><div align="center">Enter DOA: </div></td>
      <td><input name="st_doa" id="st_doa" type="text" placeholder="dd/mm/yyyy"  value="<?=$data['st_doa']?>"/></td>
    </tr>
    <tr>
      <td><div align="center">Select Course: </div></td>
      <td><label>
      <select  name="st_course" id="st_course">
	       <?php echo get_option_list('course','course_id','course_name',$data['st_course']); ?>
      </select>
      </label></td>
      <td><div align="center">Select Image: </div></td>
      <td><label>
          <input type="file" name="st_image" id="st_image" />

       <?php if(isset($data['st_image'])){ ?>
          <img src="uploads/<?=$data['st_image']?>" height="50" width="80"/>	
       <?php } ?>
      </label></td>
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
  <input type="hidden" value="<?=$data['st_id']?>" name="st_id"/>
  <input type="hidden" value="<?=$data['st_image']?>" name="st_image">
  <input type="hidden" value="save_student" name="act" />
</form>
<?php include("includes/footer.php"); ?>