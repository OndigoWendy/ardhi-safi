
# About Ardhi Safi
Ardhi Safi is a real estate company that specializes in the sale and rental of residential and commercial properties. Our team of experienced agents is dedicated to helping clients find the perfect property to fit their needs and budget. We pride ourselves on providing exceptional customer service and are committed to making the real estate process as smooth and stress-free as possible. Whether you are looking to buy, sell, or rent, Ardhi Safi is here to assist you every step of the way. Contact us today to learn more about how we can help you achieve your real estate goals.

To use the Geolocation API in a React app, you will need to use the navigator.geolocation object, which is available on the window object.

Here's an example of how you can use the Geolocation API to get the current position of the user:


navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});
This will call the getCurrentPosition method, which will attempt to get the current position of the user. If the position is successfully obtained, the callback function will be called with a Position object as an argument. This object contains properties like coords, which has properties for the latitude and longitude of the user's position.

You can also pass an options object as a second argument to getCurrentPosition to specify things like the maximum age of cached position data that you are willing to accept, or the timeout for the request.


navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
}, {
  maximumAge: 60000,
  timeout: 5000,
});
Note that the Geolocation API is a feature of the browser, and not all browsers may support it. It's a good idea to check for the existence of navigator.geolocation before attempting to use it, to ensure that it is available.


if ('geolocation' in navigator) {
  // geolocation is available
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
  });
} else {
  // geolocation is not available
  console.log('Geolocation is not available');
}


