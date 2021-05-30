rails\:dev:
	rails s -b 0.0.0.0 -p 3001	

mitmproxy\:dev:
	mitmdump -k -s lib/mitmproxy/record.py --anticache
