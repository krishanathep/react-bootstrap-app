import React, { Component } from "react";

export class UserList extends Component {
  render() {
    return (
      <div className="UserList">
        <div className="row">
          <div className="col-md-12 mt-3">
            <h2 className='text-primary' align='center'>OUR USERS</h2>  
            </div>  
          {this.props.users.map((user) => (
            <div className="col-md-4">
              <div className="card mt-3" key={user.id}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 col-md-6">
                      <img
                        src={`https://robohash.org/${user.id}?set=set2&`}
                        alt=""
                        class="rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="col-6 col-md-6">
                      <h4 className="card-text">{user.name}</h4>
                      <p className="card-text text-muted">{user.email}</p>
                      <button className='btn btn-primary'>READ MORE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UserList;
