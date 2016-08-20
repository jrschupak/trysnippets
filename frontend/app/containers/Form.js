import React from 'react';
import ReactDOM from 'react-dom';
import Snippets from './Snippets.js';


const Form = React.createClass({

  componentWillMount(){
      console.log(this.props.snippets);
      var checkboxes = document.querySelectorAll('input');
      console.log(checkboxes);
  },

  render: function(){
    var style = {
      align: "vertical"
    }

    return(
      <div className="col-sm-12" style={style}>
        <form className="checkboxes">
          <input type="checkbox" value={0} /><p>HelloCheckbox</p> <br />
          <input type="checkbox" value={1} /><p>HelloCheckbox</p> <br />
        </form>

        <button onClick={this.props.isChecked}>Submit</button>
        <Snippets snippets={this.props.snippets}/>
      </div>
    )
  }
})

export default Form;
