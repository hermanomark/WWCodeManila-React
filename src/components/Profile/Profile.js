import React, { Component } from "react";

import Like from "components/Profile/Like";
import PageContent from "components/Elements/PageContent";
import ProfileCard from "components/Profile/ProfileCard";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  addLike = () => {
    this.setState(previousState => ({
      likes: previousState.likes + 1
    }));
  };

  subtractLike = () => {
    this.setState(previousState => ({
      likes: previousState.likes - 1
    }));
  };

  render() {
    return (
      <PageContent>
        <ProfileCard headerIsHidden={true} />
        <p className="has-text-centered">How much do you like Barbara?</p>

        <Like
          likes={this.state.likes}
          addLike={this.addLike}
          subtractLike={this.subtractLike}
        />
      </PageContent>
    );
  }
}

export default Profile;
