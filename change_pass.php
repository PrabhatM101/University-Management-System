<h1 align="center">Change Password</h1>
<div align="center" style="color:#FF0000;background:#00FF66;font-size:18px;font-family:Arial;font-weight:bolder;">
  <?php 
      if(isset($_REQUEST['msg']))
	    echo $_REQUEST['msg'];
    ?>
</div>
<form id="frm" name="frm" method="post" action="lib/login.php">
  <table width="596" border="1" align="center" cellspacing="0">
    <tr>
      <td colspan="2"><div align="center" style="color:#0033CC">Change Password Here </div>
        <div align="center"></div></td>
    </tr>
    <tr>
      <td><div align="center">New Password:</div></td>
      <td><input type="password" name="new_pass" id="new_pass" /></td>
    </tr>
    <tr>
      <td><div align="center">Confirm Password:</div></td>
      <td>
        <div align="left">
          <input type="password" name="c_pass" id="c_pass" />
        </div></td>
    </tr>
    <tr>
      <td height="34" colspan="2"> <div align="center">
	  <input type="hidden" name="act" value="change_pass" />
        <input type="submit" name="Submit" value="Update" />
        <input type="reset" name="Submit2" value="Reset" />
      </div></td>
    </tr>
  </table>
</form>