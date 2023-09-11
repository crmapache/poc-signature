import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Signature from "react-native-signature-canvas";
import {useState} from "react";

export default function App() {
  const [signature, setSign] = useState(null);
  
  const handleOK = (signature) => {
    console.log(signature);
    setSign(signature);
  };
  
  const handleEmpty = () => {
    console.log("Empty");
  };
  
  const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;
  
  return (
    <View style={styles.container}>
      <Signature
        onOK={handleOK}
        onEmpty={handleEmpty}
        descriptionText="Sign"
        clearText="Clear"
        confirmText="Save"
        webStyle={style}
        autoClear={true}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  preview: {
    backgroundColor: "#c6c3c3",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  image: {
    width: 335,
    height: 200,
  },
});
