class RecordConfig < ApplicationRecord
  enum environment: { 
    environment_test: 'test', 
    environment_development: 'development', 
    environment_production: 'production',
  }

  enum scenarios_record_policy: { 
    record_policy_none: 'none', 
    record_policy_not_found: 'not_found', 
    record_policy_any: 'any',
  }
end
