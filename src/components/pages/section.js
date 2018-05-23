import React, { Component } from 'react';

class Section extends Component {

  constructor(props) {
    super(props);
    this.state= {
      title: props.title,
      text1: props.text1,
      text2: props.text2,
      text3: props.text3,
    };
  }

  render() {
    var picpath = this.state.pict;
    return (
      <div className='container-fluid section row'>
        <div className='col-sm-8 info'>
          <h2>{this.state.title}</h2>
           <ul>
            <li>{this.state.text1}</li>
            <li>{this.state.text2}</li>
            <li>{this.state.text3}</li>
           </ul>
        </div>
        

      </div>
    );
  }
}

export default Section;
