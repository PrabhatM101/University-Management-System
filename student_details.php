<?php
    session_start();
    error_reporting(0);
    if(isset($_SESSION['login_name']) && isset($_REQUEST['st_id'])){
       include("includes/header.php"); 
      }
      else if(isset($_SESSION['st_login'])){
      include("includes/header2.php"); 
      }else{
        header("location:student_login.php?msg=Login First Then Continue");
      }
?>
<?php
   error_reporting(0);
   if(isset($_SESSION['st_login'])){
    $sql="SELECT *FROM student WHERE st_id='$_SESSION[st_login]'"; 
   }
    if(isset($_REQUEST['st_id'])){
	     $sql="SELECT *FROM student WHERE st_id='$_REQUEST[st_id]'";
     }
    if(isset($sql)){
      $rs=mysqli_query($con,$sql) or die(mysqli_error());
      $data=mysqli_fetch_assoc($rs);
    } 
 ?>
 <fieldset>
    <legend>Student Details</legend>
  <table width="1274" height="361" border="1">
    <tr>
      <th colspan="4">
	      <div align="center"><font color="#0000FF" size="+5">
	        Student Details 
        </font> </div></th>
    </tr>
    <tr>
      <th width="236"><div align="center">Name: </div></th>
      <td width="300">
         <?=$data['st_name']?>
      </td>
      <th width="323"><div align="center">Father Name: </div></th>
      <td width="383"><?=$data['st_father']?></td>
    </tr>
    <tr>
      <th><div align="center">Phone: </div></th>
      <td><?=$data['st_phone']?></td>
      <th><div align="center">Email: </div></th>
      <td><?=$data['st_email']?></td>
    </tr>
    <tr>
      <th><div align="center">Gender: </div></th>
      <td>
      <?= $data['st_gen']; ?>
      </td>
      <th><div align="center">Qualification: </div></th>
      <td>
	     <?=get_multi_value("qualification","qual_id","qual_name",$data['st_qual'])?>
      </td>
    </tr>
    <tr>
      <th><div align="center">Local Address: </div></th>
      <td>
        <?=$data['st_address1']?>
      </td>
      <th><div align="center">Permanent Address: </div></th>
      <td>
        <?=$data['st_address2']?>
      </td>
    </tr>
    <tr>
      <th><div align="center">City: </div></th>
      <td>
		   <?=get_value("city","city_id","city_name",$data['st_city'])?>
      </td>
      <th><div align="center">State: </div></th>
      <td>
		   <?=get_value("state","state_id","state_name",$data['st_state'])?>
      </td>
    </tr>
    <tr>
      <th><div align="center">Country: </div></th>
      <td>
		   <?=get_value("country","country_id","country_name",$data['st_country'])?>
      </td>
      <th><div align="center">Pincode: </div></th>
      <td><?=$data['st_pincode']?></td>
    </tr>
    <tr>
      <th><div align="center">DOB: </div></th>
      <td><?=$data['st_dob']?></td>
      <th><div align="center">DOA: </div></th>
      <td><?=$data['st_doa']?></td>
    </tr>
    <tr>
      <th><div align="center">Course: </div></th>
      <td>
		   <?=get_value("course","course_id","course_name",$data['st_course'])?>
      </select>
      </td>
      <th><div align="center">Image: </div></th>
      <td><?=$data['st_image']?>
        <img src="uploads/<?=$data['st_image']?>" height="50" width="80"/>	
      </td>
    </tr>
    <tr>
      <td height="28" colspan="4">
	      <div align="center"> 
            <button onclick="printout()"><img src="images/print.ico" height="30" width="30"/></button>
            <button onclick="history.back()"><<<</button>
	       </div> 
	  </td>
    </tr>
  </table>
</fieldset>
  <input type="hidden" value="<?=$data['st_id']?>" name="st_id"/>
  <input type="hidden" value="<?=$data['st_image']?>" name="st_image">
  <input type="hidden" value="save_student" name="act" />
<?php include("includes/footer.php"); ?>