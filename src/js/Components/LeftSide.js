var React=require("react");
//var {render}=require("react-dom");
//var GrandChildComponent=require("./GrandChildComponent.js");
//var GrandChildComponent1=require("./GrandChildComponent1.js");


var LeftSide=React.createClass({
 render:function(){
   return(
     <nav className="navbar navbar sidebar" role="navigation">
<div className="container-fluid mynav"><div className="navbar-header">
<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
<span className="sr-only">Toggle navigation</span>
<span className="icon-bar"></span>
<span className="icon-bar"></span>
<span className="icon-bar"></span>
</button></div><div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
<ul className="nav navbar-nav">
<ComposeComponent/>
<li className="active"><a href="#">Inbox<span className="pull-right hidden-xs showopacity glyphicon glyphicon-home"></span></a></li>
<li ><a href="#">Sent<span className="pull-right hidden-xs showopacity glyphicon glyphicon-user"></span></a></li>
<li ><a href="#">Drafts<span className="pull-right hidden-xs showopacity glyphicon glyphicon-envelope"></span></a></li>
<li ><a href="#">All<span className="pull-right hidden-xs showopacity glyphicon glyphicon-envelope"></span></a></li>
<li ><a href="#">Important<span className="pull-right hidden-xs showopacity glyphicon glyphicon-envelope"></span></a></li>
<li className="dropdown">
<a href="#" className="dropdown-toggle" data-toggle="dropdown">Settings <span className="caret"></span><span className="pull-right hidden-xs showopacity glyphicon glyphicon-cog"></span></a>
<ul className="dropdown-menu forAnimate" role="menu">
<li><a href="#">Action</a></li>
<li><a href="#">Another action</a></li>
<li><a href="#">Something else here</a></li>
<li className="divider"></li>
<li><a href="#">Separated link</a></li>
<li className="divider"></li>
<li><a href="#">One more separated link</a></li>
</ul>
</li>
</ul>
</div>
</div>
</nav>            );
             }              });            //render(<MainComponent/>,document.getElementById('app'));
           module.exports=LeftSide;
