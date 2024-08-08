pipeline {
  agent any


  tools {nodejs "Node"}


  environment {
      CHROME_BIN = '/bin/google-chrome'
   
  }
  stages {
      stage('Dependencies') {
          steps {
            bat 'npm i'
          }
      }
      stage('e2e Tests') {
            steps {
            bat 'npx cypress run --browser chrome'
                }
            }
      }
}