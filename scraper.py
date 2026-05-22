import requests
import json


def fetch_clean_api_trades():
    api_url = "https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json"

    print(f"Fetching pre-parsed data from {api_url}...")

    try:
        response = requests.get(api_url)

        if response.status_code == 200:
            all_trades = response.json()
            recent_trades = all_trades[:100]
            clean_trades = []

            for row in recent_trades:
                trade_data = {
                    "politician": row.get("senator", "Unknown"),
                    "ticker": row.get("ticker", "N/A"),
                    "asset_name": row.get("asset_description", "Unknown Asset"),
                    "type": row.get("type", "Unknown"),
                    "amount": row.get("amount", "Unknown Amount"),
                    "disclosure_date": row.get("transaction_date", "Unknown Date"),
                    "report_url": row.get("ptr_link", "#"),
                }
                clean_trades.append(trade_data)

            output_file = "senate_trades.json"
            with open(output_file, "w", encoding="utf-8") as f:
                json.dump(clean_trades, f, indent=4)

            print(f"Success! {len(clean_trades)} parsed trades saved to {output_file}.")
        else:
            print(f"Failed to fetch data. Status Code: {response.status_code}")

    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    fetch_clean_api_trades()
