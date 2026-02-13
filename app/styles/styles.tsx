import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // ---------- Existing styles ----------
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
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

  // ---------- Task bar styles ----------
  taskBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004aad',
    paddingVertical: 20, // taller bar
    paddingHorizontal: 12,
    zIndex: 10,
  },
  faviconContainer: {
    marginRight: 15,
  },
  favicon: {
    fontSize: 28, // larger star
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
});
