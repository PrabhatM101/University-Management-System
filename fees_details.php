<?php
    session_start();
    error_reporting(0);
    if(isset($_SESSION['login_name'])  && isset($_REQUEST['st_id'])){
       include("includes/header.php"); 
      }
      else if(isset($_SESSION['st_login'])) {
      include("includes/header2.php"); 
      }else{
        header("location:student_login.php?msg=Login First Then Continue");
      }
?>
<?php
    if(isset($_REQUEST['st_id']) && isset($_SESSION['login_name'])){
       $id=$_REQUEST['st_id'];      
      }
    else if(isset($_SESSION['st_login'])){
       $id=$_SESSION['st_login'];
     }
    
     $sql="SELECT *FROM fees,student WHERE student.st_id=$id and fees.st_id=$id";
      $rs=mysqli_query($con,$sql) or die(mysqli_error());
      $data=mysqli_fetch_assoc($rs);

      if($data){

      }else{
      $sql="SELECT *FROM fees,student WHERE student.st_id=$id";
      $rs=mysqli_query($con,$sql) or die(mysqli_error());
      $data=mysqli_fetch_assoc($rs);
      }
     
// echo $data['st_bal'] ;
 ?>
<?php
  
   
 
 ?>

<?php
         if(isset($_REQUEST['msg'])){
           echo "<div style='color:red;font-size:24px;background:#00ff00;font-weight:bolder;'>".$_REQUEST['msg']."</div>";
         }
      ?>
<fieldset style="margin-top:40px;">
  <legend>Fee Reciepts</legend>     
  <table width="1274" height="361" border="1">
    <tr>
      <td colspan="4">
	      <div align="center"><font color="#0000FF" size="+5">
	        Fees Recipts
        </font> </div></td>
    </tr>
    <tr>
      <td width="236"><div align="center">Name:</div></td>
      <td width="300"><label>
          <?=$data['st_name']?>
      </label></td>
      <td width="323"><div align="center">Father Name: </div></td>
      <td width="383"><?=$data['st_father']?></td>
    </tr>
    <tr>
      <td><div align="center">Course: </div></td>
      <td><label> 
	   <?=get_value("course","course_id","course_name",$data['st_course'])?>
      </label></td>
      <td><div align="center">Image: </div></td>
      <td><label>
        <img src="uploads/<?=$data['st_image']?>" height="50" width="80"/>	
      </label></td>
    </tr>
	<tr>
	  <td align="center">Total Fees:</td>
	  <td>
	  <?=get_value("course","course_id","course_total_fees",$data['st_course']);?>
	  </td>
	  <td align="center">Paid Amount:</td>
	  <td>
	   
	<?=$data['st_paid']?>
	  </td>
	</tr>
	<tr>
	  <td align="center">Balance:</td>
	  <td><?php if(isset($data['st_bal'])){echo $data['st_bal'];}else{echo get_value("course","course_id","course_total_fees",$data['st_course']);}?>
	  <td align="center">Date:</td>
	  <td><?=$data['st_date']?>
	  </td>
	</tr>  
    <tr>
      <td height="28" colspan="4" align="center"> 
	      <div align="center"> 
            <button onclick="printout()"><img src="images/print.ico" height="30" width="30"/></button>
            <button onclick="history.back()"><<<</button>
	       </div> 
	  </td>
    </tr>
  </table>
</fieldset>
<?php include("includes/footer.php"); ?>