# KPAppWorx lead-response demo

What it does: a consenting person submits the demo form. The workflow texts them within seconds, waits 8 seconds, then a Retell voice agent calls. When the call ends and is analysed, the summary is logged to a Google Sheet.

Status: I wrote these files from the n8n, Twilio and Retell documentation. I have not run them, because that needs your accounts. Expect to fix small things on first import.

## Files
- `kpappworx-lead-response.n8n.json`: import into n8n (Workflows > Import from file).
- `demo-form.html`: the consent form you film in the Loom. Host it anywhere or open it locally.
- `retell-agent-prompt.md`: agent prompt, opening line and rules.

## Setup (about 1 to 2 hours, plus carrier wait)
1. n8n: use n8n Cloud or self-host. Import the JSON.
2. Twilio: create an account, buy a US number. In the workflow, replace `REPLACE_TWILIO_ACCOUNT_SID` (in the URL) and `REPLACE_TWILIO_NUMBER_E164`. Create a credential of type "Basic Auth" with username = Account SID and password = Auth Token, and select it on the "Send text" node. US business texting needs A2P 10DLC registration before it is reliable; in the meantime use a trial account and test only on numbers you have verified in Twilio.
3. Retell: create the agent from `retell-agent-prompt.md`. Buy or import a phone number into Retell. Copy the agent ID and the number into the "Place AI call" node. Create an "HTTP Header Auth" credential: name `Authorization`, value `Bearer <your Retell API key>`.
4. Retell webhook: in Retell, set the agent webhook URL to your n8n production URL for the second webhook: `.../webhook/retell-events-<random>`. Replace `REPLACE_RANDOM_SECRET` in the node with a long random string so the URL acts as a shared secret. Retell also signs requests with an `x-retell-signature` header; add that verification (Retell's SDK provides it) before using this with real client data.
5. Google Sheet: create a sheet with a `Leads` tab and header row: `received_at, business, name, phone, email, call_id, summary, successful, transcript`. Put its ID in the "Log to Google Sheet" node and connect Google credentials.
6. Activate the workflow. In `demo-form.html` set `WEBHOOK_URL` to the production URL ending `/webhook/lead-demo`.
7. Test with your own phone: open `demo-form.html?biz=Test%20HVAC`, tick the consent box, submit.

## Before you use it with anyone else's phone
- Only the consent-ticked submissions are processed; the workflow rejects anything else. Keep that check.
- The consent wording on the form must match what you send. Get the wording reviewed by a lawyer before client use.
- On the Loom prospect call, ask for spoken consent and a typed "yes" before you submit the form with their number.
- Check the Retell, Twilio and model costs per conversation before you set the included-conversation cap in your contract.
- Do not use real client customer data in demos.
