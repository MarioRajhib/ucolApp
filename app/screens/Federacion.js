import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://www.google.com/url?q=http://educ.ddns.net:88/federacion/dologinreact.php&sa=D&source=hangouts&ust=1606454184637000&usg=AFQjCNFtNanZdsOTS9n9Aa7VptcVaEXE1w' }} style={{ marginTop: 20 }} />;
    console.error(getInformationFromApi);
    }
}

const getInformationFromApi = () => {
    return fetch('https://www.google.com/url?q=http://educ.ddns.net:88/federacion/dologinreact.php&sa=D&source=hangouts&ust=1606454184637000&usg=AFQjCNFtNanZdsOTS9n9Aa7VptcVaEXE1w')
      .then((response) => response.json())
      .then((json) => {
        return json.information.idusuario;
      })
      .catch((error) => {
        console.error(error);
      });
};