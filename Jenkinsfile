pipeline {
    agent any

    environment {
        IMAGE_NAME = "meghana-resume-build"
        IMAGE_TAG = "v${BUILD_NUMBER}"
    }

    stages {

        // stage('Checkout') {
        //     steps {
        //         git branch: 'main',
        //         url: 'https://github.com/Meghana-coder/MeghaResumeRepo.git'
        //     }
        // }

        stage('Build Docker Image') {
            steps {
                sh """
                docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
                """
            }
        }

        stage('Run Docker Container') {
            steps {
                sh """
                docker stop meghna-resume-container || true
                docker rm meghna-resume-container || true

                docker run -d \
                -p 8000:3000 \
                --name meghna-resume-container \
                ${IMAGE_NAME}:${IMAGE_TAG}
                """
            }
        }

        stage('List Images') {
            steps {
                sh 'docker images'
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully"
            echo "Created image: ${IMAGE_NAME}:${IMAGE_TAG}"
        }

        failure {
            echo "Pipeline failed"
        }
    }
}