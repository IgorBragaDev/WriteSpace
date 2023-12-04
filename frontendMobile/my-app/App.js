import { AppRegistry } from 'react-native';
import AppStack from "./src/routes/AppStack";
export default function App() {
  return (
    <AppStack/>
  );
}

AppRegistry.registerComponent('App', () => AppStack);

