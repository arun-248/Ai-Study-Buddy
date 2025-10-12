import requests
import os

# If your GEMINI_API_KEY environment variable is set, it will use that.
# Otherwise, it will test the key directly below.
API_KEY = os.getenv("GEMINI_API_KEY", "AIzaSyA5ad65Kk7NOC5t3YhcIshPUSmbn7iTzsM")

print("🔑 Testing Gemini API Key:", API_KEY[:10] + "********")

urls = {
    "v1beta": f"https://generativelanguage.googleapis.com/v1beta/models?key={API_KEY}",
    "v1": f"https://generativelanguage.googleapis.com/v1/models?key={API_KEY}"
}

for version, url in urls.items():
    print(f"\n🌐 Checking {version.upper()} endpoint...")
    try:
        r = requests.get(url)
        print("Status Code:", r.status_code)
        if r.status_code == 200:
            print("✅ Accessible models:")
            print(r.text[:500])
        else:
            print("❌ Response:", r.text)
    except Exception as e:
        print("⚠️ Error:", e)
