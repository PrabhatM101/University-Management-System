<?php include("includes/functions.php");
   session_start();
   if( (!isset($_SESSION['st_login']) || !isset($_SESSION['st_pass']) )){
        header("location:student_login.php?msg=Login First Then Continue!!!"); 
      }
 ?>
 <html> 
  <head> <title>University Management</title>
      <script language="javascript" src="js/validation.js"></script>
	  <link rel="stylesheet" href="css/mystyle.css"/>
	   
     <!--Face box-->
	     <script src="plugins/facebox/jquery.js" type="text/javascript"></script>
					<link href="plugins/facebox/facebox.css" media="screen" rel="stylesheet" type="text/css"/>
					<script src="plugins/facebox/facebox.js" type="text/javascript"></script>
					<script type="text/javascript">
							jQuery(document).ready(function($) {
	 							    $('a[rel*=facebox]').facebox()
							}) 
	    </script>	
	 <!--.............................................-->
     <link type="text/css" rel="stylesheet" href="css/style1.css" media="all" />
<link type="text/css" rel="stylesheet" href="css/style2.css" media="all" />
<link type="text/css" rel="stylesheet" href="css/style3.css" media="screen" />
<link type="text/css" rel="stylesheet" href="css/style4.css" media="only screen and (max-width: 540px)" />

<script type="text/javascript" src="js/js1.js"></script>
<script type="text/javascript" src="js/js2.js"></script>
<script type="text/javascript" src="js/js3.js"></script>
<script type="text/javascript" src="js/webvator-file.js"></script>

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-37631291-1']);
  _gaq.push(['_setDomainName', 'webvator.com']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
   <!-- Calender....................-->
	      <link type="text/css" href="plugins/calendar/css/smoothness/jquery-ui-1.7.1.custom.css" rel="stylesheet" />	
          <script type="text/javascript" src="plugins/calendar/js/jquery-1.3.2.min.js"></script>
          <script type="text/javascript" src="plugins/calendar/js/jquery-ui-1.7.1.custom.min.js"></script>
          <script type="text/javascript">
             $(function() {
                $("#st_dob").datepicker({changeMonth: true,changeYear: true,startYear:1900,EndYear:2000});
                $("#st_doa").datepicker({changeMonth: true,changeYear: true});
				$("#exam_date").datepicker({changeMonth: true,changeYear: true});
              });
			</script>  
<!--.........................................................................-->
  </head>
	  <center>	  
<body class="html front not-logged-in no-sidebars page-frontpage tao"  style="background:white;">
  
  	
      <div class="panel-panel panel-col-top" >
      <div class="inside"><div class="panel-pane pane-gwu-primary-navigation"  >
  
      
  
  <div class="pane-content"  >
    <div id="menu-wrapper" ><div id="menu-top" ><div class="menu-block-wrapper menu-block-2 menu-name-menu-division-menu parent-mlid-0 menu-level-1" >
 <ul class="menu"><!--<li class="first leaf has-children menu-mlid-784"><span title=""><a href="./">UNIVERSITY</a></span></li>-->
<li class="leaf has-children menu-mlid-785"><span title="HomePage"><a href="student_zone.php"rel="facebox">Home</a></span></li>
<li class="leaf has-children menu-mlid-786"><span title="Student Detail"><a href="student_details.php" rel="facebox">Details</a></span></li>
<li class="leaf has-children menu-mlid-787"><span title="University Gallary"><a href="gallary.php" >Gallary</a></span></li>
<li class="leaf has-children menu-mlid-1594"><span title="Admit Card"><a href="admit_card.php" >Admit</a></span></li>
<li class="leaf has-children menu-mlid-1594"><span title="Examination"><a href="exam_view.php?st_id=student" rel="facebox">Examination</a></span></li>
<li class="leaf has-children menu-mlid-1594"><span title="Result"><a href="result.php" >Result</a></span></li>
<li class="leaf has-children menu-mlid-1598"><span title="Fees"><a href="fees_details.php" >Fees</a></span></li>
<li class="leaf has-children menu-mlid-1598"><span title="Logout"><a href="lib/login.php?act=logout&l=s" rel="facebox">Logout</a></span></li>
</ul></div>
<div style="background:white" style="height:350px;">