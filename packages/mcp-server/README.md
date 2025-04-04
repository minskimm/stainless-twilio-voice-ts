# Twilio Voice OpenAPI TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export TWILIO_VOICE_OPENAPI_USERNAME = "My Username"
export TWILIO_VOICE_OPENAPI_PASSWORD = "My Password"
npx -y stainless-twilio-voice-mcp
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "stainless_twilio_voice_api": {
      "command": "npx",
      "args": ["-y", "stainless-twilio-voice-mcp"],
      "env": {
        "TWILIO_VOICE_OPENAPI_USERNAME": "My Username",
        "TWILIO_VOICE_OPENAPI_PASSWORD": "My Password"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "stainless-twilio-voice-mcp/server";

// import a specific tool
import deleteCallArchives from "stainless-twilio-voice-mcp/tools/archives/delete-call-archives";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [deleteCallArchives, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `archives`:

- `delete_call_archives` (`write`): Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.

### Resource `byoc_trunks`:

- `create_byoc_trunks` (`write`):
- `retrieve_byoc_trunks` (`read`):
- `update_byoc_trunks` (`write`):
- `list_byoc_trunks` (`read`):
- `delete_byoc_trunks` (`write`):

### Resource `connection_policies`:

- `create_connection_policies` (`write`):
- `retrieve_connection_policies` (`read`):
- `update_connection_policies` (`write`):
- `list_connection_policies` (`read`):
- `delete_connection_policies` (`write`):

### Resource `connection_policies.targets`:

- `create_connection_policies_targets` (`write`):
- `retrieve_connection_policies_targets` (`read`):
- `update_connection_policies_targets` (`write`):
- `list_connection_policies_targets` (`read`):
- `delete_connection_policies_targets` (`write`):

### Resource `dialing_permissions`:

- `create_bulk_country_updates_dialing_permissions` (`write`): Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

### Resource `dialing_permissions.countries`:

- `retrieve_dialing_permissions_countries` (`read`): Retrieve voice dialing country permissions identified by the given ISO country code
- `list_dialing_permissions_countries` (`read`): Retrieve all voice dialing country permissions for this account
- `fetch_high_risk_special_prefixes_dialing_permissions_countries` (`read`): Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

### Resource `settings`:

- `retrieve_settings` (`read`): Retrieve voice dialing permissions inheritance for the sub-account
- `update_settings` (`write`): Update voice dialing permissions inheritance for the sub-account

### Resource `ip_records`:

- `create_ip_records` (`write`):
- `retrieve_ip_records` (`read`):
- `update_ip_records` (`write`):
- `list_ip_records` (`read`):
- `delete_ip_records` (`write`):

### Resource `source_ip_mappings`:

- `create_source_ip_mappings` (`write`):
- `retrieve_source_ip_mappings` (`read`):
- `update_source_ip_mappings` (`write`):
- `list_source_ip_mappings` (`read`):
- `delete_source_ip_mappings` (`write`):
