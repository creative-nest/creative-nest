# Kubernetes and GitHub Container Registry setup

- Create GitHub PAT with read:packages

- `kubectl create secret docker-registry creative-nest-pull-secret-gh-auth --docker-server=https://ghcr.io --docker-username=<GitHub username> --docker-password=<GitHub PAT> --docker-email=<GitHub email>`

- `kubectl apply --filename=deployment.yaml`

- `kubectl apply --filename=service.yaml`

## Digital ocean

- install doctl [github.com/digitalocean/doctl#installing-doctl](https://github.com/digitalocean/doctl#installing-doctl)

- `doctl auth init`

## View and edit afterwards

- `kubectl get services`

- `kubectl edit svc kubernetes`

- `kubectl get deployments`

- `kubectl edit deployment.v1.apps/creative-nest`

Add to deployment.yaml:
```yml
spec:
  ...
  imagePullSecrets: # Add this
  - name: creative-nest-pull-secret-gh-auth # and this
  ...
  containers:
    ...
```