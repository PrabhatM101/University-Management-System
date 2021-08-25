
function valid_student(frm){
    var tb=frm.elements.length;
	  var l,tp;
	  for(var i=0;i<tb;i++){
		   tp=frm.elements[i].type;
		   var value=frm.elements[i].value;
		  if(tp=="text" && value.trim()=="" || tp=="select-one" && value==0 ){
				         l=frm.elements[i].name.length;						 
						 alert("Enter/Select "+frm.elements[i].name.substring(3,l));
						 frm.elements[i].focus();
						 return false;
    			 }
		   }	
	     //maxlength.............
		      if(frm.st_phone.value.length<10){						 
					  alert("Enter 10 Digit Phone Number");
				      frm.st_phone.focus();
				      return false;
					}
			   if(frm.st_pincode.value.length<6){						 
					  alert("Enter 6 Digit Pincode");
				      frm.st_pincode.focus();
				      return false;
					}		
		  //Email validation--------------- 
		   var email=frm.st_email.value.indexOf('@');
		   console.log(email);
		  if( email==-1 ||  email==0 || email==frm.st_email.value.length-1 || email!=frm.st_email.value.lastIndexOf('@')){
			      alert("Enter Correct Email Format !!");
				  frm.st_email.focus();
				  return false;
			    }
		//Gender Validation---------
		   if(frm.st_gen[0].checked==false && frm.st_gen[1].checked==false){
			      alert("Select Gender");
				  frm.st_gen[0].focus();
				  return false;
			   }
	 
		//Address Validation---------
		   if(frm.st_address1.value.trim()==""){
			    alert("Enter Local Address");
		        frm.st_address1.focus();
				return false;
		     }
		  if(frm.st_address2.value.trim()==""){
			    alert("Enter Permanent Address");
		        frm.st_address2.focus();
				return false;
		     }
		
	 //Qualification Validation---------
		 if(frm.st_qual[0].checked==false){						 
				alert("Select Qualification");
			   // frm.st_qual[0].focus();
				return false;
			  }	
	// Image Validation------------
	      if(frm.st_image.value==''){
			    alert("Upload Image");
		        //frm.st_image.focus();
				return false;
			  }
	   	  
		   return true;
}
// Printout ---------
     function printout(){
		    window.print();
		  }
//isNum.....
/*     function isNum(ob){
		    var word=ob.value.split('');
			   for(var i=0;i<word.length;i++){
				     if(isNaN(word[i])){
						   delete word[i];
						 }
				   }
					    ob.value=word.join('');
		 }*/
// Function of delete student confirmation.......
    function delete_student(st_id){
		  if(confirm("Are You Sure To Delete Selected Record?")){
			    this.document.student_view.act.value="delete_student";
				this.document.student_view.st_id.value=st_id;
				this.document.student_view.submit();
			  }
		}
// Function For Select All Record......
    function mark_All(obj){
		  var frm=this.document.student_view;
		  var frm_len=frm.elements.length;
		    for(var i=0;i<frm_len;i++){
				  if(frm.elements[i].name=="st_multi_id[]" && frm.elements[i].type=="checkbox")
				     frm.elements[i].checked=obj.checked;
			   }
	   }
// Functio For Delete Multiple Record........
    function multiple_student_delete(){
		  if(confirm("Are You Sure To Delete All Selected Record?")){
			    this.document.student_view.act.value="multiple_student_delete";
				this.document.student_view.submit();
			  }
	   }
// Function of delete exam confirmation.......
    function delete_exam(exam_id){
		  if(confirm("Are You Sure To Delete Selected Record?")){
			    this.document.exam_view.act.value="delete_exam";
				this.document.exam_view.exam_id.value=exam_id;
				this.document.exam_view.submit();
			  }
		}
// Function For Select All Record......
    function mark_All_Exam(obj){
		  var frm=this.document.exam_view;
		  var frm_len=frm.elements.length;
		    for(var i=0;i<frm_len;i++){
				  if(frm.elements[i].name=="exam_multi_id[]" && frm.elements[i].type=="checkbox")
				     frm.elements[i].checked=obj.checked;
			   }
	   }
// Functio For Delete Multiple Record........
    function multiple_exam_delete(){
		  if(confirm("Are You Sure To Delete All Selected Record?")){
			    this.document.exam_view.act.value="multiple_exam_delete";
				this.document.exam_view.submit();
			  }
	   }
	   
///Function For Num or Char Value..........
    goods="0123456789."; // onKeypress="goods='abcd'; return limitchar(event)"
function limitchar(e)
{
	var key, keychar;
	if (window.event)
		key=window.event.keyCode;
	else if (e)
		key=e.which;
	else
		return true;
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();
	goods = goods.toLowerCase();
	if (goods.indexOf(keychar) != -1)
	{
		goods="0123456789.";
		return true;
	}
	if ( key==null || key==0 || key==8 || key==9 || key==13 || key==27 )
	{
		goods="0123456789.";
		return true;
	}
	return false;
}
/// get Balance Amount............................
   function getBal(ob){
	      if(parseInt(frm.st_paid.value)<=parseInt(frm.st_paid.max)){
	         frm.st_bal.value=parseInt(frm.st_paid.max)-parseInt(ob.value);
		   }
	    }
