import { StyleSheet } from 'react-native';

// ----- Brand Colors -----
const COLOR_1 = '#002f78';
const COLOR_2 = '#fefefd';

// ----- Generic Font Variables -----
const FONT_HEADER = 'Exo2-Black';
const FONT_BODY = 'Exo2-Regular';
const FONT_BUTTON = 'Exo2-Bold';

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
    fontFamily: FONT_HEADER,
    color: COLOR_2,
  },
  heroSubtitle: {
    fontSize: 16,
    fontFamily: FONT_BODY,
    color: COLOR_2,
    marginTop: 10,
  },

  // ---------- Hero Banner ----------
  heroBannerContainer: {
    height: 320,
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  heroBannerImage: {
    width: '100%',
    height: 420,
    marginTop: -100,
    resizeMode: 'cover',
  },
  heroBannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroBannerTitle: {
    color: '#fff',
    fontSize: 34,
    fontFamily: FONT_HEADER,
    textAlign: 'center',
    letterSpacing: 1,
  },

  // ---------- Sections ----------
  section: {
    padding: 20,
    backgroundColor: COLOR_2,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: FONT_HEADER,
    marginBottom: 12,
    color: COLOR_1,
  },
  sectionSubtitle: {
    fontSize: 18,
    fontFamily: FONT_BUTTON,
    marginBottom: 8,
    color: COLOR_1,
  },
  sectionText: {
    fontSize: 16,
    fontFamily: FONT_BODY,
    lineHeight: 22,
    color: COLOR_1,
  },

  // ---------- Cards ----------
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
    fontFamily: FONT_BUTTON,
    marginBottom: 6,
    color: COLOR_1,
  },
  cardText: {
    fontSize: 14,
    fontFamily: FONT_BODY,
    lineHeight: 20,
    color: COLOR_1,
  },
  cardAuthor: {
    fontSize: 14,
    fontFamily: FONT_BODY,
    fontStyle: 'italic',
    marginTop: 6,
    color: COLOR_1,
  },

  // ---------- Form ----------
  formInput: {
    borderWidth: 1,
    borderColor: COLOR_1,
    borderRadius: 6,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    fontFamily: FONT_BODY,
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
    fontSize: 16,
    fontFamily: FONT_BUTTON,
  },

  // ---------- Task Bar ----------
  taskBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR_1,
    paddingHorizontal: 12,
    paddingLeft: 40,
    zIndex: 10,
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
    fontSize: 20,
    fontFamily: FONT_BUTTON,
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
    fontFamily: FONT_BODY,
    color: COLOR_2,
  },

  // ---------- Dropdown ----------
  dropdownOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 101,
  },
  dropdownMenu: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  dropdownText: {
    color: COLOR_1,
    fontSize: 15,
    fontFamily: FONT_BUTTON,
    textAlign: 'right',
  },
// ---------- Team Cards ----------
  teamGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -6,
  },
  teamCard: {
    width: '22%', // smaller than before (about 4 per row on large screens)
    aspectRatio: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  teamImageContainer: {
    flex: 1,
    position: 'relative',
  },
  teamImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  teamNameOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    fontSize: 14, // slightly smaller text
    fontWeight: '700',
    color: '#002f78',
  },
  // ---------- Projects Grid ----------
  projectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -6, // slightly smaller margin
  },
  projectCard: {
    width: '30%', // smaller than before
    aspectRatio: 1, // keeps square
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
    position: 'relative', // needed for overlay
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
