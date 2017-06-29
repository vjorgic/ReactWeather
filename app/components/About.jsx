var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is a weather application built on React. I have built this for the Complete React Web App Dev Course</p>
        <p>Here are some of the tools I used:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This as the Java Script framework used.
          </li>
          <li>
            <a href="https://openweathermap.org">Open Weather Map</a> - Also used Open Weather Map to search the weather data for the city
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
