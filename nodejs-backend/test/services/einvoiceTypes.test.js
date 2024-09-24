const assert = require('assert');
const app = require('../../src/app');

describe('\'einvoiceTypes\' service', () => {
  it('registered the service', () => {
    const service = app.service('einvoiceTypes');

    assert.ok(service, 'Registered the service (einvoiceTypes)');
  });
});
