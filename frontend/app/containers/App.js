import React from 'react';
import axios from 'axios';
import Loader from 'react-loader';
import Forms from './Form.js';




const App = React.createClass({

  getInitialState: function(){
    return{
      snippets: {snippetArr: ["<div>THis is the first snippet</div>", "<div>This is the second snippet</div>"] }
    }
  },

  componentWillMount(){
    console.log(this.state.snippets.snippetArr[0]);
  },

  render: function() {

    // styling can go here
    return (
      <Forms snippets={this.state.snippets.snippetArr}/>
    )
  }
});

export default App;
