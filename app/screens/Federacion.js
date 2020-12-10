import * as React from 'react';
import { WebView } from 'react-native-webview';
import PantallaPrincipal from './PantallaPrincipal';

export default class App extends React.Component {
  render() {
    return <WebView source={{ 
    uri: 'https://www.google.com/url?q=http://educ.ddns.net:88/federacion/dologinreact.php&sa=D&source=hangouts&ust=1606454184637000&usg=AFQjCNFtNanZdsOTS9n9Aa7VptcVaEXE1w' }} 
    style={{ 
    marginTop: 20, 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center' }} />;
    console.error(getInformationFromApi);
    }
}

const getInformationFromApi = () => {
    return fetch('https://www.google.com/url?q=http://educ.ddns.net:88/federacion/dologinreact.php&sa=D&source=hangouts&ust=1606454184637000&usg=AFQjCNFtNanZdsOTS9n9Aa7VptcVaEXE1w')
      .then((response) => response.json())
      .then((json) => {
        return PantallaPrincipal;
      })
      .catch((error) => {
        console.error(error);
      });
};