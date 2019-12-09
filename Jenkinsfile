pipeline {
  agent any

  environment {
    NODE_ENV = 'production'
  }

  options {
    retry(3);
    timeout(time: 5, unit: 'MINUTES')
  }

  stages {
    stage('build') {
      when {
        allOf {
        branch 'master';
        environment name: 'NODE_ENV', value: 'production'
        }
      }
      steps {
        sh '''
          rm -rf ./.nuxt ./node_modules && yarn
          npm run build && tar -cvf static.tar ./.nuxt/*
          cp static.tar ~/website/
        '''
      }
    }

    stage('deploy') {
      steps {
        sh '''
          # rm -rf ./.nuxt ./node_modules && yarn
          # npm run build && tar -cvf static.tar ./.nuxt/*
          # cp static.tar ~/website/
        '''
      }
    }
  }

  post {
    always {
      curl 'https://vite.org'
      deleteDir()
    }
  }
}
