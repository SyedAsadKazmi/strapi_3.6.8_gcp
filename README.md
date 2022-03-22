# Strapi 3.6.8 application

1. Create the GCP Cloud MySQL Instance from the GCP Console side menu.

2. Get the configuration details of your GCP Cloud MySQL Instance from the Overview page.

3. Use those details in the corresponding variables of **.env.example** file.

4. To create a build, use the following command:

    ```
    npm run build
    ```

5. Copy and paste the content of **.env.example** to the newly generated **.env** file.

6. Install the Google Cloud SDK in your local machine (if it's not already installed) in order to use the gcloud utility commands. You can follow the official Google Cloud documentation (https://cloud.google.com/sdk/docs/install).

7. For proper connection of the App Engine with the GCP Cloud MySQL Instance, you can follow https://cloud.google.com/sql/docs/mysql/connect-app-engine-standard#public-ip-default_1. 

8. Then you can use the following commands (in the root folder of your project from local terminal) to make your Strapi application up and running on App Engine.

    ```
    gcloud init
    gcloud app deploy
    gcloud app browse
    ```

9. For checking the logs, you can use the following command:

    ```
    gcloud app logs tail -s default
    ```





