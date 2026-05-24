pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t meghana-resume-build .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker stop meghna-resume-container || true
                docker rm meghna-resume-container || true
                docker run -d -p 8000:3000 --name meghna-resume-container meghana-resume-build
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline submitted successfully'
        }

        failure {
            echo 'Pipeline failed'
        }
    }
}