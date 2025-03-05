# Archives

Methods:

- <code title="delete /v1/Archives/{Date}/Calls/{Sid}">client.archives.<a href="./src/resources/archives.ts">deleteCall</a>(sid, { ...params }) -> void</code>

# ByocTrunks

Types:

- <code><a href="./src/resources/byoc-trunks.ts">ByocTrunk</a></code>
- <code><a href="./src/resources/byoc-trunks.ts">ByocTrunkListResponse</a></code>

Methods:

- <code title="post /v1/ByocTrunks">client.byocTrunks.<a href="./src/resources/byoc-trunks.ts">create</a>({ ...params }) -> ByocTrunk</code>
- <code title="get /v1/ByocTrunks/{Sid}">client.byocTrunks.<a href="./src/resources/byoc-trunks.ts">retrieve</a>(sid) -> ByocTrunk</code>
- <code title="post /v1/ByocTrunks/{Sid}">client.byocTrunks.<a href="./src/resources/byoc-trunks.ts">update</a>(sid, { ...params }) -> ByocTrunk</code>
- <code title="get /v1/ByocTrunks">client.byocTrunks.<a href="./src/resources/byoc-trunks.ts">list</a>({ ...params }) -> ByocTrunkListResponse</code>
- <code title="delete /v1/ByocTrunks/{Sid}">client.byocTrunks.<a href="./src/resources/byoc-trunks.ts">delete</a>(sid) -> void</code>

# ConnectionPolicies

Types:

- <code><a href="./src/resources/connection-policies/connection-policies.ts">ConnectionPolicy</a></code>
- <code><a href="./src/resources/connection-policies/connection-policies.ts">ConnectionPolicyListResponse</a></code>

Methods:

- <code title="post /v1/ConnectionPolicies">client.connectionPolicies.<a href="./src/resources/connection-policies/connection-policies.ts">create</a>({ ...params }) -> ConnectionPolicy</code>
- <code title="get /v1/ConnectionPolicies/{Sid}">client.connectionPolicies.<a href="./src/resources/connection-policies/connection-policies.ts">retrieve</a>(sid) -> ConnectionPolicy</code>
- <code title="post /v1/ConnectionPolicies/{Sid}">client.connectionPolicies.<a href="./src/resources/connection-policies/connection-policies.ts">update</a>(sid, { ...params }) -> ConnectionPolicy</code>
- <code title="get /v1/ConnectionPolicies">client.connectionPolicies.<a href="./src/resources/connection-policies/connection-policies.ts">list</a>({ ...params }) -> ConnectionPolicyListResponse</code>
- <code title="delete /v1/ConnectionPolicies/{Sid}">client.connectionPolicies.<a href="./src/resources/connection-policies/connection-policies.ts">delete</a>(sid) -> void</code>

## Targets

Types:

- <code><a href="./src/resources/connection-policies/targets.ts">ConnectionPolicyTarget</a></code>
- <code><a href="./src/resources/connection-policies/targets.ts">TargetListResponse</a></code>

Methods:

- <code title="post /v1/ConnectionPolicies/{ConnectionPolicySid}/Targets">client.connectionPolicies.targets.<a href="./src/resources/connection-policies/targets.ts">create</a>(connectionPolicySid, { ...params }) -> ConnectionPolicyTarget</code>
- <code title="get /v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}">client.connectionPolicies.targets.<a href="./src/resources/connection-policies/targets.ts">retrieve</a>(sid, { ...params }) -> ConnectionPolicyTarget</code>
- <code title="post /v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}">client.connectionPolicies.targets.<a href="./src/resources/connection-policies/targets.ts">update</a>(sid, { ...params }) -> ConnectionPolicyTarget</code>
- <code title="get /v1/ConnectionPolicies/{ConnectionPolicySid}/Targets">client.connectionPolicies.targets.<a href="./src/resources/connection-policies/targets.ts">list</a>(connectionPolicySid, { ...params }) -> TargetListResponse</code>
- <code title="delete /v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}">client.connectionPolicies.targets.<a href="./src/resources/connection-policies/targets.ts">delete</a>(sid, { ...params }) -> void</code>

# DialingPermissions

Types:

- <code><a href="./src/resources/dialing-permissions/dialing-permissions.ts">DialingPermissionCreateBulkCountryUpdatesResponse</a></code>

