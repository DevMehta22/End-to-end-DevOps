pipeline {
    agent any

    stages {
        stage('code') {
            steps {
                echo "clonning the code"
                git url:"https://github.com/DevMehta22/02-Restaurant-Website.git", branch:"main"
            }
        }
        stage('Build and Deploy') {
            steps {
                echo "Building the code"
                sh "docker compose down && docker compose up -d --build"
            }
        }
        stage('Push') {
            steps {
                echo "push in progress"
                withCredentials([usernamePassword(credentialsId:"dockerHub",passwordVariable:"dockerPass",usernameVariable:"dockerUser")]){
                    sh "docker tag restaurant-cicd-frontend ${env.dockerUser}/restaurant-cicd-frontend:latest"
                    sh "docker tag restaurant-cicd-backend ${env.dockerUser}/restaurant-cicd-backend:latest"
                    sh "docker login -u ${env.dockerUser} -p ${env.dockerPass}"    
                    sh "docker push ${env.dockerUser}/restaurant-cicd-frontend:latest"
                    sh "docker push ${env.dockerUser}/restaurant-cicd-backend:latest"
                }
                
                
            }
        }
        
    }
}
