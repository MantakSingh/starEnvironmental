import { Dimensions, StyleSheet } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// ----- Brand Colors -----
const COLOR_1 = '#002f78';
const COLOR_2 = '#fefefd';

// ----- Generic Font Variables -----
const FONT_HEADER = 'Exo2-Black';
const FONT_BODY = 'Exo2-Regular';
const FONT_BUTTON = 'Exo2-Bold';

// ---------- Responsive card widths ----------
const CARD_MARGIN = 8;
let teamCardsPerRow = 2;
let projectCardsPerRow = 2;

if (SCREEN_WIDTH >= 1200) {
  teamCardsPerRow = 4;
  projectCardsPerRow = 4;
} else if (SCREEN_WIDTH >= 768) {
  teamCardsPerRow = 3;
  projectCardsPerRow = 3;
}

const teamCardWidth = (SCREEN_WIDTH - CARD_MARGIN * (teamCardsPerRow * 2)) / teamCardsPerRow;

export const styles = StyleSheet.create({
  // ---------- Container & General ----------
  container: {
    flex: 1,
    backgroundColor: COLOR_2,
  },

  // ---------- Hero Section ----------
  hero: {
    paddingVertical: SCREEN_WIDTH > 768 ? 60 : 30,
    paddingHorizontal: 20,
    backgroundColor: COLOR_1,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: SCREEN_WIDTH > 768 ? 40 : 28,
    fontFamily: FONT_HEADER,
    color: COLOR_2,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: SCREEN_WIDTH > 768 ? 20 : 16,
    fontFamily: FONT_BODY,
    color: COLOR_2,
    marginTop: 10,
    textAlign: 'center',
  },

  // ---------- Hero Banner ----------
  heroBannerContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    overflow: 'hidden',
    position: 'relative',
  },
  heroBannerImage: {
    width: '100%',
    height: '100%',
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
    paddingHorizontal: 20,
  },
  heroBannerTitle: {
    color: '#fff',
    fontSize: SCREEN_WIDTH > 768 ? 52 : 34,
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
    justifyContent: 'space-between', // ensures logo left, menu right
    backgroundColor: COLOR_1,
    paddingHorizontal: SCREEN_WIDTH > 768 ? 40 : 12, // more padding on web
    paddingVertical: 10,
    zIndex: 10,
  },
  pagesContainer: {
    flexDirection: 'row',
    justifyContent: SCREEN_WIDTH > 768 ? 'space-around' : 'flex-end', // collapse to right on mobile
    flex: 1,
    gap: SCREEN_WIDTH > 768 ? 0 : 12, // optional spacing between icons on mobile
  },
  taskButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
  },
  taskButtonText: {
    color: COLOR_2,
    fontSize: SCREEN_WIDTH > 768 ? 20 : 16, // smaller text on mobile
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
  footerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
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
  },
  dropdownText: {
    color: COLOR_1,
    fontSize: 15,
    fontFamily: FONT_BUTTON,
    textAlign: 'center',
  },

  // ---------- Team Grid ----------
  teamGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -CARD_MARGIN,
  },
  teamCard: {
    width: teamCardWidth,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    marginHorizontal: CARD_MARGIN,
  },
  teamImageContainer: {
    width: '100%',
    aspectRatio: 1,
  },
  teamImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  teamInfoContainer: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  teamName: {
    fontSize: SCREEN_WIDTH >= 768 ? 18 : 16,
    fontFamily: FONT_BUTTON,  // updated to use your font variable
    fontWeight: '700',
    color: '#002f78',
    textAlign: 'center',
  },
  teamTitle: {
    fontSize: SCREEN_WIDTH >= 768 ? 16 : 14,
    fontFamily: FONT_BODY,  // updated to use your font variable
    color: '#555',
    marginTop: 4,
    textAlign: 'center',
  },

  // ---------- Projects Grid ----------
  projectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -CARD_MARGIN,
  },
  projectCard: {
    width: teamCardWidth,
    aspectRatio: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    marginHorizontal: CARD_MARGIN,
  },
  projectImageContainer: {
    flex: 1,
    position: 'relative',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectTitleText: {
    fontSize: SCREEN_WIDTH >= 768 ? 18 : 16,
    fontFamily: FONT_BUTTON,  // updated to use your font variable
    fontWeight: '700',
    color: '#002f78',
    textAlign: 'center',
  },

  // ---------- Contact Row ----------
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },

  // ---------- Contact Form ----------
  contactFormInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontFamily: FONT_BODY,
    fontSize: 14,
    backgroundColor: "#fff",
  },

  errorText: {
    color: "#d32f2f",
    fontFamily: FONT_BUTTON,
    marginBottom: 12,
  },

  successText: {
    color: "#2e7d32",
    fontFamily: FONT_BUTTON,
    marginBottom: 12,
  },
});