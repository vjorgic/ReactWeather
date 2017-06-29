var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var {location, temp} = this.props;
    return(
      <h3 className="text-center">It's {`${temp} C`} in {location}</h3>
    );
  }
});

module.exports = WeatherMessage;
