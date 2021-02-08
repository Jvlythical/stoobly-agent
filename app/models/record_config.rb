class RecordConfig < ApplicationRecord
  enum environment: { 
    environment_test: 'test', 
    environment_development: 'development', 
    environment_production: 'production',
  }

  enum record_policy: { 
    record_none: 'none', 
    record_not_found: 'not found', 
    record_all: 'all',
  }

  enum mode: {
    mode_proxy: 'proxy',
    mode_mock: 'mock'
  }
end