Methods:

- <code title="post /v1/DialingPermissions/BulkCountryUpdates">client.dialingPermissions.<a href="./src/resources/dialing-permissions/dialing-permissions.ts">createBulkCountryUpdates</a>({ ...params }) -> DialingPermissionCreateBulkCountryUpdatesResponse</code>

## Countries

Types:

- <code><a href="./src/resources/dialing-permissions/countries.ts">CountryRetrieveResponse</a></code>
- <code><a href="./src/resources/dialing-permissions/countries.ts">CountryListResponse</a></code>
- <code><a href="./src/resources/dialing-permissions/countries.ts">CountryFetchHighRiskSpecialPrefixesResponse</a></code>

Methods:

- <code title="get /v1/DialingPermissions/Countries/{IsoCode}">client.dialingPermissions.countries.<a href="./src/resources/dialing-permissions/countries.ts">retrieve</a>(isoCode) -> CountryRetrieveResponse</code>
- <code title="get /v1/DialingPermissions/Countries">client.dialingPermissions.countries.<a href="./src/resources/dialing-permissions/countries.ts">list</a>({ ...params }) -> CountryListResponse</code>
- <code title="get /v1/DialingPermissions/Countries/{IsoCode}/HighRiskSpecialPrefixes">client.dialingPermissions.countries.<a href="./src/resources/dialing-permissions/countries.ts">fetchHighRiskSpecialPrefixes</a>(isoCode, { ...params }) -> CountryFetchHighRiskSpecialPrefixesResponse</code>

# Settings

Types:

- <code><a href="./src/resources/settings.ts">VoiceDialingPermissions</a></code>

Methods:

- <code title="get /v1/Settings">client.settings.<a href="./src/resources/settings.ts">retrieve</a>() -> VoiceDialingPermissions</code>
- <code title="post /v1/Settings">client.settings.<a href="./src/resources/settings.ts">update</a>({ ...params }) -> VoiceDialingPermissions</code>

# IPRecords

Types:

- <code><a href="./src/resources/ip-records.ts">IPRecord</a></code>
- <code><a href="./src/resources/ip-records.ts">IPRecordListResponse</a></code>

Methods:

- <code title="post /v1/IpRecords">client.ipRecords.<a href="./src/resources/ip-records.ts">create</a>({ ...params }) -> IPRecord</code>
- <code title="get /v1/IpRecords/{Sid}">client.ipRecords.<a href="./src/resources/ip-records.ts">retrieve</a>(sid) -> IPRecord</code>
- <code title="post /v1/IpRecords/{Sid}">client.ipRecords.<a href="./src/resources/ip-records.ts">update</a>(sid, { ...params }) -> IPRecord</code>
- <code title="get /v1/IpRecords">client.ipRecords.<a href="./src/resources/ip-records.ts">list</a>({ ...params }) -> IPRecordListResponse</code>
- <code title="delete /v1/IpRecords/{Sid}">client.ipRecords.<a href="./src/resources/ip-records.ts">delete</a>(sid) -> void</code>

# SourceIPMappings

Types:

- <code><a href="./src/resources/source-ip-mappings.ts">SourceIPMapping</a></code>
- <code><a href="./src/resources/source-ip-mappings.ts">SourceIPMappingListResponse</a></code>

Methods:

- <code title="post /v1/SourceIpMappings">client.sourceIPMappings.<a href="./src/resources/source-ip-mappings.ts">create</a>({ ...params }) -> SourceIPMapping</code>
- <code title="get /v1/SourceIpMappings/{Sid}">client.sourceIPMappings.<a href="./src/resources/source-ip-mappings.ts">retrieve</a>(sid) -> SourceIPMapping</code>
- <code title="post /v1/SourceIpMappings/{Sid}">client.sourceIPMappings.<a href="./src/resources/source-ip-mappings.ts">update</a>(sid, { ...params }) -> SourceIPMapping</code>
- <code title="get /v1/SourceIpMappings">client.sourceIPMappings.<a href="./src/resources/source-ip-mappings.ts">list</a>({ ...params }) -> SourceIPMappingListResponse</code>
- <code title="delete /v1/SourceIpMappings/{Sid}">client.sourceIPMappings.<a href="./src/resources/source-ip-mappings.ts">delete</a>(sid) -> void</code>
