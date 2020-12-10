import React, {Component} from 'react';
import {View, Alert} from 'react-native';

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

  render() {
    return (
      <View style={{height: 820}}>
        <WebView
          ref={this.webView}
          source={{uri: 'https://www.google.com/url?q=http://educ.ddns.net:88/federacion/dologinreact.php&sa=D&source=hangouts&ust=1606454184637000&usg=AFQjCNFtNanZdsOTS9n9Aa7VptcVaEXE1w'}}
          onLoadEnd={()=>{this.webView.current.postMessage('Hello from RN');}}
          automaticallyAdjustContentInsets={false}
          onMessage={(e: {nativeEvent: {data?: string}}) => {
            Alert.alert('Message received from JS: ', e.nativeEvent.data);
          }}
        />
      </View>
    );
  }
}