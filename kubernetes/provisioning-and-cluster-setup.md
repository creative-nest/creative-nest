# Provision and setup cluster manually

## Create cluster

Create server instances

Create master nodes (control plane)
- Install master process

Create worker nodes
- Install worker processes
  - Kubectl
  - kube proxy
  - Container runtime

## Create data persistence for deploying databases

- Create physical storage
- Create persistent volumes
- Attach volumes to your database

## Load balancing and ingress(manage route incoming requests)

- Install and run Ingress controller in cluster
- Configure routing rules

## Setup SSL
