export default {
  expo: {
    name: "PetVerse",
    slug: "petverse",
    version: "1.2.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: { image: "./assets/splash.png", backgroundColor: "#FFF9F5" },
    ios: { supportsTablet: true, bundleIdentifier: "app.petverse.mobile", buildNumber: "12" },
    android: { adaptiveIcon: { foregroundImage: "./assets/adaptive-icon.png", backgroundColor: "#FF6B4A" }, package: "app.petverse.mobile", versionCode: 12 },
    extra: { eas: { projectId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" } },
    plugins: ["expo-localization", "expo-secure-store"],
    locales: { "fa": "./locales/fa.json", "en": "./locales/en.json" }
  }
}
