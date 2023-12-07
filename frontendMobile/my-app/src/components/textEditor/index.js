import { useRef, useState } from "react";
import {
  Animated,
  Text,
  TouchableOpacity,
  TurboModuleRegistry,
  View,
} from "react-native";
import QuillEditor, { QuillToolbar } from "react-native-cn-quill";

const TextEditor = () => {
  const _editor = useRef();
  return (
    <View
      style={{
        height: "auto",
        alignSelf: "stretch",
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          height: 175,
          justifyContent: "center",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        {/* <QuillToolbar editor={_editor} options={"full"} theme={"light"} /> */}
        <View
          style={{
            height: "100%",
            alignSelf: "stretch",
            borderWidth: 0.6,
            borderBlockColor: "#D7D7D7",
          }}
        >
          <QuillEditor
            ref={_editor}
            webview={{
              scrollEnabled: true,
              style: { borderWidth: 1.8, borderColor: "red" },
              nestedScrollEnabled: true,
              showsHorizontalScrollIndicator: true,
              showsVerticalScrollIndicator: true,
            }}
            quill={{ theme: "snow", placeholder: "Digite o conteudo do card" }}
          />
        </View>
      </View>
    </View>
  );
};

export default TextEditor;
