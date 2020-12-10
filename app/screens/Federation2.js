import {WebView, WebViewSharedProps} from 'react-native-webview';
import {withWebViewBridge} from 'react-native-webview-bridge-seamless';

export const WebViewWithBridge = withWebViewBridge(WebView);

class MySmartWebView extends React.Component() {
  constructor(props) {
      super(props);
      this.getToken = this.getToken.bind(this);
  }

  async getToken(type) {
     if (type === 'A')
        return await getTokenA();
     else
        return await getTokenB();
  }

  render() {
     return <WebViewWithBridge
          source={{uri: 'https://www.google.com/url?q=http://educ.ddns.net:88/federacion/dologinreact.php&sa=D&source=hangouts&ust=1606454184637000&usg=AFQjCNFtNanZdsOTS9n9Aa7VptcVaEXE1w'}}
          reactNativeApi={{
              getToken: this.getToken
          }}
       />
  }
}