// Function For get Subject......................
  function getSubject(ob){
	    if(XMLHttpRequest)
		var  xmlhttp=new XMLHttpRequest();
		else
		 var xmlHttp=new ActiveXObject("Microsoft.XMLHTPP");
		   xmlhttp.onreadystatechange=function(){
			     if(xmlhttp.readyState==4 && xmlhttp.status==200)
				    document.getElementById('exam_subject').innerHTML=xmlhttp.responseText;
			   }; 
		    xmlhttp.open('GET','lib/exam.php?act=get_subject&course_id='+ob,true);
			xmlhttp.send();
	  }
	function user_auth(){
		ob=document.getElementById("user_auth_name").value;
		if(XMLHttpRequest)
		   var  xmlhttp=new XMLHttpRequest();
		else
		   var xmlHttp=new ActiveXObject("Microsoft.XMLHTPP");
		     xmlhttp.onreadystatechange=function(){
			      if(xmlhttp.readyState==4 && xmlhttp.status==200)
				     document.getElementById('valid_user').innerHTML=xmlhttp.responseText;
			    }; 
		    xmlhttp.open('GET','lib/student.php?act=user_auth&user='+ob,true);
			xmlhttp.send();
	} 
	
	// Function for get marks..................
     function getMarks(){
		ob=document.getElementById("sub").value;
		
		if(XMLHttpRequest)
		   var  xmlhttp=new XMLHttpRequest();
		else
		   var xmlHttp=new ActiveXObject("Microsoft.XMLHTPP");
		     xmlhttp.onreadystatechange=function(){
				  if(xmlhttp.readyState==4 && xmlhttp.status==200){
				     var t= xmlhttp.responseText.split('/');
					 document.getElementById('total_marks').innerHTML=t[0];
					 document.getElementById('total_theory').innerHTML='/'+t[1];
					 document.getElementById('total_practical').innerHTML='/'+t[2];
					 document.getElementById('sub_assignment').innerHTML='/'+t[3];
					   if(t[2]==0){
						 document.getElementById('ob_practical').disabled=true;
						 document.getElementById("ob_theory").max="100";
					   }
					  if(t[3]==0){
						  document.getElementById('ob_assignment').disabled=true;
						  document.getElementById('ob_practical').disabled=true;
					    }
					   else{
						document.getElementById('ob_practical').disabled=false;
						document.getElementById('ob_assignment').disabled=false;
						document.getElementById("ob_theory").max="70"; 
					   }
					      	
				    }
			    }; 
		    xmlhttp.open('GET','lib/student.php?act=getMarks&sub='+ob,true);
			xmlhttp.send(); 
	 }

	//..............................
	function valid_user(){
	   if(document.getElementById('valid_user').innerText!=''){
		   alert(document.getElementById('valid_user').innerHTML);
		   document.getElementById("user_auth_name").focus();
		   return false;
	   }	
	}

function validMarks(frm){
	if(document.getElementById("sub").value==0){
	  alert("Plz Select Subject");
	  return false;
	}
}


// Function For Delete Result
function delete_result(id){	
	if(confirm("Are You Sure To Delete Selected Record?")){
		  this.document.marks_view.act.value="delete_result";
		  this.document.marks_view.id.value=id;
		  this.document.marks_view.submit();
		}
  }

  // function For Approve..............
  function approve(ob1,sn){
   btn=document.getElementsByClassName("btn");
   var status= document.getElementsByClassName('status');
   if(btn[sn].innerText=="Approve"){
	   ob2=0;
	   btn[sn].innerText="Remove";
   }else if(btn[sn].innerText="Remove"){
	   ob2=1;
	   btn[sn].innerText="Approve";
   }
   
	if(XMLHttpRequest)
	   var  xmlhttp=new XMLHttpRequest();
	else
	   var xmlHttp=new ActiveXObject("Microsoft.XMLHTPP");
		 xmlhttp.onreadystatechange=function(){
			  if(xmlhttp.readyState==4 && xmlhttp.status==200)
			   if(xmlhttp.responseText=="Approved")
			     color="green";
			   else  
				 color="red";
			  status[sn].innerHTML="<font color="+color+">"+xmlhttp.responseText+"</font>";
			}; 
		xmlhttp.open('GET','lib/student.php?act=approve_user&user='+ob1+'&status='+ob2,true);
		xmlhttp.send();
  }


  // Function For Get State ............

  function getState(city){
    if(XMLHttpRequest)
	   var  xmlhttp=new XMLHttpRequest();
	else
	   var xmlHttp=new ActiveXObject("Microsoft.XMLHTPP");
		 xmlhttp.onreadystatechange=function(){
			  if(xmlhttp.readyState==4 && xmlhttp.status==200){
			     document.getElementById("st_state").innerHTML=xmlhttp.responseText;
				 getCountry(document.getElementById("st_state").value);
			    }
			 }; 
		xmlhttp.open('GET','lib/data.php?act=get_state&city='+city,true);
		xmlhttp.send();  
  }

  
  // Function For Get Country...............

  function getCountry(state){
    if(XMLHttpRequest)
	   var  xmlhttp=new XMLHttpRequest();
	else
	   var xmlHttp=new ActiveXObject("Microsoft.XMLHTPP");
		 xmlhttp.onreadystatechange=function(){
			  if(xmlhttp.readyState==4 && xmlhttp.status==200)
			    document.getElementById("st_country").innerHTML=xmlhttp.responseText;
			 }; 
		xmlhttp.open('GET','lib/data.php?act=get_country&state='+state,true);
		xmlhttp.send();  
  }

  