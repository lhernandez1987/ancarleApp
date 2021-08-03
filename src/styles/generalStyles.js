import { StyleSheet } from "react-native";

export const colorStyle = {
  primary: "#490b94",
  secondary: "#167a05",
  bgDark: '#c08e4b',
  dark: "#2f424c",
  fontLight: "#fff",
  bgLight: "#fff",
};

export const layoutStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});

export const formStyle = StyleSheet.create({
  input: {
    marginBottom: 20,
    //marginTop: 30
  },
  btnSuccess: {
    padding: 5,
    backgroundColor: colorStyle.secondary,
    borderRadius: 10,
  },
  btnText: {
    padding: 5,
    marginTop: 10,
    backgroundColor: colorStyle.primary,
    borderRadius: 10,
  },
  btnLogin: {
    padding: 5,
    marginBottom: 40,
    backgroundColor: colorStyle.secondary,
    borderRadius: 10,
  },
  btnPrimary: {
    padding: 5,
    marginTop: 10,
    marginBottom: 70,
    backgroundColor: colorStyle.primary,
    borderRadius: 10,
  },
  btnTextLabel: {
    color: colorStyle.dark,
  },
  btnTitle: {
    color: colorStyle.primary,
    marginBottom: 1,
    marginTop: -10,
    fontSize: 20,
    textAlign: "center",
  },
});

export const imageStyle = StyleSheet.create({
  logo: {
    width: "80%",
    height: 80,
    resizeMode: "contain",
    marginTop: -20,
    marginBottom: -18,
    marginLeft:-70,
  },
  auth: {
    width: "100%",
    height: 80,
    resizeMode: "contain",
    marginBottom: 3,
  },
});

export const browserStylesTab = StyleSheet.create({
  navigation: {
    backgroundColor: colorStyle.bgDark,
  },
  icon: {
    fontSize: 20,
    color: colorStyle.fontLight,
  },
});

export const headerStyle = StyleSheet.create({
  container: {
    backgroundColor: colorStyle.bgDark,
    paddingVertical: 10,
    paddingHorizontal: 15,
    zIndex: 1,
  },
});

export const styleLoading = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
  },
})

export const UserInformationStyles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
  titleName: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})