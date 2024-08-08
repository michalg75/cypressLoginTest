pipeline {
  agent any


  tools {nodejs "Node"}


  environment {
      CHROME_BIN = '/bin/google-chrome'
   
  }
  stages {
      stage('Dependencies') {
          steps {
            'npm i'
          }
      }
      stage('e2e Tests') {
            steps {
            'npx cypress run --browser chrome'
                }
            }
      }
}