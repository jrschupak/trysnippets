import React from 'react';
import axios from 'axios';
import Loader from 'react-loader';
import Forms from './Form.js';




const App = React.createClass({

  getInitialState: function(){
    return{
      snippets: {snippetArr: [{id:0, snippet:"<div>THis is the first snippet</div>"}, {id:1, snippet: "<div>This is the second snippet</div>"}] },
      checkedBoxArr: [],
      checkboxes: '',
      displaySnippets: {}
    }
  },

  componentDidMount(){

      this.setState({
        checkboxes: document.querySelectorAll('input')
      })


    console.log("this is the checkboxes", this.state.checkboxes);

    console.log(this.state.checkedBoxArr);

  },

  isChecked: function(){
    for(var i = 0; i < this.state.checkboxes.length; i++){
      if(this.state.checkboxes[i].checked === true){
        console.log("isChecked function");
        this.state.checkedBoxArr.push(this.state.checkboxes[i].value);
        console.log(this.state.checkedBoxArr);
      }
    }
    for(var i = 0; i < this.state.checkedBoxArr.length; i++){
      console.log("checkedBoxArr[i] ", this.state.checkedBoxArr[i]);
      for(var j = 0; j < this.state.snippets.snippetArr.length; i++){
        console.log("snippets[j] ", this.state.snippets.snippetArr[j]);
        if(this.state.checkedBoxArr[i] === this.state.snippets.snippetArr[j].id){
          this.state.displaySnippets.push(this.state.snippets[j])
        }
      }
    }
    return console.log(this.state.displaySnippets);

  },
  // componentWillMount(){
  //   console.log(this.state.snippets.snippetArr[0]);
  //   var checkboxes = document.querySelectorAll('input');
  //   console.log(checkboxes);
  // },

  render: function() {

    // styling can go here
    return (
      <Forms snippets={this.state.snippets}  isChecked={this.isChecked}/>
    )
  }
});

export default App;
