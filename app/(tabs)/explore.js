import { StyleSheet, ScrollView, View, Pressable, Linking } from 'react-native';

import { ThemedText } from '../../components/themed-text';
import { ThemedView } from '../../components/themed-view';
import { IconSymbol } from '../../components/ui/icon-symbol';
import { Collapsible } from '../../components/ui/collapsible';
import { Colors } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';

export default function ExploreScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const tintColor = Colors[colorScheme].tint;

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <View style={styles.headerIcon}>
          <IconSymbol
            name="chevron.left.forwardslash.chevron.right"
            size={48}
            color={tintColor}
          />
        </View>
        <ThemedText type="title" style={styles.title}>
          Explore
        </ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          Learn about the features and components included in this template
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        <Collapsible title="File-based Routing">
          <ThemedText style={styles.collapsibleText}>
            This template uses Expo Router for navigation. Simply create a new file in the{' '}
            <ThemedText type="defaultSemiBold">app/</ThemedText> directory and it automatically becomes a route.
          </ThemedText>
          <ThemedText style={styles.collapsibleText}>
            Tab screens are located in{' '}
            <ThemedText type="defaultSemiBold">app/(tabs)/</ThemedText> with their layout in{' '}
            <ThemedText type="defaultSemiBold">_layout.js</ThemedText>
          </ThemedText>
          <Pressable
            style={[styles.link, { borderColor: tintColor }]}
            onPress={() => openLink('https://docs.expo.dev/router/introduction')}>
            <ThemedText type="link">Learn more about Expo Router →</ThemedText>
          </Pressable>
        </Collapsible>

        <Collapsible title="Theming System">
          <ThemedText style={styles.collapsibleText}>
            The template includes a complete theming system with automatic dark/light mode support.
          </ThemedText>
          <ThemedText style={styles.collapsibleText}>
            Colors and fonts are defined in{' '}
            <ThemedText type="defaultSemiBold">constants/theme.js</ThemedText>. The{' '}
            <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook detects the user's preference.
          </ThemedText>
          <View style={styles.themeExample}>
            <View style={[styles.themeCircle, { backgroundColor: Colors.light.tint }]} />
            <View style={[styles.themeCircle, { backgroundColor: Colors.dark.tint }]} />
            <ThemedText style={styles.themeLabel}>
              Current: {colorScheme === 'dark' ? 'Dark' : 'Light'} Mode
            </ThemedText>
          </View>
        </Collapsible>

        <Collapsible title="Components">
          <ThemedText style={styles.collapsibleText}>
            Pre-built themed components save you time:
          </ThemedText>
          <View style={styles.componentList}>
            <View style={styles.componentItem}>
              <ThemedText>• </ThemedText>
              <ThemedText type="defaultSemiBold">ThemedText</ThemedText>
              <ThemedText> - Automatically styled text</ThemedText>
            </View>
            <View style={styles.componentItem}>
              <ThemedText>• </ThemedText>
              <ThemedText type="defaultSemiBold">ThemedView</ThemedText>
              <ThemedText> - Theme-aware containers</ThemedText>
            </View>
            <View style={styles.componentItem}>
              <ThemedText>• </ThemedText>
              <ThemedText type="defaultSemiBold">IconSymbol</ThemedText>
              <ThemedText> - Cross-platform icons</ThemedText>
            </View>
            <View style={styles.componentItem}>
              <ThemedText>• </ThemedText>
              <ThemedText type="defaultSemiBold">Collapsible</ThemedText>
              <ThemedText> - Expandable sections</ThemedText>
            </View>
          </View>
        </Collapsible>

        <Collapsible title="Cross-Platform Support">
          <ThemedText style={styles.collapsibleText}>
            This template works on iOS, Android, and Web out of the box.
          </ThemedText>
          <ThemedText style={styles.collapsibleText}>
            Icons automatically use SF Symbols on iOS and Material Icons on Android/Web for the best native experience.
          </ThemedText>
          <View style={styles.platformGrid}>
            <View style={styles.platformBadge}>
              <ThemedText type="defaultSemiBold">iOS</ThemedText>
            </View>
            <View style={styles.platformBadge}>
              <ThemedText type="defaultSemiBold">Android</ThemedText>
            </View>
            <View style={styles.platformBadge}>
              <ThemedText type="defaultSemiBold">Web</ThemedText>
            </View>
          </View>
        </Collapsible>

        <Collapsible title="Animations">
          <ThemedText style={styles.collapsibleText}>
            Powered by React Native Reanimated for smooth, performant animations.
          </ThemedText>
          <ThemedText style={styles.collapsibleText}>
            The parallax scroll effect and other animations run on the native thread for 60fps performance.
          </ThemedText>
          <Pressable
            style={[styles.link, { borderColor: tintColor }]}
            onPress={() => openLink('https://docs.swmansion.com/react-native-reanimated/')}>
            <ThemedText type="link">Learn about Reanimated →</ThemedText>
          </Pressable>
        </Collapsible>

        <Collapsible title="JavaScript Only">
          <ThemedText style={styles.collapsibleText}>
            No TypeScript means simpler setup and easier onboarding for teams.
          </ThemedText>
          <ThemedText style={styles.collapsibleText}>
            All code is vanilla JavaScript with modern ES6+ features. Perfect for developers who want to move fast without type complexity.
          </ThemedText>
        </Collapsible>

        <ThemedView style={styles.resourcesSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Resources
          </ThemedText>

          <Pressable
            style={[styles.resourceCard, { borderColor: tintColor }]}
            onPress={() => openLink('https://docs.expo.dev')}>
            <IconSymbol name="house.fill" size={24} color={tintColor} />
            <View style={styles.resourceText}>
              <ThemedText type="defaultSemiBold">Expo Documentation</ThemedText>
              <ThemedText style={styles.resourceDescription}>
                Official guides and API reference
              </ThemedText>
            </View>
            <IconSymbol name="chevron.right" size={20} color={tintColor} />
          </Pressable>

          <Pressable
            style={[styles.resourceCard, { borderColor: tintColor }]}
            onPress={() => openLink('https://reactnative.dev')}>
            <IconSymbol name="paperplane.fill" size={24} color={tintColor} />
            <View style={styles.resourceText}>
              <ThemedText type="defaultSemiBold">React Native Docs</ThemedText>
              <ThemedText style={styles.resourceDescription}>
                Learn React Native fundamentals
              </ThemedText>
            </View>
            <IconSymbol name="chevron.right" size={20} color={tintColor} />
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.footer}>
          <ThemedText style={styles.footerText}>
            Ready to start building? Edit the files in{' '}
            <ThemedText type="defaultSemiBold">app/</ThemedText> to create your app.
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  headerIcon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    opacity: 0.7,
  },
  content: {
    padding: 20,
    gap: 16,
    paddingBottom: 40,
  },
  collapsibleText: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 12,
  },
  link: {
    marginTop: 8,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  themeExample: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
  },
  themeCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  themeLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  componentList: {
    gap: 8,
    marginTop: 8,
  },
  componentItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  platformGrid: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
    flexWrap: 'wrap',
  },
  platformBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(10, 126, 164, 0.1)',
  },
  resourcesSection: {
    gap: 16,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 24,
  },
  resourceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    gap: 12,
  },
  resourceText: {
    flex: 1,
    gap: 4,
  },
  resourceDescription: {
    fontSize: 14,
    opacity: 0.6,
  },
  footer: {
    marginTop: 24,
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'rgba(10, 126, 164, 0.05)',
  },
  footerText: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
});
