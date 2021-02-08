MOCK_POLICY = {
  ALL: 'all',
  NONE: 'none',
  FOUND: 'found',
}

RECORD_POLICY = {
  NONE: 'record_none',
  ALL: 'record_all',
  NOT_FOUND: 'record_not_found',
}

CUSTOM_RESPONSE_CODES = {
  NOT_FOUND: '499'
}

MODE = {
  MOCK: 'mock',
  PROXY: 'proxy',
}

CUSTOM_HEADERS = {
  RECORD_POLICY:'X-UPLOAD-POLICY', 
  RESPONSE_LATENCY: 'X-RESPONSE-LATENCY',
  SERVICE_URL: 'X-SERVICE-URL',
}
