// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TwilioVoiceOpenAPI from 'stainless-twilio-voice';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import delete_call_archives from './archives/delete-call-archives';
import create_byoc_trunks from './byoc-trunks/create-byoc-trunks';
import retrieve_byoc_trunks from './byoc-trunks/retrieve-byoc-trunks';
import update_byoc_trunks from './byoc-trunks/update-byoc-trunks';
import list_byoc_trunks from './byoc-trunks/list-byoc-trunks';
import delete_byoc_trunks from './byoc-trunks/delete-byoc-trunks';
import create_connection_policies from './connection-policies/create-connection-policies';
import retrieve_connection_policies from './connection-policies/retrieve-connection-policies';
import update_connection_policies from './connection-policies/update-connection-policies';
import list_connection_policies from './connection-policies/list-connection-policies';
import delete_connection_policies from './connection-policies/delete-connection-policies';
import create_connection_policies_targets from './connection-policies/targets/create-connection-policies-targets';
import retrieve_connection_policies_targets from './connection-policies/targets/retrieve-connection-policies-targets';
import update_connection_policies_targets from './connection-policies/targets/update-connection-policies-targets';
import list_connection_policies_targets from './connection-policies/targets/list-connection-policies-targets';
import delete_connection_policies_targets from './connection-policies/targets/delete-connection-policies-targets';
import create_bulk_country_updates_dialing_permissions from './dialing-permissions/create-bulk-country-updates-dialing-permissions';
import retrieve_dialing_permissions_countries from './dialing-permissions/countries/retrieve-dialing-permissions-countries';
import list_dialing_permissions_countries from './dialing-permissions/countries/list-dialing-permissions-countries';
import fetch_high_risk_special_prefixes_dialing_permissions_countries from './dialing-permissions/countries/fetch-high-risk-special-prefixes-dialing-permissions-countries';
import retrieve_settings from './settings/retrieve-settings';
import update_settings from './settings/update-settings';
import create_ip_records from './ip-records/create-ip-records';
import retrieve_ip_records from './ip-records/retrieve-ip-records';
import update_ip_records from './ip-records/update-ip-records';
import list_ip_records from './ip-records/list-ip-records';
import delete_ip_records from './ip-records/delete-ip-records';
import create_source_ip_mappings from './source-ip-mappings/create-source-ip-mappings';
import retrieve_source_ip_mappings from './source-ip-mappings/retrieve-source-ip-mappings';
import update_source_ip_mappings from './source-ip-mappings/update-source-ip-mappings';
import list_source_ip_mappings from './source-ip-mappings/list-source-ip-mappings';
import delete_source_ip_mappings from './source-ip-mappings/delete-source-ip-mappings';

export type HandlerFunction = (
  client: TwilioVoiceOpenAPI,
  args: Record<string, unknown> | undefined,
) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(delete_call_archives);
addEndpoint(create_byoc_trunks);
addEndpoint(retrieve_byoc_trunks);
addEndpoint(update_byoc_trunks);
addEndpoint(list_byoc_trunks);
addEndpoint(delete_byoc_trunks);
addEndpoint(create_connection_policies);
addEndpoint(retrieve_connection_policies);
addEndpoint(update_connection_policies);
addEndpoint(list_connection_policies);
addEndpoint(delete_connection_policies);
addEndpoint(create_connection_policies_targets);
addEndpoint(retrieve_connection_policies_targets);
addEndpoint(update_connection_policies_targets);
addEndpoint(list_connection_policies_targets);
addEndpoint(delete_connection_policies_targets);
addEndpoint(create_bulk_country_updates_dialing_permissions);
addEndpoint(retrieve_dialing_permissions_countries);
addEndpoint(list_dialing_permissions_countries);
addEndpoint(fetch_high_risk_special_prefixes_dialing_permissions_countries);
addEndpoint(retrieve_settings);
addEndpoint(update_settings);
addEndpoint(create_ip_records);
addEndpoint(retrieve_ip_records);
addEndpoint(update_ip_records);
addEndpoint(list_ip_records);
addEndpoint(delete_ip_records);
addEndpoint(create_source_ip_mappings);
addEndpoint(retrieve_source_ip_mappings);
addEndpoint(update_source_ip_mappings);
addEndpoint(list_source_ip_mappings);
addEndpoint(delete_source_ip_mappings);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  if (filters.length === 0) {
    return endpoints;
  }

  const allExcludes = filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
