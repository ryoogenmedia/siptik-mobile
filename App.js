import { SafeAreaView, StyleSheet } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: "https://majuberkarya.site/login" }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
