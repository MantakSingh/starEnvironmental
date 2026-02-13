// styles/styles.ts
import { StyleSheet } from 'react-native';

// ----- Brand Colors -----
const COLOR_1 = '#002f78';   // Primary blue
const COLOR_2 = '#FDFEFE';   // Light accent (approx of display-p3)

export const styles = StyleSheet.create({
  // ---------- Container & General ----------
  container: {
    flex: 1,
    backgroundColor: COLOR_2,
  },

  // ---------- Hero Section ----------
  hero: {
    padding: 40,
    backgroundColor: COLOR_1,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLOR_2,
  },
  heroSubtitle: {
    fontSize: 16,
    color: COLOR_2,
    marginTop: 10,
  },

  // ---------- Sections ----------
  section: {
    padding: 20,
    backgroundColor: COLOR_2,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: COLOR_1,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 22,
    color: COLOR_1,
  },

  // ---------- Card Styles ----------
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
    color: COLOR_1,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
    color: COLOR_1,
  },
  cardAuthor: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 6,
    color: COLOR_1,
  },
  projectImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },

  // ---------- Button ----------
  button: {
    backgroundColor: COLOR_1,
    padding: 12,
    borderRadius: 6,
    marginTop: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: COLOR_2,
    fontWeight: '600',
  },

  // ---------- Task Bar ----------
  taskBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR_1,
    paddingVertical: 20,
    paddingHorizontal: 12,
    zIndex: 10,
  },
  faviconContainer: {
    marginRight: 15,
  },
  favicon: {
    fontSize: 28,
    color: COLOR_2,
  },
  pagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  taskButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
  },
  taskButtonText: {
    color: COLOR_2,
    fontWeight: '700',
    fontSize: 16,
  },

  // ---------- Footer ----------
  footerContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: COLOR_1,
    alignItems: 'center',
    backgroundColor: COLOR_2,
  },
  footerText: {
    marginBottom: 10,
    fontSize: 14,
    color: COLOR_1,
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  footerIcon: {
    fontSize: 24,
    marginHorizontal: 10,
    color: COLOR_1,
  },
});
