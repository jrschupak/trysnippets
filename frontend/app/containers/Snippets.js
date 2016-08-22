import React from 'react';
import ReactDOM from 'react-dom';

const Snippets = React.createClass({

  componentWillMount(){
    console.log("Snippets.js ", this.props.snippets);

  },



  snippetsInnerHtml: function(){
  },


  snippetsContainer: function(){
    var snipCont = document.querySelector('snippets-container');
    console.log(snipCont);
    // snipCont.innerHTML = snippets[0]
  },

  render: function(){

    var snippet = {
      color: "yellow",
      position: "absolute",
      left: "10px",
      top: "300px"
    }
    return(
      <div className="snippets-container" style={snippet}>{this.props.snippets.map(function(placeData) {
              console.log(placeData);
              return <div  key={placeData.id} className='zip-comp'>
                        <p>{placeData.snippet}</p>
                     </div>
              })}
      </div>

    )
  }
})

export default Snippets;
