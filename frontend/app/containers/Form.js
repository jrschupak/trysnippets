import React from 'react';
import ReactDOM from 'react-dom';


const Form = React.createClass({
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
        <button>Submit</button>
      </div>
    )
  }
})

export default Form;
