package com.theteapottroopers.farmwatch.security.auth;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.net.ssl.HttpsURLConnection;
import java.io.*;
import java.net.URL;

/**
 * @Author: M.S. Pilat <pilat_m@msn.com>
 * <p>
 * checks if a given captcha is valid
 */

public class CaptchaChecker {

    private static final String CAPTCHA_KEY = "6LeKLl0kAAAAANJ5-3s9PLySY-r_Ln13epzRtN3d";
    private static final String API_URL = "https://www.google.com/recaptcha/api/siteverify";
    private static final String VALIDATION_STRING = "success";

    public CaptchaChecker() {
    }

    public boolean verify(String userCaptcha){

        if (userCaptcha == null || "".equals(userCaptcha)) {
            return false;
        }

        try{

            HttpsURLConnection currentConnection = setupHttpsURLConnection();
            addOutputToCurrentConnection(userCaptcha, currentConnection);

            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(
                    currentConnection.getInputStream()));
            StringBuffer response = new StringBuffer();

            String inputLine;
            while ((inputLine = bufferedReader.readLine()) != null) {
                response.append(inputLine);
            }
            bufferedReader.close();

            return checkForValidResponse(response);
        }catch(Exception exception){
            return false;
        }
    }

    private boolean checkForValidResponse(StringBuffer response) {
        JsonReader jsonReader = Json.createReader(new StringReader(response.toString()));
        JsonObject jsonObject = jsonReader.readObject();
        jsonReader.close();

        return jsonObject.getBoolean(VALIDATION_STRING);
    }

    private void addOutputToCurrentConnection(String userCaptcha, HttpsURLConnection currentConnection) throws IOException {
        String urlString = "secret=" + CAPTCHA_KEY + "&response="
                + userCaptcha;

        DataOutputStream dataOutputStream = new DataOutputStream(currentConnection.getOutputStream());
        dataOutputStream.writeBytes(urlString);
        dataOutputStream.flush();
        dataOutputStream.close();
    }

    private HttpsURLConnection setupHttpsURLConnection() throws IOException {
        URL url = new URL(API_URL);
        HttpsURLConnection currentConnection = (HttpsURLConnection) url.openConnection();
        currentConnection.setRequestMethod("POST");
        currentConnection.setRequestProperty("Accept-Language", "en-US,en;q=0.5");
        currentConnection.setDoOutput(true);
        return currentConnection;
    }


}
