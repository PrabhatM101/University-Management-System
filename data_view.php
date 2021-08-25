<?php include("includes/header.php");?>
<div style="color:yellow;background:green;margin-top:50px;font-size:24px;">
<?php
   if(isset($_REQUEST['msg']))
     echo $_REQUEST['msg'];
?>
</div>
  <div style="padding:50px 100px 0px 100px;">
    <table height="500" style="cursor:pointer;font-size:32px;background:#ffe5f9;border-radius:10px;">
      <tr style="background:#ccee55">
        <th>Data Module</th>
      </tr>
      <tr>
        <th> <a href="course_add.php" style="color:#b21110;font-size:22px;font-family:Lucida Bright Demibold;"> Course</a></th>
      </tr>
      <tr>
        <th> <a href="subject_add.php" style="color:#b21110;font-size:22px;font-family:Lucida Bright Demibold;">Subject</a></th>
      </tr>
      <tr>
        <th> <a href="city_add.php" style="color:#b21110;font-size:22px;font-family:Lucida Bright Demibold;"> City</a></th>
      </tr>
      <tr>
        <th> <a href="state_add.php" style="color:#b21110;font-size:22px;font-family:Lucida Bright Demibold;">State</a></th>
      </tr>
      <tr>
        <th> <a href="country_add.php" style="color:#b21110;font-size:22px;font-family:Lucida Bright Demibold;">Country</a></th>
      </tr>
      <tr>
        <th> <a href="qualification_add.php" style="color:#b21110;font-size:22px;font-family:Lucida Bright Demibold;">Qualification</a></th>
      </tr>
    </table>
  </div>
<?php include("includes/footer.php"); ?>