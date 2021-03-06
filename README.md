# Delete CED environment

Github Action to delete an environment in CloudEdgeDistribution

## Inputs

### `cli-token`

CloudEdgeDistribution CLI token. If not specified it'll try to resolve the CLI token from environment variable `CED_CLI_TOKEN`.

### `project-id`

Project id from CloudEdgeDistribution. If not specified it'll try to resolve it from environment variable `CED_PROJECT_ID`.

### `environment`

Environment to delete in CloudEdgeDistribution. If not specified it'll try to resolve it from environment variable `CED_ENVIRONMENT`.

## Example usage

```yaml
- uses: MerthinTechnologies/push-ced-delete-environment-action@v1
  with:
    cli-token: ${{ secrets.CED_CLI_TOKEN }}
    project-id: 'my-project'
    environment: 'feature-1'
```
