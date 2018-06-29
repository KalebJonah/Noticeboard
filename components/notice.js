import React,  { Component } from 'React'
import { Card, CardItem, Thumbnail, Text, Button, 
          Icon, Left, Body, Right, 
} from 'native-base';
import { StyleSheet, Image} from 'react-native'

export default class Notice extends Component {
  constructor(props){
  super(props)

  }
  render(){
    return (
      <Card style={{flex:0}}>
        <CardItem>
              <Left>
                <Thumbnail 
                  source={{uri: 'http://icons.iconarchive.com/icons/artdesigner/emoticons-2/128/cool-icon.png'}} />
                <Body>
                  <Text>{this.props.title}</Text>
                  <Text note>{this.props.date}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                  <Image source={ {uri:this.props.picture}}
                  style={{height: 200, width: 400, }}/>
                  <Text>
                   {this.props.description}
                  </Text>
                </Body>
            </CardItem>
            
      </Card>
    )
  }
}
