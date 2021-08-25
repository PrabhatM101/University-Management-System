<?php include('includes/functions.php');?>
<h1 align="center">Welcom In Recovery Panel</h1>
<div align="center" style="color:#FF0000;background:#00FF66;font-size:18px;font-family:Arial;font-weight:bolder;">
  <?php 
      if(isset($_REQUEST['msg']))
	    echo $_REQUEST['msg'];
    ?>
</div>
<form id="frm" name="frm" method="post" action="lib/login.php">
  <table width="596" border="1" align="center" cellspacing="0">
    <tr>
      <td colspan="2"><div align="center" style="color:#0033CC">Recovery Here </div>
        <div align="center"></div></td>
    </tr>
    <tr>
      <td><div align="center">Username:</div></td>
      <td><input type="text" name="login_name" id="login_name" /></td>
    </tr>
    <tr>
      <td><div align="center">Security Questions:</div></td>
      <td><select id="sec_ques" name="sec_ques">
         <?= get_option_list("security_ques","sec_id","sec_ques",0) ?>
		  </select>
	  </td>
    </tr>
	<tr>
      <td><div align="center">Security Answer:</div></td>
      <td>
         <input type="password" name="sec_ans" id="sec_ans" />
	  </td>
    </tr>
    <tr>
      <td height="34" colspan="2"> <div align="center">
	  <input type="hidden" name="act" value="recover_pass" />
        <input type="submit" name="Submit" value="Recover" />
        <input type="reset" name="Submit2" value="Reset" />
      </div></td>
    </tr>
  </table>
</form>