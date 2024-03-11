# FUEL CLOUD APPLICATION

The FUEL CLOUD APPLICATION INTERFACE DEVELOPED WITH REACT

Developed by:
<a href="https://github.com/paullaster">Paullaster</a>


# SETTING UP THIS PROJECT

## DEVELOPMENT


## PRODUCTION
Clone this project to your production server.
Update the <strong>prod.conf </strong> file server command with your server's public IP address.
On your production web server, add a proxy pass command to serve this docker service against the port set.
Add the port set on the proxy pass to the docker run command in your <strong>package.json</strong> file

Then run:
`npm run docker-build`