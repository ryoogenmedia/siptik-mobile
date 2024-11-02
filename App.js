import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { WebView } from "react-native-webview";
import * as SplashScreen from "expo-splash-screen";
import Spinner from "react-native-loading-spinner-overlay";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
          <Spinner
            overlayColor="rgba(0,0,0,0.5)"            
            size="large"
            color="#E55223"
            visible={loading}
          />
      ) : null}

      <ScrollView
        contentContainerStyle={{ flex: 1 }}
      >
        <WebView
          source={{ uri: "https://majuberkarya.site/login" }}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          style={{ marginTop: 50 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E55223", 
  },
});
