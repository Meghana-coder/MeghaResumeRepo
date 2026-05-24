pipeline {
    agent any

    environment {
        IMAGE_NAME = "meghana1298/meghana-resume"
        IMAGE_TAG = "v${BUILD_NUMBER}"
        DOCKERHUB_CREDENTIALS = "dockerhub-creds"
        GIT_REPO = "https://github.com/Meghana-coder/MeghaResumeRepo.git"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: "${GIT_REPO}"
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
                """
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: "${DOCKERHUB_CREDENTIALS}",
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    sh '''
                    echo "$PASS" | docker login -u "$USER" --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh """
                docker push ${IMAGE_NAME}:${IMAGE_TAG}
                """
            }
        }

        stage('Update K8s Manifest (GitOps Trigger)') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'github-creds', usernameVariable: 'GIT_USER', passwordVariable: 'GIT_PASS')]) {
                    sh """
                    sed -i 's|image:.*|image: ${IMAGE_NAME}:${IMAGE_TAG}|g' k8s/deployment.yaml

                    git config user.email "jenkins@ci.com"
                    git config user.name "jenkins"

                    git add k8s/deployment.yaml
                    git commit -m "Update image to ${IMAGE_TAG}" || echo "No changes"

                    git remote set-url origin https://${GIT_USER}:${GIT_PASS}@github.com/Meghana-coder/MeghaResumeRepo.git
                    git push origin main
                    """
                }
            }
        }
    }

    post {
        success {
            echo "CI/CD completed successfully"
            echo "Image pushed: ${IMAGE_NAME}:${IMAGE_TAG}"
        }

        failure {
            echo "Pipeline failed"
        }
    }
}