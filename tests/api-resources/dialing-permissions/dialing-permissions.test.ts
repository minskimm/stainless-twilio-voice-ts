// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TwilioVoiceOpenAPI from 'stainless-twilio-voice';

const client = new TwilioVoiceOpenAPI({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dialingPermissions', () => {
  // skipped: tests are disabled for the time being
  test.skip('createBulkCountryUpdates: only required params', async () => {
    const responsePromise = client.dialingPermissions.createBulkCountryUpdates({
      UpdateRequest:
        '[ { "iso_code": "GB", "low_risk_numbers": "Enabled", "high_risk_special_numbers":"Enabled", "high_risk_irsf_numbers": "Enabled" } ]',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createBulkCountryUpdates: required and optional params', async () => {
    const response = await client.dialingPermissions.createBulkCountryUpdates({
      UpdateRequest:
        '[ { "iso_code": "GB", "low_risk_numbers": "Enabled", "high_risk_special_numbers":"Enabled", "high_risk_irsf_numbers": "Enabled" } ]',
    });
  });
});
