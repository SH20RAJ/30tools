
import json
import os
import urllib.request
import urllib.error

input_file = '/Users/shaswatraj/Desktop/earn/30tools/urls.txt'
# No longer strictly needed as an output, but we can keep it or just skip it.
# output_file = '/Users/shaswatraj/Desktop/earn/30tools/payload.json' 

url = 'https://rankplusplus.com/api/projects/cmjktvlfo0001ju040pvkmyeg/index-now'

headers = {
    'accept': '*/*',
    'accept-language': 'en-GB,en;q=0.5',
    'content-type': 'application/json',
    'cookie': '__Host-next-auth.csrf-token=33047f6c3815eb433f8ead867ec6c626389a238f6f61cf3a67ecbf2d086deb2b%7C59e20677fc3d057dada39fc00de9733b226425d1603d4c8ccfb48cec6056cf24; __Secure-next-auth.callback-url=https%3A%2F%2Frankplusplus.com%2Fdashboard; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..CSecIL6_rhlqC1fF.WPc3zmETj3cFfu8glnEwTmOArntaCrBsg65FMm6d9UjU3P96Y16fHei5d5Ue_BPvLuIajA2yhEZBWNbgsDtEKNQs9uAf4vh_U5dtdMnQ-dbWZMHz9sdtweiKgIXF6QqamfvLJYWTG5eeHpKWoHYPQz9CuXiN3eHrHbvFJYGvAViC51UAIg-WEojx5rDNfgcp0V0dYhWS67n_dAoJd9qkaYxuMh8uZT6ZVFoMSOsDL7L4gJcJCyvUF5oZFTTMh4hBTRg85iG_b7UvUuRWlQ9Cn3qvgEqRhvbpxBjES1PmaPaKynhJ6v-zHHqyibFNS1Jm8XxAnduczd1chXHCjDwD10qrX_Rw3y30SFGPaNTHpnAeyEbpxDAPQYjHW4miDxmuVItpi9toa5eDG-81KW2XiUaEbOYXMUfN7YZHyFJvssvnazErNLAmDFqXiN_ib7-jneCblWLhD2VSyR80NGuDa78.O2dF8nWe5i8aReVVktvgAg',
    'origin': 'https://rankplusplus.com',
    'priority': 'u=1, i',
    'referer': 'https://rankplusplus.com/dashboard/index-now',
    'sec-ch-ua': '"Brave";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'sec-gpc': '1',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36'
}

try:
    with open(input_file, 'r') as f:
        urls = [line.strip() for line in f if line.strip()]
    
    payload = {"urls": urls}
    data = json.dumps(payload).encode('utf-8')
    
    req = urllib.request.Request(url, data=data, headers=headers, method='POST')
    
    print(f"Submitting {len(urls)} URLs...")
    with urllib.request.urlopen(req) as response:
        response_body = response.read().decode('utf-8')
        print(f"Status Code: {response.status}")
        print("Response:", response_body)

except urllib.error.HTTPError as e:
    print(f"HTTP Error: {e.code}")
    print(e.read().decode('utf-8'))
except Exception as e:
    print(f"Error: {e}")
