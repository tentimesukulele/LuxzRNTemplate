import { StyleSheet, ScrollView, View, Text } from 'react-native';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.headerSubtitle}>
          Learn about the features and components included in this template
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>File-based Routing</Text>
        <Text style={styles.text}>
          This template uses Expo Router for navigation. Simply create a new file in the app/ directory and it automatically becomes a route.
        </Text>

        <Text style={styles.sectionTitle}>Theming System</Text>
        <Text style={styles.text}>
          The template includes a complete theming system with automatic dark/light mode support.
        </Text>

        <Text style={styles.sectionTitle}>Cross-Platform Support</Text>
        <Text style={styles.text}>
          This template works on iOS, Android, and Web out of the box.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  content: {
    padding: 20,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333',
  },
});
