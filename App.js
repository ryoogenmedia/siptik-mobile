import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  RefreshControl,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { WebView } from "react-native-webview";
import Spinner from "react-native-loading-spinner-overlay";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setIsLoading(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <Spinner
          visible={isLoading}
          textStyle={{ color: "#FFF" }}
          color="#E55223"
          overlayColor="rgba(0, 0, 0, 0.4)"
        />
      )}

      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <WebView
          source={{ uri: "https://majuberkarya.site/login" }}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => {
            setIsLoading(false);
            setRefreshing(false);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
