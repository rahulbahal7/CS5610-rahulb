<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset='utf-8' />

    <title>Profile - Rahul Bahal</title>
	
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link rel="stylesheet" type="text/css" href="css/responsive.css">
	<link rel="stylesheet" type="text/css" href="css/default.css" media="all" />
	<link rel="stylesheet" href="css/fixed-navigation.css" type="text/css" />>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="js/jquery.flexslider.js"></script>
	<script src="js/default.js"></script>
</head>

</head>
<body>

    <div class="pad">

        <form id="form1" runat="server">

                <ul class="master_navigation">
                    
                </ul>

            <div id="pagewidth">
		<header id="header">
			<div class="center">
                <nav>                    
		            <a href="sitestatistics/" class="navitem" target="_blank">SiteStatistics</a>
                    <a href="statistics/" class="navitem" target="_blank">Statistics</a>
                    <a href="source/" class="navitem" target="_blank">Source</a>
                    <a href="search/" class="navitem" target="_blank">Search</a>
                    <a href="searchtree/" class="navitem" target="_blank">SearchTree</a>
                    <a href="textview/" class="navitem" target="_blank">TextView</a>
                    <a href="filelist.aspx" class="navitem" target="_blank">FileList</a>
                    <a href="autofile.aspx" class="navitem" target="_blank">AutoFile</a>
                    <a href="images/autoimage.aspx" class="navitem" target="_blank">Images</a>
                    <a href="blog/" class="navitem" target="_blank">Blog</a>
                    <a href="https://github.com/rahulbahal7/CS5610-rahulb" class="splnavitem" target="_blank">Git</a>
               </nav>
			</div>
		</header>
		<div id="content">
			<section class="row">
				<div class="centre" id="w">
					<header class="clearfix">
						<div id="info">			
							<h1 class="resumeh1"><span itemprop="name">Rahul Bahal</span></h1>
							<h3><span itemprop="jobTitle">&nbsp;&nbsp;Graduate Student in Computer Science</span></h3>
							<small itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
								<span itemprop="addressLocality">&nbsp;&nbsp;Boston</span>, 
								<span itemprop="addressRegion">&nbsp;&nbsp;Massachusetts</span>, 
								<span itemprop="addressCountry">&nbsp;&nbsp;USA</span>
							</small>
							<small><span itemprop="email">&nbsp;&nbsp;rahulb@ccs.neu.edu</span></small>
							<small><a href="http://www.github.com/rahulbahal7" >&nbsp;&nbsp;My Portfolio</a> • 
                                <a href="https://www.linkedin.com/in/rahulbahal">&nbsp;My Profile</a></small>
						</div>

						<div id="photo">
							<img src="img/pic.jpg" alt="Rahul Bahal">
						</div>
					</header>

					<section id="profile">
						<p>
                            I'm a Currently a candidate for Master of Science in Computer Science at Northeastern University, Boston. 
                            I enjoy developing web applications, playing games, soccer, listening to heavy metal music, playing drums 
                            and (very recently) snowboarding. I am enthusiastic about web technologies and web application development
                            in general and that's why I decided to take this course (CS5610) under Prof. Jose Annunziato to learn new 
                            technique and technologies.</p>
					</section>

					<section id="skills" class="clearfix">
						<br /><h3 class="resumeh3">Skillset</h3>					
                        <section id="skills-left">
							<h4>Languages</h4>
							<ul>
								<li>C/C++</li>
								<li>Java </li>
								<li>NodeJS</li>
								<li>AngularJS</li>
								<li>Javascript &amp; jQuery</li>
								<li>HTML5 &amp; CSS3</li>
								<li>PHP</li>
                                <li>Racket</li>
							</ul>
						</section>
                        <section id="skills-left1">
							<h4>Frameworks &amp; Tools</h4>
							<ul>
								<li>JUnit</li>
								<li>Bootstrap</li>
								<li>Selenium</li>
								<li>XAMPP</li>
								<li>Eclipse</li>
								<li>Maven</li>
								<li>Cygwin</li>
                                <li>JIRA</li>
                                <li>Jenkins</li>
							</ul>
						</section>

						<section id="skills-right">
							<h4 itemprop="about">&nbsp;&nbsp;&nbsp;&nbsp;Database</h4>
							<ul>
								<li itemprop="itemListElement">MySQL</li>
								<li itemprop="itemListElement">MongoDB</li>
							</ul>
						</section>
					</section>

					<section id="education">
						<h3 class="resumeh3">EDUCATION</h3>
						<p><strong>Northeastern University,</strong> Boston, MA
                        <br />College of Computer and Information Science
                        <br />Sept. 2014-present
						</p>
                        <p><strong>Guru Gobind Singh Indraprastha University,</strong> New Delhi, India
                        <br />Member of Web Development Team, Soccer Team, College Band (Drummer)
                        <br />June 2013
						</p>
					</section>

					<section id="experience">
						<h3 class="resumeh3">WORK EXPERIENCE</h3>
						<p><strong>Compro Technologies,</strong> New Delhi, India
                        <br />Associate Software Engineer (Client: Cengage Learning)
                        <br />July 2013 – May 2014
						</p>
					</section>

					<section id="articles">
						<h3 class="resumeh3">ACADEMIC PROJECT</h3>
						<p><strong>Communication and Feedback System using Coordinate Mapped Pixels</strong><br />
                            Reduced amount of data transfer by 24% without compression by loading only the requested process. Published 
                            a research paper on the same concept in “International Journal of Engineering Research and Technology” (Nov 2013).
							<br /><a href="http://www.ijert.org/view-pdf/6192/cloud-architecture-with-coordinate-mapped-pixels">
                                Cloud Architecture with Coordinate Mapped Pixels</a> Published in Vol.2 - Issue 11 (November - 2013)
						</p>
					</section>

				</div>
			</section>			
			
			<section id="boxes" class="row grey">
				<div class="center">
					<h1>COURSE HIGHLIGHTS</h1>
					<strong class="subHeading">Experiments, Project and Documentation</strong>
					<div class="columns">						                                      
						
						<article class="news oneThird">
							<div>
								<h3 class="onethirdh3">DOCUMENTATION & VIDEO</h3>
								<div class="content">									
									<p id="onethirdtextcolor">Here you can find the information about the project with detailed explainations about the features,
                                       working and different modules that have been implemented.</p>
								</div>
								<div class="readMore onethirdbutton"><a href="story/index.htm?../project/story.txt" target="_blank" class="btn btnSmall"><span>DOCUMENTATION</span></a></div>
                                <div class="readMore onethirdbutton"><a href="https://www.youtube.com/watch?v=yOMYsG9Esgc" target="_blank" class="btn btnSmall"><span>VIDEO</span></a></div>
							</div>
						</article>

                        <article class="news oneThird">
							<div>
								<h3 class="onethirdh3">PROJECT</h3>
								<div class="content">									
									<p  id="onethirdtextcolor">I wanted a viewer where I could do more than to just follow people on Git and 
                                       that had the features that I required. Hence I tried to do justice to that by implemeting my own version of 
                                       a Git Viewer as my project using MEAN stack.</p>
								</div>
								<div class="readMore onethirdbutton">
                                    <a href="http://gitviewer-rbahal.rhcloud.com/#/login" class="btn btnGreen" target="_blank"><span>PROJECT</span></a></div>
							</div>
						</article>

                        <article class="news oneThird">
							<div>
								<h3 class="onethirdh3">EXPERIMETNS</h3>
								<div class="content">
									<p id="onethirdtextcolor">A big Thank You to Prof. Jose Annunziato for guiding me throughout the course and answering all my questions.</p>
								</div>
								<div class="readMore onethirdbutton">
                                    <a href="story/index.htm?../experiments/story.txt" class="btn btnBlue"><span>EXPERIMENTS<span></a>
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>
		</div>
		<footer id="footer">
			<div class="center">
				
				You can reference the experiments, page source or the project(and it's documentaiton). I believe in Open Source and Open Source Projects :)
			<br /><br />&copy; Created by Rahul Bahal
            </div>
		</footer>
	</div>

        </form>
    </div>
</body>
</html>
