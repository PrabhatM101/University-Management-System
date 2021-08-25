<?php
    include("db_connect.php");
	  // Fuction For Dynamic Option List..........
	     function get_option_list($table,$col_id,$col_name,$sel){
		    global $con;
		      $sql="select *from $table order by $col_id";
			  $option_list="<option value='0'>--Please-Select--</option>";
			  $rs=mysqli_query($con,$sql) or die(mysqli_error($con));			
			    while($data=mysqli_fetch_assoc($rs)){
				     if($sel==$data[$col_id])
					   $option_list.="<option value='$data[$col_id]' selected>$data[$col_name]</option>";   
					 else
					   $option_list.="<option value='$data[$col_id]'>$data[$col_name]</option>";  
				   }
				     return $option_list;
			}
			function get_option_list2($table,$col_id,$col_name,$sel){
				global $con;
				  $sql="select *from $table order by $col_id";
				  $option_list="<option value='0'>--Please-Select--</option>";
				  $rs=mysqli_query($con,$sql) or die(mysqli_error($con));			
					while($data=mysqli_fetch_assoc($rs)){
						 if($sel==$data[$col_id])
						   $option_list.="<option value='$data[$col_name]'>$data[$col_name]</option>";
						// else
						 //  $option_list.="<option value='$data[$col_id]'>$data[$col_name]</option>";  
					   }
						 return $option_list;
				}	
	// Function For Dynamic checkbox............
	     function get_check_list($table,$col_id,$col_name,$sel,$name){
		       global $con;
			   $sql="SELECT *FROM $table ORDER BY $col_id";
			   $check_list='';
			   $sel=explode(',',$sel);
			   $rs=mysqli_query($con,$sql) or die(mysqli_error());
			       while($data=mysqli_fetch_assoc($rs)){
				        if(in_array($data[$col_id],$sel))
						   $check_list.="<input type='checkbox' name='$name' value='$data[$col_id]' checked>$data[$col_name]";
						else
						   $check_list.="<input type='checkbox' name='$name' value='$data[$col_id]' >$data[$col_name]";    				   
				      }
					    return $check_list;
		     }	
    // Function For Single Value............
	     function get_value($table,$col_id,$col_name,$sel){
		      global $con;
		      $sql="SELECT $col_name FROM $table WHERE $col_id=$sel";
			  $rs=mysqli_query($con,$sql) or mysqli_error($sql);
			   $data=mysqli_fetch_array($rs);
			  return $data[$col_name];
		    }			 	
	 // Function For Multiple Value............
	     function get_multi_value($table,$col_id,$col_name,$sel){
		      global $con;
			  $sql="SELECT $col_name FROM $table WHERE $col_id in ($sel)";
			  $rs=mysqli_query($con,$sql);
			    $multi_value='';
				  while($data=mysqli_fetch_array($rs)){
				      $multi_value.=$data[$col_name].",";
				    }
					  return $multi_value;
		    }		
 ?>	