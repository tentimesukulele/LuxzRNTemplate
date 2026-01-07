import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    // Example: Fetch data from your API
    // async function fetchData() {
    //   try {
    //     const data = await getItems(); // Import from services/api.js
    //     setItems(data || []);
    //   } catch (err) {
    //     console.error('Error fetching items:', err);
    //   }
    // }
    // fetchData();
  }, []);

  return (
    <View style={styles.mainWrapper}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Welcome to LuxzRN Template</Text>

          {/* Example: Display your items */}
          {/* {items.map((item, index) => (
            <View key={item.id || index} style={styles.container}>
              <Text>Item: {item.name || 'N/A'}</Text>
            </View>
          ))} */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#faf8f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  contentContainer: {
    flex: 1,
    position: 'relative',
    paddingVertical: 20,
  }
});
