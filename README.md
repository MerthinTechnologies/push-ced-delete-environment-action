# Delete CED environment

Github Action to delete an environment in CloudEdgeDistribution

## Inputs

### `cli-token`

CloudEdgeDistribution CLI token. If not specified it'll try to resolve the CLI token from environment variable `CED_CLI_TOKEN`.

### `environment`

Environment to delete in CloudEdgeDistribution. If not specified it'll try to resolve it from environment variable `CED_ENVIRONMENT`.

### `path`

Path to the CloudEdgeDistribution project. If not specified it'll try to resolve it from environment variable `CED_PROJECT_PATH`, it'll use current folder otherwise.

## Example usage

```yaml
- uses: MerthinTechnologies/push-ced-delete-environment-action@v1
  with:
    path: ${{ env.PROJECT_PATH }}
    cli-token: ${{ secrets.CED_CLI_TOKEN }}
    environment: 'feature-1'
```
