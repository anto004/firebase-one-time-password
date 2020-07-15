# firebase-one-time-password

Create new users for our one time password authentication app

### Deploy project

-   Create file **_service_account.json_** inside functions folder
-   Generate **_private key_** from firebase console and copy contents to service_account.json
-   Run `firebase deploy --project reactnative-one-time-pas-4c87e`

### Execute functions

-   Get createUser function's **_url_**
-   createUser function expects a post request with a phone property

> Note: One user is associated with one phone number
