# Green Cities Alliance

- [Live Link](https://gcalliance.netlify.app/)

## How to run application 

** 1 Clone repo 
sudo groupadd docker
sudo usermod -aG docker $USER

** 2 Build the docker container using the code below
 `docker build -t gca-frontend-image .`

** 3 Run the docker container using the below code
 
 `docker run -d -p 8080:80 --name gca-frontend-container gca-frontend-image`
