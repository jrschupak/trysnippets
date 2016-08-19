import React from 'react';
import ReactDOM from 'react-dom';

const Snippets = React.createClass({

  componentWillMount(){
    console.log(this.props.snippets);
  },

  snippetsInnerHtml: function(){

  },


  snippetsContainer: function(){
    var snipCont = document.querySelector('snippets-container');
    console.log(snipCont);
    // snipCont.innerHTML = snippets[0]
  },

  render: function(){
    return(
      <div className="snippets-container">{this.props.snippets.snippetArr.map(function(placeData) {
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
