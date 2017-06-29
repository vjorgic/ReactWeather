var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var location = this.refs.locationRef.value;
    if(location.length > 0)
    {
      this.refs.locationRef.value='';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input placeholder="Enter City Name" type="text" ref="locationRef"/>
          <button className="button expanded hollow">Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
