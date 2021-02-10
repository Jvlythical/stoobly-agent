MOCK_POLICY = {
  ALL: 'all',
  NONE: 'none',
  FOUND: 'found',
}

RECORD_POLICY = {
  NONE: 'none',
  ALL: 'all',
  NOT_FOUND: 'not_found',
}

MODE = {
  MOCK: 'mock',
  RECORD: 'record',
}

CUSTOM_RESPONSE_CODES = {
  NOT_FOUND: '499'
}

CUSTOM_HEADERS = {
  RECORD_POLICY: 'X-UPLOAD-POLICY', 
  RESPONSE_LATENCY: 'X-RESPONSE-LATENCY',
  SERVICE_URL: 'X-SERVICE-URL',
}
