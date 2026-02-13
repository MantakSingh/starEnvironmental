// styles/styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // ---------- Container & General ----------
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },

  // ---------- Hero Section ----------
  hero: {
    padding: 40,
    backgroundColor: '#004aad',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },

  // ---------- Sections ----------
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 22,
  },

  // ---------- Card Styles ----------
  card: {
    backgroundColor: '#fff',
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
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
  },
  cardAuthor: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 6,
    color: '#555',
  },
  projectImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },

  // ---------- Button ----------
  button: {
    backgroundColor: '#004aad',
    padding: 12,
    borderRadius: 6,
    marginTop: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },

  // ---------- Task Bar ----------
  taskBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004aad',
    paddingVertical: 20,
    paddingHorizontal: 12,
    zIndex: 10,
  },
  faviconContainer: {
    marginRight: 15,
  },
  favicon: {
    fontSize: 28,
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
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  // ---------- Footer ----------
  footerContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  footerText: {
    marginBottom: 10,
    fontSize: 14,
    color: '#555',
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  footerIcon: {
    fontSize: 24,
    marginHorizontal: 10,
  },
});
