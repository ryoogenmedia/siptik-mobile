import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  RefreshControl,
  ScrollView,
} from "react-native";
import { WebView } from "react-native-webview";
import Spinner from "react-native-loading-spinner-overlay";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [refresh, setRefresh] = React.useState(false);

  React.useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 5000);
  }, []);

  const handleRefresh = React.useCallback(() => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    },1000);
  },[]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
      }
    >

      <SafeAreaView style={styles.container}>
        {refresh && (
          <Spinner
            visible={refresh}
            textStyle={{ color: "#FFF" }}
            color="#E55223"
            overlayColor="rgba(0, 0, 0, 0.4)"
          />
        )}

        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <WebView
            source={{ uri: "https://majuberkarya.site/login" }}
            onLoadStart={() => setRefresh(true)}
            onLoadEnd={() => {
              setRefresh(false);
            }}
          />
        </ScrollView>
      </SafeAreaView>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
