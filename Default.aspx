<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset='utf-8' />

    <title>Rahul Bahal</title>

    <style type="text/css">
        .header-menu {
            top: 0px;
            left: 0px;
            right: 0px;
            position: fixed;
            min-height: 50px;
            margin-bottom: 30px;
            vertical-align: middle;
            background-color: #222;
            border-color: #080808;
            width: auto;
            border-width: 0px 0px 1px;
            box-shadow: none;
            max-height: 300px;
            padding-right: 20px;
            padding-left: 20px;
        }

        ul.master_navigation {
            font-size: 100%;
            font-weight: bold;
            text-align: center;
            list-style: none;
            margin: 0.5em 0;
            margin-top: 15px;
            padding: 0;
        }

            ul.master_navigation li {
                display: inline-block;
                padding: 0 0.5%;
            }

        a {
            color: #219ab3;
            font-weight: bold;
            color: white;
            text-decoration: none;
        }

            a:visited {
                color: white;
            }

            a:hover {
                color: #219ab3;
            }

        p {
            text-align: justify;
        }
    </style>

    <style type="text/css" media="screen">
        body {
            background-color: lightgray;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

            max-width: 100%;
            margin: 0;
            padding: 0;
        }

        .pad {
            padding: 10px;
        }
    </style>

    <style>
        h2{
            color: #337ab7;
            font-size: 20px;
            font-family:Lora,"Helvetica Neue",Helvetica,Arial,sans-serif;
        }

        .home-img {
            width: 30%;
            float: left;
            margin-right: 20px;
            min-width: 350px;
        }

        .special a{
            color: #219ab3;
        }

        .content-container {
            margin-top: 50px;
        }

        .self-image {
            width: 18%;
            height: 20%;
            float: left;
            margin-right: 20px;
            min-width: 250px;
        }

        .main-content {
            margin-left: 20px;
            width: 95%;
        }
    </style>
</head>
<body>

    <div class="pad">

        <form id="form1" runat="server">

            <div class="header-menu">

                <ul class="master_navigation">
                    <li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
                    <li><a href="statistics/" target="_blank">Statistics</a></li>
                    <li><a href="source/" target="_blank">Source</a></li>
                    <li><a href="search/" target="_blank">Search</a></li>
                    <li><a href="searchtree/" target="_blank">SearchTree</a></li>
                    <li><a href="textview/" target="_blank">TextView</a></li>
                    <li><a href="filelist.aspx" target="_blank">FileList</a></li>
                    <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
                    <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>
                    <li><a href="blog/" target="_blank">Blog</a></li>
                    <li class="special"><a href="story/index.htm?../experiments/story.txt" target="_blank">Experiments</a></li>
                    <li class="special"><a href="https://github.com/rahulbahal7/CS5610-rahulb" target="_blank">Git</a></li>
                </ul>
            </div>
            <hr />
            <div class="content-container">
                <img class="self-image" src="images/home_page/self.jpg" />
                <div class="main-content">
                    
                       <hr /><h2> Hi! I am Rahul Bahal. </h2>   
                    
                    <p>
                        
                        I am enthusiastic about web technologies and web application development in general. I will be learning new
                        technologies under Prof. Jose Annunziato and will also be applying some techniques of my own during 
                        the duration of this course.  
                    </p>
                    <hr />
                    <h3>About me :)</h3>
                    <p>
                        Currently a candidate for Master of Science in Computer Science from Northeastern University, Boston. I enjoy 
                        developing web applications, playing games, soccer, listening to heavy metal music, playing drums
                        and (very recently) snowboarding!          
                    </p>
                    <hr />
                    <h3>Soon...</h3>
                    <p>
                        This page will be updated regularly and along the way new experiments and blog enteries will be added. The
                        page will also see the addition of a project that I will be working on by applying some powerful tools,
                        frameworks and techniques.
                    </p>
                    <hr />
                </div>
            </div>

        </form>
    </div>
</body>
</html>
