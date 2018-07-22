import React from "react";

const Like = ({ likes, addLike, subtractLike }) => (
  <div className="columns is-centered">
    <div className="field has-addons has-addons-left has-addons-right">
      <div className="control">
        <button className="button is-danger is-large" onClick={subtractLike}>
          -1
        </button>
      </div>
      <div className="control">
        <input
          className="input is-large has-text-centered"
          type="text"
          value={likes}
        />
      </div>
      <div className="control">
        <button className="button is-info is-large" onClick={addLike}>
          +1
        </button>
      </div>
    </div>
  </div>
);

export default Like;
