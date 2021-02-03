class RecordConfig < ApplicationRecord
  enum environment: { test: 'test, 'development: 'development', production: 'production'}
  enum upload_policy: { none: 'none', not_found: 'not_found', any: 'any' }
end
