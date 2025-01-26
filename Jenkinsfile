pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub repository (configured in Jenkins job)
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    docker.build('lavisha3101/task-api-devops')
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                script {
                    // Log in to Docker Hub
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                        docker.image('lavisha3101/task-api-devops').push()
                    }
                }
            }
        }
    }
}
