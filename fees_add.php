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
   <?php
		     global $con;
	         $sqlf="SELECT *FROM fees WHERE st_id=$data[st_id]";
			 $rsf=mysqli_query($con,$sqlf);
			 $dataf=mysqli_fetch_assoc($rsf);
		 ?>
     
<form action="lib/fees.php?f_id=<?= $dataf['st_id']?>" method="post" enctype="multipart/form-data" name="frm" id="frm" onsubmit="return getBal(this.st_paid);">
  <table width="1274" height="361" border="1">
    <tr>
      <td colspan="4">
	      <div align="center"><font color="#0000FF" size="+5">
	        Student Fees Form
        </font> </div></td>
    </tr>
    <tr>
      <td width="236"><div align="center">Name:</div></td>
      <td width="300"><label>
      <input name="st_name" type="text" id="st_name" value="<?=$data['st_name']?>" readonly="true"/>
      </label></td>
      <td width="323"><div align="center">Father Name: </div></td>
      <td width="383"><input name="st_father" type="text" value="<?=$data['st_father']?>" readonly="true"/></td>
    </tr>
    <tr>
      <td><div align="center">Course: </div></td>
      <td><label> 
	       <input type="text" value="<?=get_value("course","course_id","course_name",$data['st_course'])?>" readonly="true" name="st_course" id="st_course"/>
      </label></td>
      <td><div align="center">Image: </div></td>
      <td><label>
        <img src="uploads/<?=$data['st_image']?>" height="50" width="80"/>	
      </label></td>
    </tr>
	<tr>
	  <td align="center">Total Fees:</td>
	  <td><input type="text" name="st_total_fees"onkeypress="goods='0123456789'; return limitchar(event)" value="<?= get_value("course","course_id","course_total_fees",$data['st_course'])?>" /></td>
	  <td align="center">Paid Amount:</td>
	  <td>
	   
	  <input type="number" placeholder="Enter Fees Amount"
	  name="st_paid" id="st_paid" onkeydown="goods='0123456789'; return limitchar(event)" onblur="getBal(this)" required min="1" max="<?php if(isset($dataf['st_bal'])){echo $dataf['st_bal'];}else{ echo get_value("course","course_id","course_total_fees",$data['st_course']);} ?>" />
	  </td>
	</tr>
	<tr>
	  <td align="center">Balance:</td>
	  <td><input type="text" name="st_bal"id="st_bal" readonly="true" value="
	         <?php if(isset($_REQUEST['id'])){
			           $arr=explode(',',get_multi_value('fees','st_id','st_paid',$data['st_id']));
					   unset($arr[count($arr)-2]);
					   echo $arr[count($arr)-2];
					   $st_paid=array_merge(',',$arr);
			       }else if(isset($dataf['st_id'])){
					    echo $dataf['st_bal'];
					}else{
					   echo get_value("course","course_id","course_total_fees",$data['st_course']);}?>"/>
	  <td align="center">Description:</td>
	  <td><textarea name="st_desc" cols="60"></textarea>
	  </td>
	</tr>  
    <tr>
      <td height="28" colspan="4" align="center"><div align="center">
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
  <input type="hidden" value="save_fees" name="act" />
</form>
<?php include("includes/footer.php"); ?>