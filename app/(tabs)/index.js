import { Platform, StyleSheet, ScrollView, View, Pressable } from 'react-native';

import { ThemedText } from '../../components/themed-text';
import { ThemedView } from '../../components/themed-view';
import { IconSymbol } from '../../components/ui/icon-symbol';
import { Colors } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const tintColor = Colors[colorScheme].tint;

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <View style={styles.welcomeContainer}>
          <ThemedText type="title" style={styles.welcomeText}>
            Welcome to
          </ThemedText>
          <ThemedText type="title" style={[styles.appName, { color: tintColor }]}>
            LuxzRN
          </ThemedText>
        </View>
        <ThemedText style={styles.subtitle}>
          Your modern React Native starter template
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        <View style={styles.cardGrid}>
          <Pressable
            style={[styles.card, { borderColor: tintColor }]}
            onPress={() => console.log('Quick Start pressed')}>
            <View style={[styles.iconContainer, { backgroundColor: tintColor + '20' }]}>
              <IconSymbol name="house.fill" size={32} color={tintColor} />
            </View>
            <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
              Quick Start
            </ThemedText>
            <ThemedText style={styles.cardDescription}>
              Start building your app right away with pre-configured navigation and theming
            </ThemedText>
          </Pressable>

          <Pressable
            style={[styles.card, { borderColor: tintColor }]}
            onPress={() => console.log('Components pressed')}>
            <View style={[styles.iconContainer, { backgroundColor: tintColor + '20' }]}>
              <IconSymbol name="paperplane.fill" size={32} color={tintColor} />
            </View>
            <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
              Components
            </ThemedText>
            <ThemedText style={styles.cardDescription}>
              Reusable themed components ready to use in your project
            </ThemedText>
          </Pressable>
        </View>

        <ThemedView style={styles.featureSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            What's Included
          </ThemedText>

          <View style={styles.featureItem}>
            <IconSymbol name="chevron.right" size={20} color={tintColor} />
            <View style={styles.featureText}>
              <ThemedText type="defaultSemiBold">Expo Router Navigation</ThemedText>
              <ThemedText style={styles.featureDescription}>
                File-based routing with tabs and modals
              </ThemedText>
            </View>
          </View>

          <View style={styles.featureItem}>
            <IconSymbol name="chevron.right" size={20} color={tintColor} />
            <View style={styles.featureText}>
              <ThemedText type="defaultSemiBold">Dark/Light Theme</ThemedText>
              <ThemedText style={styles.featureDescription}>
                Automatic theme switching with custom colors
              </ThemedText>
            </View>
          </View>

          <View style={styles.featureItem}>
            <IconSymbol name="chevron.right" size={20} color={tintColor} />
            <View style={styles.featureText}>
              <ThemedText type="defaultSemiBold">Cross-Platform Icons</ThemedText>
              <ThemedText style={styles.featureDescription}>
                SF Symbols on iOS, Material Icons on Android
              </ThemedText>
            </View>
          </View>

          <View style={styles.featureItem}>
            <IconSymbol name="chevron.right" size={20} color={tintColor} />
            <View style={styles.featureText}>
              <ThemedText type="defaultSemiBold">JavaScript Only</ThemedText>
              <ThemedText style={styles.featureDescription}>
                No TypeScript complexity, easier setup
              </ThemedText>
            </View>
          </View>
        </ThemedView>

        <ThemedView style={styles.getStartedSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Get Started
          </ThemedText>
          <ThemedText style={styles.getStartedText}>
            Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.js</ThemedText> to customize this screen.
          </ThemedText>
          <ThemedText style={styles.getStartedText}>
            Press{' '}
            <ThemedText type="defaultSemiBold">
              {Platform.select({
                ios: 'cmd + d',
                android: 'cmd + m',
                web: 'F12',
              })}
            </ThemedText>{' '}
            for developer tools.
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
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  welcomeText: {
    fontSize: 36,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
    opacity: 0.7,
  },
  content: {
    padding: 20,
    gap: 24,
  },
  cardGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  card: {
    flex: 1,
    padding: 20,
    borderRadius: 16,
    borderWidth: 2,
    gap: 12,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
  },
  cardDescription: {
    fontSize: 14,
    opacity: 0.7,
    lineHeight: 20,
  },
  featureSection: {
    gap: 16,
    paddingTop: 8,
  },
  sectionTitle: {
    fontSize: 24,
    marginBottom: 8,
  },
  featureItem: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  featureText: {
    flex: 1,
    gap: 4,
  },
  featureDescription: {
    fontSize: 14,
    opacity: 0.6,
    lineHeight: 18,
  },
  getStartedSection: {
    gap: 12,
    paddingTop: 8,
    paddingBottom: 40,
  },
  getStartedText: {
    fontSize: 15,
    lineHeight: 22,
  },
});
