pipeline {
  agent any


  tools {nodejs "Node"}


  environment {
    //   CHROME_BIN = '/bin/google-chrome'
   
  }
  stages {
      stage('Dependencies') {
          steps {
              sh 'npm i'
          }
      }
      stage('e2e Tests') {
            steps {
               sh 'npx cypress run --browser chrome'
                }
            }
        stage('Deploy') {
            steps {
              echo 'Deploying....'
          }
      }
}
}