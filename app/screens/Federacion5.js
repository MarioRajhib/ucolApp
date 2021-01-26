import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
//import { WebView } from 'react-native-webview';
import { WebView } from 'react-native-webview-messaging/WebView';

export default class Federacion5 extends Component {
  render() {
    return (
      <View style={{height: 820}}>
        <WebView
          ref={ webview => { this.webview = webview; }}
          source={{uri: 'http://educ.ddns.net:88/federacion/dologininreactcanal.php'}}
        />
        
      </View>
    );
  }
/*<TouchableHighlight onPress={this.sendMessageToWebView} underlayColor='transparent'>
          <Text>Send message to WebView</Text>
        </TouchableHighlight>*/
  componentDidMount() {
    this.webview.messagesChannel.on('text', text => console.log(text));
    this.webview.messagesChannel.on('json', json => console.log(json));
    this.webview.messagesChannel.on('custom-event-from-webview', eventData => console.log(eventData));
  }

  sendMessageToWebView = () => {
    this.webview.sendJSON({
      payload: 'JSON from RN'
    });

    this.webview.send('plain text from RN');

    this.webview.emit('custom-event-from-rn', { payload: 'Custom event from RN' });
  }
}