# Nodejs Setup
- Init the project
- Install extensions
- Add start script to package.json
```sh
npm init
npm install express nodemon
```
- Open a terminal and start the application
```sh
npm start
```
- Go to the URL http://localhost:3000/
# Jenkins Setup
- Pull jenkins
- Run jenkins
- Get the password from the logs file
```sh
docker pull jenkins/jenkins
docker run -p 8080:8080 -p 50000:50000 -d -v jenkins_home:/var/jenkins_home jenkins/jenkins
docker logs d9e39d338955
```
- Go to the URL http://192.168.1.101:8080
- Create user and password: jenkins/s3cret
# Dockerize
- Clone the repository
```sh
git clone https://github.com/ralarconb/fuzzy.git
```