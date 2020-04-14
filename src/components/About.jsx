import React, { Component } from "react";

export class About extends Component {
  constructor() {
    super();

    this.state = {
      
      teams: [
        {
          id: 1,
          title: "Krishanathep.J",
          text: "Web Developer",
        },
        {
          id: 2,
          title: "Narumon.P",
          text: "Digital Marketing",
        },
        {
          id: 3,
          title: "Teerapong.W",
          text: "Customer Support",
        },
      ],
    };
  }

  render() {
    return (
      <div className="About">
        <div className="jumbotron jumbotron-fluid jumbotron-about" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-3" align="center">
              <h2 className="text-primary mb-3">ABOUT US</h2>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                animi expedita ipsam voluptate? Numquam veritatis odio,
                perspiciatis illo, ratione natus dignissimos excepturi, corrupti
                deserunt id amet autem aspernatur ullam at.
              </p>
            </div>
            <div className="col-md-4">
              <div className="card mt-5 border-0" align='center'>
                <div className="card-body">
                  <h1><i className='fas fa-globe text-primary'></i></h1>
                  <h4 className="card-title text-primary">Target Audiences</h4>
                  <p className="card-text text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem quaerat animi sed vel quam minima? Autem rem dolor
                    molestias! Veniam officia asperiores perferendis, qui vel
                    repudiandae porro cum nihil ab?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mt-5 border-0" align='center'>
                <div className="card-body">
                  <h1><i className='fas fa-user text-primary'></i></h1>
                  <h4 className="card-title text-primary">Preferred By Many</h4>
                  <p className="card-text text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem quaerat animi sed vel quam minima? Autem rem dolor
                    molestias! Veniam officia asperiores perferendis, qui vel
                    repudiandae porro cum nihil ab?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mt-5 border-0" align='center'>
                <div className="card-body">
                  <h1><i className='fas fa-users text-primary'></i></h1>
                  <h4 className="card-title text-primary">Valued Clients</h4>
                  <p className="card-text text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem quaerat animi sed vel quam minima? Autem rem dolor
                    molestias! Veniam officia asperiores perferendis, qui vel
                    repudiandae porro cum nihil ab?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
