const awsconfig = {
    aws_project_region: "ap-south-1",  // The AWS region where your resources are hosted

    // API Gateway configuration for REST APIs
    aws_cloud_logic_custom: [
        {
            name: "yourApiName",
            endpoint: "https://your-api-endpoint.amazonaws.com/stage",
            region: "your-api-region"
        }
    ],

};

export default awsconfig;