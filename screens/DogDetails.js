import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class DogDetails extends Component{
  constructor(){
    super();
    this.state ={
      userId : firebase.auth().currentUser.email,
      DogName:"",
      Breed:""
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  addRequest =(dogname,breed)=>{
   
    var randomRequestId = this.createUniqueId()
    db.collection('DogList').add({
        "DogName": dogname,
        "Breed":breed,
        "request_id"  : randomRequestId,
    })

    this.setState({
      DogName:'',
      Breed:''
    })

    return Alert.alert("Dog Details Added")
  }

  deleteRequest =(dogname)=>{
   

    db.collection('DogList').doc(dogname).delete()
        

    this.setState({
      DogName:'',
      Breed:''
    })

    return Alert.alert("Dog Details deleted")
  }

  render(){
    return(
        <View style={{flex:1}}>
          <MyHeader title="Request Book"/>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Enter name"}
                onChangeText={(text)=>{
                    this.setState({
                      DogName:text
                    })
                }}
                value={this.state.DogName}
              />
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Enter breed"}
                onChangeText={(text)=>{
                    this.setState({
                      Breed:text
                    })
                }}
                value={this.state.Breed}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.adddata(this.state.DogName,this.state.Breed)}}
                >
                <Text>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.deletedata(this.state.DogName)}}
                >
                <Text>Delete</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)
