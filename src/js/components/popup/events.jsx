import { React } from "libs";
import Event from "components/popup/event";

export default React.createClass({
  renderEvent: function(data) {
    return <Event {...data}
                  key={data.id}
                  actions={this.props.actions}
                  accountID={this.props.accountID}
                  creatorImage={data.creator.avatar_url}
                  creatorName={data.creator.name}
                  bucketName={data.bucket.name} />;
  },

  renderEvents: function() {
    return (
      <ul className="notification-list">
        {this.props.events.map(this.renderEvent)}
      </ul>
    );
  },

  renderBlankSlate: function() {
    return (
      <div className="notification-list-blank-slate">
        <i className="icon icon-remove-sign"></i>
        Sorry, no events here.
      </div>
    );
  },

  render: function() {
    return this.props.events.length ? this.renderEvents() : this.renderBlankSlate();
  }
});
