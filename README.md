# FUEL CLOUD APPLICATION

The FUEL CLOUD APPLICATION INTERFACE DEVELOPED WITH REACT

Developed by:
<a href="https://github.com/paullaster">Paullaster</a>


# SETTING UP THIS PROJECT

### DEVELOPMENT
##### Prerequisites
<ul>
<li>Node v20.10 and latest</li>
<li>Vite v5 and latest</li>
</ul>

Clone to this project to you development environment using this link: 
<a href="https://github.com/finiflow/fuelcloud-ui.git" target="_blank"> `https://github.com/finiflow/fuelcloud-ui.git`</a>
`git clone  https://github.com/finiflow/fuelcloud-ui.git`

Navigate to the project root folder and 
###### Run the following commands after cloning the project
`npm run install` to install dependencies and dev-dependencies packages for this project

Then run `npm run dev` to serve the project on your local host.

Go your browser and checkout the project using `localhost:5173`

<strong>ENJOY ):</strong>

### PRODUCTION
Clone this project to your production server.
<a href="https://github.com/finiflow/fuelcloud-ui.git" target="_blank"> `https://github.com/finiflow/fuelcloud-ui.git`</a>
`git clone https://github.com/finiflow/fuelcloud-ui.git`

Update the <strong>prod.conf </strong> file server command with your server's public IP address.
On your production web server, add a proxy pass command to serve this docker service against the port set.
Add the port set on the proxy pass to the docker run command in your <strong>package.json</strong> file

Then run:
`npm run docker-build`

<strong>art by <a href="https://github.com/paullaster">Paullaster</a></strong>