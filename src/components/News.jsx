import React, { Component } from "react";

export class News extends Component {
  render() {
    return (
      <div className="News">
        <div className="jumbotron jubotron-fluid jumbotron-news" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-primary mb-3">NEWS</h2>
            </div>
            <div className="col md-8">
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti voluptatibus dicta consequatur fuga placeat facilis
                fugiat nostrum iusto officia architecto eius perspiciatis,
                laboriosam dolorem voluptates natus itaque! Nam, illo est? Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
                deserunt, assumenda ipsum, eius laborum aliquam iste quaerat
                officia error expedita magnam odio ea numquam? Vel libero unde
                omnis autem? At?
              </p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti voluptatibus dicta consequatur fuga placeat facilis
                fugiat nostrum iusto officia architecto eius perspiciatis,
                laboriosam dolorem voluptates natus itaque! Nam, illo est? Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
                deserunt, assumenda ipsum, eius laborum aliquam iste quaerat
                officia error expedita magnam odio ea numquam? Vel libero unde
                omnis autem?
              </p>
              <p className="text-muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto iste deleniti animi, eveniet labore consectetur
                recusandae ipsum omnis distinctio! Assumenda quas nisi nobis
                similique quasi enim ex, id vitae libero!
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="img-thumbnail mb-3"
                src="https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
                aut temporibus nostrum minus repellat, unde, assumenda quae
                beatae dicta asperiores deleniti reiciendis!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
