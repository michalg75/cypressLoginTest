pipeline {
  agent any


  tools {nodejs "Node"}


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