import React from 'react';
import './App.css';
import bankOne from "./bankOne"
import bankTwo from './bankTwo';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display : bankOne,
      stringDisplay : "",
      situation : 1

    }
    this.playAudioPress = this.playAudioPress.bind(this)
  }

  componentDidMount(){
    document.addEventListener("keydown",this.playAudioPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.playAudioPress);
  }

  playAudioClick(event)
  {
    const number = event.target.id;
    const index = number.charAt(number.length-1)
    this.setState({
      stringDisplay: this.state.display[index].id
    }
    )
    const audioEl = document.getElementsByClassName("clip")[index]
    audioEl.play()
  }

  playAudioPress(event){
    const index = (keyCode) => {
      switch(keyCode){
        case 81 :
          return 0;
        case 87 :
          return 1;
        case 69 :
          return 2;
        case 65 :
          return 3;
        case 83 :
          return 4;
        case 68 :
          return 5;
        case 90 :
          return 6;
        case 88 :
          return 7;
        case 67 :
          return 8;
        }
      }
    
    
    const a = index(event.keyCode);
    this.setState({
      stringDisplay : this.state.display[a].id
    })
    const audioEl = document.getElementsByClassName("clip")[a]
    audioEl.play()      
    }

  changeKey(keyCode){
    

  }

  changeMode(){
    this.state.display === bankOne ? this.setState({display: bankTwo}) : this.setState({display: bankOne})
  }


  render(){
  return (
    <div id="drum-machine">
      <h1>Drum Machine</h1>
      <p>Type or Click on buttons to play music</p>
      <div id="display">
        <div className="row">
        <div id = "div-btn0" className="display-child col-m-4"> <button id={this.state.display[0].id} className="drum-pad btn-primary" onClick={this.playAudioClick.bind(this)} onKeyDown={this.playAudioPress.bind(this)}>Q<audio id={this.state.display[0].keyTrigger} className="clip" src={this.state.display[0].url}></audio></button></div>
        <div id = "div-btn1" className="display-child col-m-4"> <button id={this.state.display[1].id} className="drum-pad btn-primary" onClick={this.playAudioClick.bind(this)} onKeyDown={this.playAudioPress.bind(this)}>W<audio id={this.state.display[1].keyTrigger} className="clip" src={this.state.display[1].url}></audio></button></div>
        <div id = "div-btn2" className="display-child col-m-4"> <button id={this.state.display[2].id} className="drum-pad btn-primary" onClick={this.playAudioClick.bind(this)} onKeyDown={this.playAudioPress.bind(this)}>E<audio id={this.state.display[2].keyTrigger} className="clip" src={this.state.display[2].url}></audio></button></div>
        </div>
        <div className="row">
        <div id = "div-btn3" className="display-child col-m-4"> <button id={this.state.display[3].id} className="drum-pad btn-primary" onClick={this.playAudioClick.bind(this)} onKeyDown={this.playAudioPress.bind(this)}>A<audio id={this.state.display[3].keyTrigger} className="clip" src={this.state.display[3].url}></audio></button></div>
        <div id = "div-btn4" className="display-child col-m-4"> <button id={this.state.display[4].id} className="drum-pad btn-primary" onClick={this.playAudioClick.bind(this)} onKeyDown={this.playAudioPress.bind(this)}>S<audio id={this.state.display[4].keyTrigger} className="clip" src={this.state.display[4].url}></audio></button></div>
        <div id = "div-btn5" className="display-child col-m-4"> <button id={this.state.display[5].id} className="drum-pad btn-primary" onClick={this.playAudioClick.bind(this)} onKeyDown={this.playAudioPress.bind(this)}>D<audio id={this.state.display[5].keyTrigger} className="clip" src={this.state.display[5].url}></audio></button></div>
        </div>
        <div className="row">
        <div id = "div-btn6" className="display-child col-m-4"> <button id={this.state.display[6].id} className="drum-pad btn-primary" onClick={this.playAudioClick.bind(this)} onKeyDown={this.playAudioPress.bind(this)}>Z<audio id={this.state.display[6].keyTrigger} className="clip" src={this.state.display[6].url}></audio></button></div>
        <div id = "div-btn7" className="display-child col-m-4"> <button id={this.state.display[7].id} className="drum-pad btn-primary" onClick={this.playAudioClick.bind(this)} onKeyDown={this.playAudioPress.bind(this)}>X<audio id={this.state.display[7].keyTrigger} className="clip" src={this.state.display[7].url}></audio></button></div>
        <div id = "div-btn8" className="display-child col-m-4"> <button id={this.state.display[8].id} className="drum-pad btn-primary" onClick={this.playAudioClick.bind(this)} onKeyDown={this.playAudioPress.bind(this)}>C<audio id={this.state.display[8].keyTrigger} className="clip" src={this.state.display[8].url}></audio></button></div>
        </div>
        <div>{this.state.stringDisplay.substring(0,this.state.stringDisplay.length-1)}</div>
      </div>
        <div id="div-controlbutton"><button id="controlbutton" className="btn-info" onClick={this.changeMode.bind(this)}>Change Mode</button></div>
        <div>{this.state.display === bankOne ? <h3>Bank One</h3> : <h3>Bank Two</h3>}</div>
        <p>Created by Duc Pham</p>
    </div>
  );
  }
}

export default App;
