import React from 'react';
import ReactDOM from 'react-dom';

const Snippets = React.createClass({




  snippetsInnerHtml: function(){

  },


  snippetsContainer: function(){
    var snipCont = document.querySelector('snippets-container');
    console.log(snipCont);
    // snipCont.innerHTML = snippets[0]
  },

  render: function(){
    return(
      <div className="snippets-container">
        
      </div>

    )
  }
})

export default Snippets;
