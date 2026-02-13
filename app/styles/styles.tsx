import { StyleSheet } from 'react-native';

// ----- Brand Colors -----
const COLOR_1 = '#002f78';   // Primary blue
const COLOR_2 = '#FDFEFE';   // Bright white background

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
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
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

  // ---------- Form (Contact Page) ----------
  formInput: {
    borderWidth: 1,
    borderColor: COLOR_1,
    borderRadius: 6,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: COLOR_1,
    backgroundColor: '#ffffff',
  },

  // ---------- Button ----------
  button: {
    backgroundColor: COLOR_1,
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: COLOR_2,
    fontWeight: '600',
    fontSize: 16,
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
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: COLOR_1,
    alignItems: 'flex-start',
  },
  footerText: {
    marginBottom: 12,
    fontSize: 14,
    color: COLOR_2,
  },
  footerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },


// ---------- Projects Grid ----------
projectGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginHorizontal: -6, // slightly smaller margin
},

projectCard: {
  width: '30%',            // smaller than before
  aspectRatio: 1,          // keeps square
  backgroundColor: '#ffffff',
  borderRadius: 10,
  marginBottom: 16,
  overflow: 'hidden',
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 6,
  elevation: 2,
},

projectImageContainer: {
  flex: 1,
  position: 'relative',     // needed for overlay
},

projectImage: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
},

projectTitleOverlay: {
  position: 'absolute',
  top: 0,
  width: '100%',
  paddingVertical: 6,
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  textAlign: 'center',
  fontSize: 16,
  fontWeight: '700',
  color: '#002f78',
},

});
