import { ThemeProvider } from 'react-native-elements';
import './firebase';
import RootNavigation from './src/navigation';

export default function App() {

  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
}
