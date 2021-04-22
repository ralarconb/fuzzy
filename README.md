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
# Create Pipeline
- New Item/fuzzy-pipeline/Multibranch Pipeline/OK
- Branch Sources/Add source/Git/Project Repository
  - https://github.com/ralarconb/fuzzy.git
- Credentials/Add/fuzzy-pipeline
  - Fill username, password, ID and click at OK/Add
  - Select the new Folder Credential
- Behaviors/Add/Filter by name (with regular expression)
```sh
^dev|master|features|main.*$
```
- Save
- Dashboard/fuzzy-pipeline
  - Scan Multibranch Pipeline Now
  - Scan Multibranch Pipeline Log
- Create Jenkinsfile
# Dockerize
- Clone the repository
```sh
git clone https://github.com/ralarconb/fuzzy.git
```