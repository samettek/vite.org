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
          ls -al static.tar

        '''
      }
    }

    stage('deploy') {
      steps {
        sh '''
          scp static.tar vite.org:/home/ubuntu/website/static.tar
          ssh vite.org "cd ~/website && rm -rf ./.nuxt && tar -xvf static.tar && pm2 restart 0"
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
