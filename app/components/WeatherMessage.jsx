var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    return(
      <div>{this.props.location + ' ' + this.props.temp}</div>
    );
  }
});

module.exports = WeatherMessage;
