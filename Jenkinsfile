pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'lavisha3101/task-api-devops'
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Lavisha-Agrawal31/Task-API-DevOps.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('', DOCKER_CREDENTIALS_ID) {
                        docker.image("${DOCKER_IMAGE}:latest").push()
                    }
                }
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                aws ec2 describe-instances --query \
                "Reservations[*].Instances[*].PublicIpAddress" --output text > instance_ip.txt
                INSTANCE_IP=$(cat instance_ip.txt)
                ssh -o StrictHostKeyChecking=no ubuntu@$INSTANCE_IP "
                docker stop task-api-container || true;
                docker rm task-api-container || true;
                docker run -d -p 443:5000 --name task-api-container ${DOCKER_IMAGE}:latest;
                "
                '''
            }
        }
    }
}
