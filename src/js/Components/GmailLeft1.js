var React=require("react");
var GmailLeft1 = React.createClass({
  render: function(){
    return(
    <tr>
    <td>
    {this.props.labelData.name}
    </td>
    </tr>
);
}
});
module.exports=GmailLeft1;
