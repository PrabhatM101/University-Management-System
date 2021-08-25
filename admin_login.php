<html>
  <head>
     <script>  
        <?php session_start();?>    
        function valid_login(frm){
          if(document.getElementById("login_type").value==0){
            alert("Plz Select Login Type");
            document.getElementById("login_type").focus();
            return false;
          }
        }
     </script>
  </head>
  <body>
    <h1 align="center"> Login Panel</h1>
    <div align="center" style="color:#FF0000;background:#00FF66;font-size:18px;font-family:Arial;font-weight:bolder;">
    <?php 
      if(isset($_REQUEST['msg']))
	    echo $_REQUEST['msg'];
    ?>
    </div>
<form id="frm" name="frm" method="post" action="lib/login.php" onsubmit="return valid_login(this)">
  <table width="596" border="1" align="center" cellspacing="0" cellpadding="20">
    <tr>
      <td colspan="2"><div align="center" style="color:#0033CC">Login Here </div>
        <div align="center"></div></td>
    </tr>
    <tr>
      <td><div align="center">Username:</div></td>
      <td><input type="text" name="login_name" id="login_name" required/></td>
    </tr>
    <tr>
      <td><div align="center">Password:</div></td>
      <td>
        <div align="left">
          <input type="password" name="login_pass" id="login_pass"  required/>
        </div></td>
    </tr>
    <tr>
       <td  align="center">Login Type:
       <td><select name="login_type" id="login_type">
             <option value="0">--Please Select--</option>
             <option value="admin">Admin Login</option>
             <option value="faculty">Faculty Login</option>
           </select>
       </td>
    </tr>
    <tr>
      <td height="34" colspan="2"> <div align="center">
	  <input type="hidden" name="act" value="check_login" />
        <input type="submit" name="Submit" value="Submit" />
        <input type="reset" name="Submit2" value="Reset" />
        <a href="add_user.php" style="margin:15px;">Register User</a>
		<a href="forget_pass.php">Foreget Password?For Admin</a>
      </div></td>
    </tr>
  </table>
</form>
</body>
</html>