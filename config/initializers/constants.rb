COMPONENT_TYPES = {
  HEADER: 1,
  PATH_SEGMENT: 2,
  QUERY_PARAM: 3,
  BODY_PARAM: 4,
  RESPONSE: 5
}.freeze

MOCK_POLICY = {
  ALL: 'all',
  NONE: 'none',
  FOUND: 'found',
}.freeze

RECORD_POLICY = {
  NONE: 'none',
  ALL: 'all',
  NOT_FOUND: 'not_found',
}.freeze

MODE = {
  MOCK: 'mock',
  RECORD: 'record',
}.freeze

CUSTOM_RESPONSE_CODES = {
  NOT_FOUND: '499',
  IGNORE_COMPONENTS: '498',
}.freeze

CUSTOM_HEADERS = {
  RECORD_POLICY: 'X-RECORD-POLICY', 
  RESPONSE_LATENCY: 'X-RESPONSE-LATENCY',
  SERVICE_URL: 'X-SERVICE-URL',
  MOCK_POLICY: 'X-MOCK-POLICY', 
}.freeze
