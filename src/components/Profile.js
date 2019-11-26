import React, { Component } from 'react'
import { Header, Container, Image, Form, Input } from 'semantic-ui-react'
// import PostHeader from './PostHeader'
import '../App.css';



class Profile extends Component {
 constructor(props) {
 super(props);
 this.state = {
 DishName: "",
 ListDescription: [],
 ListIngredient: [],
 ListProcedure: []
 }

 }

 DishName = (e) => {

 }

 render() {



 return (
 <div className="background">
 <div className="Cover">
 <Header as='h2' icon textAlign='left' style={{ height: 200 }}>
 <Image style={{}} circular src={require('../photos/logo.png')} />
 </Header>
 </div>

 <div className="container1">
 <Container style={{ height: 200, width: 1500 }}>
 <Form>
 <Form.Group>
 <Form.Field label="What's my Dish?" 
 style={{
 width: 250,
 fontSize: 30,
 marginTop: 15,
 marginRight: 50,
 marginLeft: 10
 }}
 value= {this.state.DishName}
 OnSubmit
 
 />
 <Form.Input fluid placeholder='Name of your Dishes..'
 style={{
 width: 770,
 fontSize: 20,
 marginTop: 5,
 }}
 required
 />
 <Form.TextArea fluid placeholder='Description'
 style={{
 width: 380,
 height: 100,
 fontSize: 20,
 marginTop: 5
 }}
 required
 />
 </Form.Group>
 <Form.Group
 style={{
 marginLeft: 10
 }}
 >
 <Input type='file' fluid
 style={{
 width: 300,
 height: 100,
 marginLeft: 10,
 marginTop: -50
 }}
 required
 />
 <Form.TextArea fluid placeholder='Ingredient'
 style={{
 width: 350,
 height: 100,
 marginLeft: 20,
 fontSize: 20,
 marginTop: -50
 }}
 required
 />
 <Form.TextArea fluid placeholder='Procedure'
 style={{
 width: 350,
 height: 100,
 marginLeft: 20,
 fontSize: 20,
 marginTop: -50
 }}
 required
 />
 <Form.Button
 style={{
 marginTop: -3,
 fontSize: 20,
 }} >
 POST
 </Form.Button>
 <Form.Button
 style={{
 marginTop: -3,
 fontSize: 20
 }} >CANCEL</Form.Button>
 </Form.Group>
 </Form>
 </Container>
 </div>
 <div>
 <Container style={{ height: 200, marginLeft:50 }}>
 <label className="Dishes">
 My Dishes
 </label>
 </Container>
 </div>
 </div>
 );
 }
}

export default Profile