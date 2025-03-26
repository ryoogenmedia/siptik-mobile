import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Button,
} from "react-native";
import { WebView } from "react-native-webview";
import * as SplashScreen from "expo-splash-screen";
import Spinner from "react-native-loading-spinner-overlay";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 5000);
  }, []);

  const handleRetry = () => {
    setError(false); 
    setLoading(true); 
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <Spinner
          overlayColor="rgba(0,0,0,0.5)"
          size="large"
          color="#E55223"
          visible={loading}
        />
      )}

      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              Anda sedang offline, cek kembali koneksi jaringan anda.
            </Text>
            <Button title="Coba Lagi" onPress={handleRetry} color="#E55223" />
          </View>
        ) : (
          <WebView
            source={{ uri: "https://ryoogen-media.site/login" }}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            style={{ marginTop: 50 }}
            onError={() => {
              setLoading(false);
              setError(true);
            }}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E55223",
  },
  
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },

  errorText: {
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});
