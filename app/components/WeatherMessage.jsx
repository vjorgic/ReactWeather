var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    return(
      <h3 className="text-center">{this.props.location + ' ' + this.props.temp + ' C'}</h3>
    );
  }
});

module.exports = WeatherMessage;
