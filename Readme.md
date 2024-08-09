# adding animations

# adding expo gradient

# adding carousal and onboarding

# added buttons on next page and last slide

# SignIn page

"dependencies": {

    "@react-navigation/bottom-tabs": "^6.6.1",
    "@react-navigation/native": "^6.1.18",
    "expo": "~51.0.25",
    "expo-blur": "^13.0.2",
    "expo-font": "~12.0.9",
    "expo-linear-gradient": "^13.0.2",
    "expo-status-bar": "~1.12.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-native": "^0.74.5",
    "react-native-app-intro-slider": "^4.0.4",
    "react-native-gesture-handler": "~2.16.1",
    "react-native-onboarding-swiper": "^1.3.0",
    "react-native-reanimated": "~3.10.1",
    "react-native-screens": "^3.31.1",
    "react-native-svg": "15.2.0"

},

        <Modal
                    animationType="slide"
                    transparent={true}
                    visible={calVisible}
                    onRequestClose={() => setCalVisible(false)}
                >
                    <Calendar visible = {calVisible} onClose={() => setCalVisible(false)} />
        </Modal>
