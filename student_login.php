<h1 align="center">Student Login Panel</h1>
<div align="center" style="color:#FF0000;background:#00FF66;font-size:18px;font-family:Arial;font-weight:bolder;">
  <?php 
      if(isset($_REQUEST['msg']))
	    echo $_REQUEST['msg'];
    ?>
</div>
<form id="frm" name="frm" method="post" action="lib/login.php">
  <table width="596" border="1" align="center" cellspacing="0" cellpadding="20">
    <tr>
      <td colspan="2"><div align="center" style="color:#0033CC">Login Here </div>
        <div align="center"></div></td>
    </tr>
    <tr>
      <td><div align="center">Username:</div></td>
      <td><input type="text" name="login_name" id="login_name" /></td>
    </tr>
    <tr>
      <td><div align="center">Password:</div></td>
      <td>
        <div align="left">
          <input type="password" name="login_pass" id="login_pass" />
        </div></td>
    </tr>
    <tr>
      <td height="34" colspan="2"> <div align="center">
	  <input type="hidden" name="act" value="student_login" />
        <input type="submit" name="Submit" value="Submit" />
        <input type="reset" name="Submit2" value="Reset" />
      </div></td>
    </tr>
  </table>
</form>