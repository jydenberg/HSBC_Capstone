node {

    def project = 'HSBC_BOT_DEV'
    def appName = 'hsbc-bot-webhook'
    def imageTag = "gcr.io/${project}/${appName}:${env.BRANCH_NAME}.${env.BUILD_NUMBER}"

    sh("echo Building ${imageTag} ...")

}