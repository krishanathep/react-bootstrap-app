import React, { Component } from "react";

export class About extends Component {
  constructor() {
      super()

      this.state = {
        services: [
            { id: 1, icon: 'fas fa-users', title: '1,000+', text: 'Total Users' },
            { id: 2, icon: 'fas fa-city', title: '500+', text: 'Cities' },
            { id: 3, icon: 'fas fa-code', title: '20+', text: 'Experience' },
            { id: 4, icon: 'fas fa-globe', title: '190+', text: 'Grobals' },
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
        ]
      }
  } 

  render() {
    return (
      <div className="About">
        <div className="jumbotron jumbotron-fluid jumbotron-about" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-3" align='center'>
              <h2 className="text-primary mb-3">WHO WE ARE</h2>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                animi expedita ipsam voluptate? Numquam veritatis odio,
                perspiciatis illo, ratione natus dignissimos excepturi, corrupti
                deserunt id amet autem aspernatur ullam at.
              </p>
            </div>
            {this.state.teams.map((team) =>(
            <div className="col-md-4 mb-5">
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
          </div>
        </div>
      </div>
    );
  }
}

export default About;
