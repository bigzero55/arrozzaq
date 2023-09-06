import { Slot, Stack} from 'expo-router';
import { ThemeProvider } from 'react-native-rapi-ui';

export default function HomeLayout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}