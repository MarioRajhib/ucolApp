import React, {Component} from 'react';
import {View, Alert} from 'react-native';
//import PantallaPrincipal from './PantallaPrincipal';
import WebView from 'react-native-webview';
/*
const HTML = `<!DOCTYPE html>\n
<html>
  <head>
    <title>Messaging</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 100;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #ccc;
      }
    </style>
  </head>
  <body>
    <button onclick="sendPostMessage()">Send post message from JS to WebView</button>
    <p id="demo"></p>    
    <script>
      function sendPostMessage() {
        window.ReactNativeWebView.postMessage('Message from JS');
      }
      window.addEventListener('message',function(event){
        console.log("Message received from RN: ",event.data)
      },false);
    </script>
  </body>
</html>`;
*/
type Props = {};
type State = {};

export default class Messaging extends Component<Props, State> {
  state = {};

  constructor(props) {
    super(props);
    this.webView = React.createRef();
  }
//http://educ.ddns.net:88/federacion/dologinreact.php
  render() {
    return (
      <View style={{height: 820}}>
        <WebView
          ref={this.webView}
          source={{uri: 'http://educ.ddns.net:88/federacion/dologininreactcanal.php'}}
          onLoadEnd={()=>{
            
            //this.webView.current.postMessage('Hello from RN');
            //Alert.alert('Hola');
          }}
          automaticallyAdjustContentInsets={false}
          onMessage={(e: {nativeEvent: {data?: string}}) => {
            
            Alert.alert('Message received from JS: ', e.nativeEvent.data);
            //Alert.alert('Hola');
          }}
          
        />
        
      </View>
    );
  }
}