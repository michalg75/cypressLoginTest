pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:20.14.0'
    }
  }

  stages {
    stage('build and test') 
      steps {
        'npx cypress run --browser chrome'
      }
    }
  }