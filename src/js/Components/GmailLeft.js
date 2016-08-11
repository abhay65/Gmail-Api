var React=require("react");
var GmailLeft1 =require('./GmailLeft1');
var GmailLeft = React.createClass({
 render: function() {
   that=this;
     var rows = [];
     console.dir(this.props);
    that.props.labelData.forEach(function(labelData) {
    if(labelData.name==="INBOX"||labelData.name==='SENT'||labelData.name==='TRASH'||labelData.name==="IMPORTANT"||labelData.name==="DRAFT")
    {
      rows.push(<GmailLeft1 labelData={labelData} key={labelData.name} />);
    }
   });
    return (
      <table>
      <tbody>{rows}</tbody>
      </table>
    );
 }
});
module.exports=GmailLeft;
