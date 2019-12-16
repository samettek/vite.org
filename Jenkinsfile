pipeline {
  agent any

  environment {
    NODE_ENV = 'production'
  }

  options {
    retry(3);
    timeout(time: 10, unit: 'MINUTES')
  }

  stages {
    stage('build') {
      steps {
        sh '''
          set -e
          yarn --registry https://registry.npm.taobao.org && npm run build
          tar -cvf static.tar .nuxt/*
          ls -al static.tar
        '''
      }
    }

    stage('deploy') {
      steps {
        sh '''
          set -e
          scp static.tar vite.org:/home/ubuntu/website/
          ssh vite.org "cd /home/ubuntu/website && rm -rf .nuxt && tar -xvf static.tar && pm2 restart 0"
        '''
      }
    }
  }

  post {
    always {
      sh '''
        curl https://vite.org
      '''

      deleteDir()
    }
  }
}
