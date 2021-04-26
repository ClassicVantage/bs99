import React, { Component} from 'react';
import { Header,Icon } from 'react-native-elements';
import { View, Text, StyeSheet } from 'react-native';

const MyHeader = props => {

BellIconWithBadge=()=>{
  return(
    <View>
      <Icon name ='bell' type='font-awesome' color='#ffffff' size={25} 
      onPress={()=>this.props.navigation.navigate('Notification')}/>
      <Badge
      value={this.state.value}
      containerStyle={{position:'absolute', top:-4, right:-4}}
      />
    </View>
  )
}
  
  return (
    <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='#ffffff' onPress={()=>this.props.navigation.togglerawer()}/>}
      rightComponent={<globalThis.BellIconWithBadge{...this.props}/>}     
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#eaf8fe"
    />
  );
};

export default MyHeader;
