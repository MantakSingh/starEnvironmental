import { Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { styles as globalStyles } from './styles/styles';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View
        style={[
          globalStyles.container,
          { justifyContent: 'center', alignItems: 'center', flex: 1 },
        ]}
      >
        <Text
          style={[
            globalStyles.sectionTitle,
            {
              fontSize: 36,       // Bigger text
              fontWeight: 'bold', // Make it bold
              marginBottom: 20,
              textAlign: 'center', // Ensure it’s centered
            },
          ]}
        >
          404 - Page Not Found
        </Text>
        <Text style={globalStyles.sectionText}>
          The page you are looking for does not exist.
        </Text>
      </View>
    </>
  );
}
