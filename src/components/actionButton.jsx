import React from 'react'
import Highlight from 'react-highlight'
import 'highlight.js/styles/agate.css'
let cssCode = ''
class ActionButton extends React.Component {
    constructor(props) {
      super(props)
    }
    shouldComponentUpdate(nextProps, nextState) {
        // if (nextState.value == this.refs.abc.value)
        //     return false;
        // else
            return true
    }

    _handleChange = (event) => {

        // this.props.func()
        this.setState({value:event.target.value});
    }
	handleClick = (event) => {

	    event.preventDefault()
	    //this.props.func()
	    var el = event.target
	    console.log(el)
  	}
  	copyToClipboard = (e) => {
  		console.log('clicked')
      var textField = document.createElement('textarea')
      // var code = JSON.stringify("width:"+this.props.cssStyle.width+";"+
      // "height:"+this.props.cssStyle.height+";"+
      // "background:"+this.props.cssStyle.background+";"+
      // "border-radius:"+this.props.cssStyle.borderRadius+";"+
      // "border:"+this.props.cssStyle.border+";"+
      // "opacity:"+this.props.cssStyle.opacity+";"+
      // "box-shadow:"+this.props.cssStyle.boxShadow+";")
      var code = JSON.stringify(cssCode)
      code = code.replace(/\/r/g, '\n');
	    textField.innerText = code.replace (/(^")|("$)/g, '')
	    document.body.appendChild(textField)
	    textField.select()
	    document.execCommand('copy')
	    alert("Code Copied")
	    textField.remove()
    }
    render() {
        if(this.props.name == "boxGenerator"){
          cssCode =  "width:"+this.props.cssStyle.width+";"+"\n"+
           "height:"+this.props.cssStyle.height+";"+"\n"+
           "background:"+this.props.cssStyle.background+";"+"\n"+
           "border-radius:"+this.props.cssStyle.borderRadius+";"+"\n"+
           "border:"+this.props.cssStyle.border+";"+"\n"+
           "opacity:"+this.props.cssStyle.opacity+";"+"\n"+
           "box-shadow:"+this.props.cssStyle.boxShadow+";"
        }
        else if(this.props.name == "textGenerator"){
          cssCode = "color:"+this.props.cssStyle.color+";"+"\n"+
          "fontSize:"+this.props.cssStyle.fontSize+";"+"\n"+
          "fontWeight:"+this.props.cssStyle.fontWeight+";"+"\n"+
          "fontStyle:"+this.props.cssStyle.fontStyle+";"+"\n"+
          "border:"+"none"
        }
        return (
      		<div>
		        <button onClick={this.handleClick} type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#codeModal">View Code</button>
		        <div id="codeModal" className="modal fade" role="dialog">
		          <div className="modal-dialog">
		            <div className="modal-content">
		              <div className="modal-body">
		                <Highlight className='css'>
                      {cssCode}
						       </Highlight>
		              </div>
		              <div className="modal-footer">
				        <button onClick={this.copyToClipboard} type="button" className="btn btn-default" data-dismiss="modal" >Copy to Clipboard</button>
				      </div>
		            </div>
		          </div>
		        </div>
		     </div>

    	)
    }
};

ActionButton.propTypes = {
    name: React.PropTypes.string,
    ivalue: React.PropTypes.string,
    //func: React.PropTypes.func,
    propname: React.PropTypes.string,
    //boxStyle: React.PropTypes.Object,
    cssStyle: React.PropTypes.Object
}

export default ActionButton;