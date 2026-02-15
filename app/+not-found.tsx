import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { styles as globalStyles } from './styles/styles';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={[globalStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={[globalStyles.sectionTitle, { marginBottom: 20 }]}>
          404 - Page Not Found
        </Text>
        <Link href="/" style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Go back to Home screen!</Text>
        </Link>
      </View>
    </>
  );
}
