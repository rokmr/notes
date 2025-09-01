# GitHub Action

## Overview
GitHub Actions automates Python development workflows, including testing, model training, 
and deployment of deep learning applications.

## Attributes

```
name: name of workflow 
on: the GitHub event that triggers the workflow
jobs: defines the block that list the jobs for the workflow
runs-on: type of machine to run the job
steps: to list action and command
Each steps has access to file system in the virtual environment but runs on its distinct and seperate process
uses: loction of the action(tell job to use specific action to use, actions are bundles of codes). Action are docker images.
run: runs command in the virtual environment shell
```

## Workflows

- It define the event that triggers the GitHub Actions
- It also define which action will be run based on the events
- One repository can contain several workflow each calling different action based on specific events
- workflows are located at `.github/workflows`

**Example**

```
name: first

on: push

jobs:
    job1:  # we can name as per our convenience
        name: First job
        runs-on: ubuntu-latest
        steps: 
        - name: Step one
          uses: action/checkout@v2
        - name: Step two
          run: env | sort
    job2:
        name: Second job
        runs-on: windows-latest
        steps:
        - name: Step one
          uses: action/checkout@v2
        - name: Step two
          run: "Get-ChildItem Env: | Sort-Object Name"
```

```
# Adding an action
uses: Execute an action in the operating system

# public repo
uses: {}/{}@{}
uses: octocat/super-cool-action@v1

# same repository as the workflow
uses: ./path to the action
uses: ./github/actions/my-local-location

# docker image registry
uses: docker://{image}:{tag}
uses: docker://ello-world:latest

# Can be added from market place also
```

```
# Adding command

run: execute command in the operating system shell
bash: default shell for Ubuntu, macOS

# Single line Command
run: {command}{parameters}{arguments}
run: mv ./output ./archive

# Multiline Command
run: |
    Command 1
    Command 2
```

```
# Adding dependencies (job need sequential rather parallel)
# add parameter need to that job
# needs: Identifies one or more job that must complete successfully before a job will run.

jobs:
    job1:
    job2:
    job3:
        needs: [job1, job2]
```

```
# Adding condition to a workflow

on:
    push:
        branches:
            - develop
    pull_request:
        branches:
            - master
```

```
# Passing Argument to an Action
uses: {github account}/{action name}
with: 
    key: val
    key: val

# Example
steps:
    -   name: checkout the code
        uses: actions/checkout@v2
        with:
            repositoty: apache/tomcat
            ref: master # reference we need to chckout
            path: ./tomcat
```

## Environment variable

### default environment variable

### custom environment variable

variable can be defined at:
- workflow
- jobs
- steps

Access
- env.variable_name
- variable is read from workflow
- variable can be used in workflow configuration

### Secrets

- secrets.variable_name

## Artifacts

- Data preserved from a workflow when it gets completed
- files
- Binary, archives, and images produced by build steps
- Exist beyond the life of build steps
- Stored and tracked in registeries
- registeries requires authentication to upload new version of the artifacts


## CI/CD Pipeline

**CI**

- Find and resolve problem early
- Work locally and then commit to repo

**CD**

- compiled into artifacts
- stored
- Additional tests
- Ready for development


### Linting & Unit tests

**Linting**

- Enforcing coding standards
- Improve code quality
- Catch errors early in the design cycle

**Unit Test**

- First tests run
- Check code at component level
- Expose problems closer to the code
- Fast running

### Build

- Compile code into a binary package
- Machine-readable format

Example:

- GNU Compiler $\rightarrow$ C/C++ $\rightarrow$ Executable
- zip, tar, rpm $\rightarrow$ files $\rightarrow$ archive
- Docker $\rightarrow$ Layer $\rightarrow$ Container Image

### Test

- Automated testing improves the deplyment speed
- Check for errors continuously


## Status Badge

```
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_NAME>/badge.svg
```

