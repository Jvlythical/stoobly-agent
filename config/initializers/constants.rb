MOCK_POLICY = {
  ALL: 'mock_all',
  NONE: 'mock_none',
  FOUND: 'mock_found',
}

RECORD_POLICY = {
  NONE: 'record_none',
  ALL: 'record_all',
  NOT_FOUND: 'record_not_found',
}

ENVIRONMENT = {
  TEST: 'environment_test',
  DEVELOPMENT: 'environment_development',
  PRODUCTION: 'environment_production',
}

MODE = {
  MOCK: 'mock',
  RECORD: 'record',
}

CUSTOM_RESPONSE_CODES = {
  NOT_FOUND: '499'
}

CUSTOM_HEADERS = {
  RECORD_POLICY:'X-UPLOAD-POLICY', 
  RESPONSE_LATENCY: 'X-RESPONSE-LATENCY',
  SERVICE_URL: 'X-SERVICE-URL',
}
