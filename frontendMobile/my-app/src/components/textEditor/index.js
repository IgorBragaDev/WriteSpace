import { useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import QuillEditor, { QuillToolbar } from "react-native-cn-quill";


const TextEditor = ()=>{
    const _editor = useRef()
    return(
        <View style={{height:'auto'}}>
            <View style={{height:175, justifyContent:"center" , alignItems:"flex-start", backgroundColor:"red"}}>
                <QuillToolbar editor={_editor} options={"basic"} theme={"light"}/>
                <QuillEditor ref={_editor}/>
            </View>
        </View>
    )

}


export default TextEditor