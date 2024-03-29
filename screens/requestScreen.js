import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class RequestScreen extends Component {
  constructor(){
    super();
    this.state={
      userId:firebase.auth().currentUser.email,
      bookName:'',
      reason:'',
    }
  }

  uniqueId(){
    return Math.random().toString(36).substring(7);
  }

// you need to open the cmd for running the project
  addRequest=()=>{
    var userId = this.state.userId;
    var randomRequest = this.uniqueId();
    db.collection("requested_books").add({
      user_id: userId,
      book_name:bookName,
      reason_to_request:reasonToRequest,
      request_id:randomRequest
    })
    this.setState({
      bookName:"",
      reason:""
    })
  }

    render(){
  return (
    <View style={styles.container}>
      <TextInput style={styles.loginBox}
      placeholder='BookName'
      onChangeText={(text)=>{
        this.setState({bookName:text})
      }}
      />
       <TextInput style={styles.loginBox}
      placeholder='Reason to request'
      multiline
      numberOfLines={10}
      onChangeText={(text)=>{
        this.setState({reason:text})
      }}
      />

      <TouchableOpacity style={styles.button} onPress={()=>{
        this.addRequest
      }}>
        <Text style={styles.buttonText}>Request</Text>
      </TouchableOpacity>
    </View>
  );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  }
})
