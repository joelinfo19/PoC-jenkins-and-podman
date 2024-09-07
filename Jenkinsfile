pipeline {
    agent any

    environment {
        IMAGE_NAME = "hello-world-podman"
        CONTAINER_NAME = "hello-world-container"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/joelinfo19/PoC-jenkins-and-podman.git'  // Reemplaza con tu URL
            }
        }

        stage('Build Image with Podman') {
            steps {
                script {
                    sh 'podman build -t ${IMAGE_NAME} .'
                }
            }
        }

        stage('Run Container with Podman') {
            steps {
                script {
                    // Detener cualquier contenedor en ejecución con el mismo nombre
                    sh 'podman rm -f ${CONTAINER_NAME} || true'
                    
                    // Ejecutar el contenedor
                    sh 'podman run -d -p 8000:8000 --name ${CONTAINER_NAME} ${IMAGE_NAME}'
                }
            }
        }

        stage('Test Application') {
            steps {
                script {
                    // Espera a que el contenedor esté listo
                    sh 'sleep 5'
                    
                    // Ejecutar una prueba sencilla para verificar que la aplicación está en funcionamiento
                    sh 'curl http://localhost:8080'
                }
            }
        }
    }

    post {
        always {
            script {
                // Detener y eliminar el contenedor
                sh 'podman rm -f ${CONTAINER_NAME}'
            }
        }
    }
}

