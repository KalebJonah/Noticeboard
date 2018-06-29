import React from 'react'
import { StyleSheet, Platform, Image, View, ScrollView,TouchableOpacity } from 'react-native'
import { Container, Header,Title,  Content, Card, CardItem, Textarea, Input, Item,
  Thumbnail, Text, Button, Icon, Left, Body, Right,Fab, List, ListItem, Separator, Form} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import firebase from 'react-native-firebase'
import Notice from '../components/notice'
export default class Main extends React.Component {
  state = { 
    currentUser: null,
    visibleNotices: true ,
    title: '',
    description: '',
    picturePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0iabD151S875wO-w7ZlQFJK1S75Y5M5j3h1cTXPkK_Od41JbNA',
    noticeList: [
      {
        title: 'SCIT',
        date: 'April 15, 2018',
        picture: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
        description: 'We have a new Phones from the upcoming developers: possible – Fallout. We get a look at a meeting between Kafeero foundation'
      },
      {
        title: 'BIT',
        date: 'April 15, 2018',
        picture: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
        description: 'We have a new Phones from the upcoming developers: possible – Fallout. We get a look at a meeting between Kafeero foundation'
      },
      {
        title: 'BSC',
        date: 'April 15, 2018',
        picture: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
        description: 'We have a new Phones from the upcoming developers: possible – Fallout. We get a look at a meeting between Kafeero foundation'
      },
      {
        title: 'DIT',
        date: 'April 15, 2018',
        picture: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
        description: 'We have a new Phones from the upcoming developers: possible – Fallout. We get a look at a meeting between Kafeero foundation'
      },
      
    ]
  }


  

  

 componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}
render() {
    const { currentUser } = this.state
return (
  <Container>
      <Header>
          <Left/>
          <Body>
            <Title>NOTICEBOARD</Title>
          </Body>
          <Right />
        </Header>
      
        <Content>
          {
            this.state.visibleNotices ? (
          <ScrollView 
              width="100%"
              display="flex"

              contentContainerStyle={{height:"100%"}}> 
              {/*<Notice />
              */}
            {
               this.state.noticeList.map( (not, index) => 
               (
               <Notice 
                  key ={index}
                  title = {not.title}
                  date = {not.date}
                  picture = {not.picture}
                  description = {not.description}

              />
                
               
              ))
           }
              
            
          
              <Fab 
                onPress ={ () => this.setState( { visibleNotices: false})}
                active={true}
                direction="up"
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                >
                 <Icon name="ios-add" />
                
              </Fab>
          </ScrollView>
             ): 
             (  
              <Form>
              <Item>
                <Input placeholder="Title" 
               onChangeText={(title) => this.setState({title})}
               value={this.state.title}
                 />
              </Item>
              <Textarea  rowSpan={3} bordered placeholder="Description"
              onChangeText={(description) => this.setState({description})}
              value={this.state.description}
               />
  
              <TouchableOpacity 
              onPress={ () => {
                ImagePicker.openPicker({
                   width: 2700,
                   height: 2500,
                   cropping: true
                 }).then(image => {
                   //console.log('image:'+image);
                   //for (var i in image){
                  // Alert.alert('image ',image.path)                          
                   //}
                   this.setState( {'picturePath': image.path})
                 });
             } }>
               <Image source={{uri: this.state.picturePath}} style={styles.image}/>
              </TouchableOpacity>
              
              
              
      
                {/*<Button style={styles.imgbtn} ><Text>ADD IMAGE</Text></Button>*/}
                
                <Button style={styles.imgbtn1}
                onPress = {() => {
                  const newNotice ={
                    title: this.state.title,
                    date: 'March 15, 2018',
                    description: this.state.description,
                    picture: this.state.picturePath
                  }

                  this.setState( {
                    noticeList: [newNotice, ...this.state.noticeList], visibleNotices: true
                  }
                  
                  )

                  
                  
                } }
                ><Text>POST</Text></Button>
                
                
                
      
            </Form>
            
            
             ) }
          

       
        </Content>
         </Container>
      
    )

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

},

  imgbtn: {
    marginTop: 80,
    marginLeft: 80  
},

  imgbtn1: 
  {
    marginLeft: 80,
    padding: 20,
    marginTop: 20
},
    image:
    {
      height: 200,
      width:200
    }

});







    