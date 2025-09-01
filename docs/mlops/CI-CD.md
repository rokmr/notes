# CI/CD

## Continuous Deployment

- GitHub repo
- Dev env
- QA env
- UAT env
- Production

## Developer Workflow


**Key Stages**

- Coding
- Version Control
- Code Review
- Testing
- Continuous Integration
- CD
- Monitoring

**Example**

1. Feature Development
2. Push and Pull Request (PR)
3. Automated CI Pipeline
        - Once PR is opened, build the application and runs all the test cases.
        - If pipeline pases then code will be approved then it will be merged to main
4. Continuous Deployment
        - After merging the PR a CD pipeline is triggered
        - Application is deployed to staging environment
