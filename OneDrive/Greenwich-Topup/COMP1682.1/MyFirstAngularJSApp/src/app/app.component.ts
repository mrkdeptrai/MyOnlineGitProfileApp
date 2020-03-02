import { Component } from '@angular/core';

@Component({
  selector: 'my-profile',
  template: `
  <div id = 'container'>  
    <h1>My Profile</h1>
    <img src = {{person.avatar}}/>
    <h2>My name is {{person.firstname}} {{person.lastname}}</h2>
    <h2>Age: {{person.age}}</h2>
    <h2>Address 
      <ul>
        <li>Street: {{person.address.street}}</li>
        <li>City: {{person.address.city}}</li>
        <li>Country: {{person.address.country}}</li>
      </ul>
    </h2> 
    <h2> Friends
      <ul>
        <li *ngFor = "let friend of person.friends">
          Name: {{friend.name}}, Age: {{friend.age}}
        </li>
      </ul>
    </h2>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstAngularJSApp';
  person = {
    firstname: 'Khoa',
    lastname: 'Nguyen',
    age: 23,
    avatar: 'assets/vuaanvuakhoc.jpg',
    address: {
      street: '15 Dong Quan',
      city: 'Ha Noi',
      country: 'Viet Nam'
    },
    friends: [
      {name: 'Sang', age: 21},
      {name: 'Thanh', age: 23},
      {name: 'Hung', age: 20}
    ]
  }
}
