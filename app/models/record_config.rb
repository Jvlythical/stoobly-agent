class RecordConfig < ApplicationRecord
  enum environment: { 
    environment_test: 'test', 
    environment_development: 'development', 
    environment_production: 'production',
  }

  enum scenarios_record_policy: { 
    record_none: 'record_none', 
    record_not_found: 'record_not_found', 
    record_any: 'record_any',
  }
end
