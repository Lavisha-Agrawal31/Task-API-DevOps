pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'lavisha3101/task-api-devops'
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials' // Docker Hub credentials in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Log in to Docker Hub') {
            steps {
                docker.withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS_ID, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                }
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE_NAME .'
                sh 'docker push $DOCKER_IMAGE_NAME'
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}
