var React=require("react");
//var {render}=require("react-dom");
var GrandRightSide=require("./GrandRightSide.js");
var GrandRightSide2=require("./GrandRightSide2.js");
var RightSide=React.createClass({
 render:function(){
   return(
                       <div>
                             <div className="container-fluid">
    <div className="row">
        <div className="col-md-12">
            <div className="row">
<div className="col-md-12">     <GrandRightSide2/>                 </div>
            </div>
            <div className="row">
<div className="col-md-12">
<GrandRightSide/>
    </div>
            </div>
        </div>
    </div>
</div>                </div>              );
             }              });            //render(<MainComponent/>,document.getElementById('app'));
           module.exports=RightSide;
