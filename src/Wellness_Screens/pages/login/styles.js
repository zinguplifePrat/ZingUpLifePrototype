const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  backgroundImageContainer: {
    flex: 1,
    width: null,
    height: null,
    
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 16,
   
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 100 : 50,
    top: Platform.OS === "android" ? 10 : 60,
    width: 150,
    height: 150
  },
  text: {
    color: "#000",
    bottom: 6,
    marginTop: 5
  }
};
