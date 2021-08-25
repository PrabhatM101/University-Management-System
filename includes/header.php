<?php include("includes/functions.php");
   session_start();
   if(!isset($_SESSION['login_name']) || !isset($_SESSION['login_pass'])){
        header("location:index.php?msg=Login First Then Continue!!!"); 
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
                $("#user_dob").datepicker({changeMonth: true,changeYear: true});
                $("#exam_date").datepicker({changeMonth: true,changeYear: true});
              });
			</script>  
<!--.........................................................................-->
  </head>
	  <center>	  
<body class="html front not-logged-in no-sidebars page-frontpage tao" >
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable">Skip to main content</a>
  </div>
    <div id="header">
<div id="header-wrapper">


		<a id="mobile-nav" href="#">
	  	<span class="icon-bar"></span>
	    <span class="icon-bar"></span>
	    <span class="icon-bar"></span>
	  </a>
<div class="view view-main-header view-id-main_header view-display-id-main_header_panel_pane view-dom-id-3af75297e8d9c0cb75674b84fce2d69e">
        
  
  
      <div class="view-content">
        <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">
    

<div class="gwlogo clearfix">

  <div class="field field-name-field-logo field-type-image field-label-hidden"><div class="field-items"><div class="field-item even"><img typeof="foaf:Image" src="images/LOGO.png" width="199" height="90" alt="Canada MI University" title="Canada MI University" /></div></div></div>
 </div>

<div class="right clearfix">
<div class="social-links clearfix">
        <ul>
                          <li>
                  <a href="https://www.facebook.com/" >
                    <img src="images/Facebook.png" />
                  </a>
                </li>
                          <li>
                  <a href="http://twitter.com/" >
                    <img src="images/Twitter.png" />
                  </a>
                </li>
                          <li>
                  <a href="http://www.youtube.com/" >
                    <img src="images/YouTube.png"  />
                  </a>
                </li>
                          <li>
                  <a href="javascript:void(0)" >
                    <img src="images/icons_Instagram.png"  />
                  </a>
                </li>
                  </ul>
</div>

<div class="clearfix">
<form method="get" action="javascript:void(0)" id="search">
    <div id="search-holder">
     
            <span class="search-title">Search</span>
      <input type="text" name="q" id="searchInput">
      <button type="submit">Search</button>
    </div>
  </form>
</div>
<div class="links clearfix">
                    <a href="javascript:void(0)" target="_blank">Contact us</a>          |            <a href="javascript:void(0)" >Photo Gallery</a>          |            <a href="javascript:void(0)" >Students</a>          |            <a href="javascript:void(0)">Site Map</a>           </div>
  </div>

<div class="bottom clearfix">
<div class="target-audience">
<a href="./" >HOME PAGE</a> 
</div>
</div>

  </div>
    </div>
  
  
  
  
  
  
</div></div>
</div>

<!--<div id='branding'><div class='limiter clearfix'>
  <h1 class='site-name'></h1></div></div>-->

<!--<div id='navigation'><div class='limiter clearfix'>
                </div></div>-->


<div id='page'><div class='limiter clearfix'>
                
        <div>


</div>
  
  <div id='main-content' class='clearfix'>
    
  <!--
        -->
    <!--
     -->
                <div id='content' class='clearfix'>  <div class="region region-content">
    <div class="panel-display panel-front-page clearfix" >
	
	  		<div class="hero-wrapper">	
    		<div class="panel-panel panel-hero">
      			<div class="inside"><div class="panel-pane pane-views-panes pane-gw-main-site-hero-rotator-panel-pane-1" >
  
      
  
  <div class="pane-content">
    <div class="view view-gw-main-site-hero-rotator view-id-gw_main_site_hero_rotator view-display-id-panel_pane_1 view-dom-id-d58c7f6586e6d226256e157a6320e2c0">
        
  
  
      <div class="view-content">
        <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">
    
  <div class="rotating-large-hero">
      <ul class="responsive-slider">
  
			  		
  				      			<li class="image">
          		              <a href="http://makinghistory.gwu.edu/?utm_source=gwu.edu&amp;utm_medium=homepage+hero&amp;utm_campaign=fortuneglobalforum">


<div class="image">
	<img typeof="foaf:Image" src="images/slide1.jpg" width="940" height="378"  /></div>






</a><!-- end items -->
  				                  </li>
          			  		
  				      			<li class="image">
          		              <a href="">


<div class="image">
	<img typeof="foaf:Image" src="images/slide2.jpg" width="940" height="378"  /></div>






</a><!-- end items -->
  				                  </li>
          			  		
  				      			<li class="image">
          		              <a href="">


<div class="image">
	<img typeof="foaf:Image" src="images/slide3.jpg" width="940" height="378" /></div>






</a><!-- end items -->
  				                  </li>
          			  		
  				      			
          			
			
  		</ul><!-- end responsive-slider -->
			<div class="navigation-wrapper"><div class="navi"></div></div>
 			</div><!-- rotating large hero -->
			  </div>
    </div>
  
  
  
  
  
  
</div>  </div>

  
  </div>
</div>
    		</div>
		</div>
  	
      <div class="panel-panel panel-col-top">
      <div class="inside"><div class="panel-pane pane-gwu-primary-navigation" >
  
      
  
  <div class="pane-content">
    <div id="menu-wrapper"><div id="menu-top"><div class="menu-block-wrapper menu-block-2 menu-name-menu-division-menu parent-mlid-0 menu-level-1">
 <ul class="menu"><!--<li class="first leaf has-children menu-mlid-784"><span title=""><a href="./">UNIVERSITY</a></span></li>-->
<li class="leaf has-children menu-mlid-785"><span title="HomePage"><a href="index.php" rel="facebox">Home</a></span></li>
<li class="leaf has-children menu-mlid-786"><span title="Student"><a href="student_view.php" rel="facebox">Student</a></span></li>
<li class="leaf has-children menu-mlid-787"><span title="University Gallary"><a href="gallary.php" >Gallary</a></span></li>
<li class="leaf has-children menu-mlid-1594"><span title="Fees Information"><a href="fees_view.php" rel="facebox">Fees</a></span></li>
<li class="leaf has-children menu-mlid-1594"><span title="Examination"><a href="exam_view.php">Examination</a></span></li>
<li class="leaf has-children menu-mlid-1598"><span title="Marks"><a href="marks.php">Marks</a></span></li>
<li class="leaf has-children menu-mlid-1594"><span title="Result"><a href="marks_view.php">Result</a></span></li>
<li class="leaf has-children menu-mlid-1594"><span title="Faculty Status"><a href="user_details.php">Faculty Status</a></span></li>
<li class="leaf has-children menu-mlid-1598"><span title="Data Module"><a href="data_view.php" >Data Module</a></span></li>
<li class="lasf has-children menu-mlid-1598"><span title="Logout"><a href="lib/login.php?act=logout" rel="facebox">Logout</a></span></li>
<li class="leaf has-children menu-mlid-1598"><span title="Student Zone"><a href="student_login.php" rel="facebox ">Student Zone</a></span></li>
</ul></div>
<div style="background:white" style="height:350px;">