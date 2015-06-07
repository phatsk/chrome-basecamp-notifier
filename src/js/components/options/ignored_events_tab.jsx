define([
  "fluxo",
  "react",
  "jsx!components/options/item_checkbox"
], function(
  Fluxo,
  React,
  ItemCheckbox
) {
  return React.createClass({
    toggle: function (eventType) {
      Fluxo.callAction("ConfigsIgnoredEventsTypes", "toggle", eventType);
    },

    renderEventOption: function(eventType) {
      return <ItemCheckbox onChange={this.toggle.bind(this, eventType.key)}
                           key={eventType.key}
                           checked={eventType.ignored}
                           label={eventType.label} />;
    },

    render: function () {
      return (
        <div className="tab-content">
          {this.props.eventTypes.map(this.renderEventOption)}
        </div>
      );
    }
  });
});
