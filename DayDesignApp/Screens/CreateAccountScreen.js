import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

export class CreateAccountScreen extends React.Component {

  constructor(props) {
    super();
    this.createAccount = this.createAccount.bind(this);
  }

  createAccount() {
    //Add account to Firebase through this method
  }

  render() {
    return (
      <View 
        style={createAccountStyles.container}>
        <Text
          style={createAccountStyles.title}>{ "We'll just need some information, please!" }</Text>
        <TextInput
          placeholder="First Name"
          style={createAccountStyles.credentialsInput}
          placeholderTextColor="white"
          underlineColorAndroid="white"
          selectionColor="white" />
        <TextInput
          placeholder="Last Name"
          style={createAccountStyles.credentialsInput}
          placeholderTextColor="white"
          underlineColorAndroid="white"
          selectionColor="white" />
        <TextInput
          placeholder="Email"
          style={createAccountStyles.credentialsInput}
          placeholderTextColor="white"
          underlineColorAndroid="white"
          selectionColor="white" />
        <TextInput 
          placeholder="Username"
          style={createAccountStyles.credentialsInput}
          placeholderTextColor="white"
          underlineColorAndroid="white"
          selectionColor="white" />
        <TextInput 
          placeholder="Password"
          style={createAccountStyles.credentialsInput}
          placeholderTextColor="white"
          underlineColorAndroid="white"
          selectionColor="white" />
        <TouchableOpacity
          onPress={this.createAccount}
          style={createAccountStyles.createAccountButton}>
          <Text
            style={createAccountStyles.createAccountButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const createAccountStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0e9aa7"
  },
  title: {
    flex: 3,
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginLeft: 25,
    marginRight: 25,
    marginTop: 50
  },
  credentialsInput: {
    flex: 1,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 4,
    fontSize: 16,
    color: "white",
    paddingBottom: 2.5
  },
  createAccountButton: {
    alignItems: "center",
    backgroundColor: "#3da4ab",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 50,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20
  },
  createAccountButtonText: {
    fontSize: 20,
    color: "white",
  }
});