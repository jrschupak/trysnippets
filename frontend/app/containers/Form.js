import React from 'react';
import ReactDOM from 'react-dom';
import Snippets from './Snippets.js';


const Form = React.createClass({

  componentWillMount(){
      console.log(this.props.snippets);
  },

  render: function(){
    var style = {
      align: "vertical"
    }

    return(
      <div className="col-sm-12" style={style}>
        <form>
          <input type="checkbox" value={1} /><p>HelloCheckbox</p> <br />
          <input type="checkbox" value={1} /><p>HelloCheckbox</p> <br />
          <input type="checkbox" value={1} /><p>HelloCheckbox</p> <br />
          <input type="checkbox" value={1} /><p>HelloCheckbox</p> <br />
          <input type="checkbox" value={1} /><p>HelloCheckbox</p>
        </form>
        <button onClick="">Submit</button>
        <Snippets snippets={this.props.snippets}/>
      </div>

    )
  }
})

export default Form;
