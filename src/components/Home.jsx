import React, { Component } from "react";
import Header from "../layouts/Header";

export class Home extends Component {
  constructor() {
    super();

    this.state = {
      services: [
        {
          id: 1,
          icon: "fas fa-chart-line",
          title: "Title One",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,qui nesciunt corrupti nisi ad fugit nam quos aut. Maiores, nemo.",
        },
        {
          id: 2,
          icon: "fas fa-calendar-alt",
          title: "Title One",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,qui nesciunt corrupti nisi ad fugit nam quos aut. Maiores, nemo.",
        },
        {
          id: 3,
          icon: "fas fa-cart-plus",
          title: "Title One",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,qui nesciunt corrupti nisi ad fugit nam quos aut. Maiores, nemo.",
        },
        {
          id: 4,
          icon: "fas fa-bug",
          title: "Title One",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,qui nesciunt corrupti nisi ad fugit nam quos aut. Maiores, nemo.",
        },
        {
          id: 5,
          icon: "fas fa-battery-full",
          title: "Title One",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,qui nesciunt corrupti nisi ad fugit nam quos aut. Maiores, nemo.",
        },
        {
          id: 6,
          icon: "fas fa-code",
          title: "Title One",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,qui nesciunt corrupti nisi ad fugit nam quos aut. Maiores, nemo.",
        },
      ],
      works: [
        {
          id: 1,
          name: "img-1",
          image:
            "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          link:
            "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          id: 2,
          name: "img-2",
          image:
            "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          link:
            "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          id: 3,
          name: "img-3",
          image:
            "https://images.pexels.com/photos/270700/pexels-photo-270700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          link:
            "https://images.pexels.com/photos/270700/pexels-photo-270700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 4,
          name: "img-4",
          image:
            "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          link:
            "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          id: 5,
          name: "img-5",
          image:
            "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
          link:
            "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          id: 6,
          name: "img-6",
          image:
            "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          link:
            "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ],
      contacts: [
        {
          id: 1,
          icon: "fas fa-phone",
          text: "087-324-3929",
        },
        {
          id: 2,
          icon: "fas fa-envelope",
          text: "Krishanathep@gmail.com",
        },
        {
          id: 3,
          icon: "fab fa-facebook-square",
          text: "I am at Facebook",
        },
      ],
      teams: [
          {
              id: 1,
              title: 'Krishanathep.J',
              text: 'Web Developer'
          },
          {
            id: 2,
            title: 'Narumon.P',
            text: 'Digital Marketing'
        },
        {
            id: 3,
            title: 'Teerapong.W',
            text: 'Customer Support'
        },
      ],
      email: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  sendMessage() {
    alert('Thank You For Your Message!')

    this.setState({ email: '', message: '' })
  }

  render() {
    return (
      <div className="Home container">
        <Header />
        <div className="row">
          <div className="col-md-8 offset-md-2 my-5" align="center">
            <h2 className="text-primary">OUR SERVICES</h2>
            <h5 className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eaque
              nostrum, tenetur harum distinctio quis,
            </h5>
          </div>
          {this.state.services.map((service) => (
            <div className="col-md-4">
              <div className="card mt-3 border-0" align="center">
                <div className="card-body">
                  <h1 className="text-primary">
                    <i className={service.icon}></i>
                  </h1>
                  <h4 className="card-title text-primary">{service.title}</h4>
                  <p className="card-text text-muted">{service.body}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-md-8 offset-md-2 my-5" align="center">
            <h2 className="text-primary">OUR WORK</h2>
            <h5 className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eaque
              nostrum, tenetur harum distinctio quis,
            </h5>
          </div>
          {this.state.works.map((work) => (
            <div className="col-md-4">
              <a href={work.link}>
                <img className="img-thumbnail mt-3" src={work.image} alt="" />
              </a>
            </div>
          ))}
          <div className="col-md-8 offset-md-2 my-5" align="center">
            <h2 className="text-primary">OUR TEAM</h2>
            <h5 className="text-muted">
              Ready to start your next project? Give a call or use live chat,
              send an email and I will get back to you as soon as possible!
            </h5>
          </div>
          {this.state.teams.map((team) =>(
          <div className="col-md-4">
              <div className="card mt-3 border-0" align='center'>
                  <div className="card-body">
                      <img className='rounded-circle img-thumbnail' src={`https://robohash.org/${team.id}?set=set2&size=180x180`} alt=""/>
                      <h4 className="card-title text-primary">
                          {team.title}
                      </h4>
                      <text className="card-text text-muted">
                          {team.text}
                      </text>
                  </div>
              </div>
          </div>
          ))}
          <div className="col-md-8 offset-md-2 my-5" align="center">
            <h2 className="text-primary">OUR CONTACT</h2>
            <h5 className="text-muted">
              Ready to start your next project? Give a call or use live chat,
              send an email and I will get back to you as soon as possible!
            </h5>
          </div>
          {this.state.contacts.map((contact) => (
            <div className="col-md-4">
              <div className="text-muted card mt-3 border-0" align="center">
                <div className="card-body">
                  <h1>
                    <i className={contact.icon}></i>
                  </h1>
                  <p className="card-text text-primary">{contact.text}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-md-12">
            <div className="card my-5 border-0">
              <div className="card-body">
                  <div className="form-group">
                    <label className="text-muted">Email :</label>
                    <input
                      type="text"
                      name='email'
                      value={this.state.email}
                      className="form-control"
                      placeholder="Enter Your Email..."
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-muted">Message :</label>
                    <textarea
                      cols="30"
                      rows="5"
                      name='message'
                      value={this.state.message}
                      className="form-control"
                      placeholder="Enter Your Message..."    
                      onChange={this.handleChange}              
                    ></textarea>
                  </div>
                  <button onClick={this.sendMessage} className="btn btn-primary btn-block">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
