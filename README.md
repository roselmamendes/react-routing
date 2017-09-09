# React routing
From this tutorial: https://scotch.io/tutorials/routing-react-apps-the-complete-guide
https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
# Run on docker

Build the image:
`docker build -t react-routing .`

`docker run -it --rm --name react-routing -v "$PWD":/usr/src/app /bin/bash`

Run webpack in watch mode (do that in a separated tab on the terminal):
`docker run -it --rm --name react-routing -v "$PWD":/usr/src/app -t react-routing npm run watch`

In a different tab on the terminal run this in order to up the server:
`docker run -it --rm -p 5000:5000 -v "$PWD":/usr/src/app -t react-routing npm run serve`
