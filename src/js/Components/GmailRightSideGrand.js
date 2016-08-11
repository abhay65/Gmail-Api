var React=require("react");
var GmailRightSideGrand = React.createClass({
  render: function() {
     return (

       <tr>
         <td>{this.props.msgFrom}</td>
         <td>{this.props.msgSubject}</td>
         <td>{this.props.mgsDate}</td>
       </tr>
       
     );
   }
 });
module.exports=GmailRightSideGrand;
