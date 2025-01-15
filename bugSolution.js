The solution is to either avoid using libraries that require native modules, or to use Expo's EAS Build service to build your app.  EAS Build allows you to build your app with native modules support.  Here's how you would modify your app to use EAS Build:

1. Ensure you have the Expo CLI installed:
   ```bash
   npm install -g expo-cli
   ```

2. Create an `eas.json` file in the root of your project:
   ```json
   {
     "build": {
       "projectId": "YOUR_EAS_PROJECT_ID" // replace with your project ID
     }
   }
   ```

3. Build your app using EAS:
   ```bash
   expo build:android
   ```

This will build your app using EAS Build, which supports native modules.  You can then deploy the resulting APK to your device.