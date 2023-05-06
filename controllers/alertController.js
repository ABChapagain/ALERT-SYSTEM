import express from "express";
import asyncHandler from "express-async-handler";
import Alert from "../models/alertModel.js";
import Users from "../models/userModel.js";
import axios from "axios";

//push notification using firebase

const postNotification = async (req, res, next) => {
  try {
    const users = await Users.find();
    const tokens = users.map((user) => {
      return user.fcm_token;
    });

    const message = {
      registration_ids: tokens,
      notification: {
        body: "hello",
        title: "title",
      },
    };

    const options = {
      method: "POST",
      url: "https://fcm.googleapis.com/fcm/send",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "key=AAAA1VzqfcE:APA91bEMY7Ix28Cshtiu5J2fzffWokz41vWvveqnmIeU-F8LYKfSHQJp32y4N9rX2BGOvvmJBThsI-d8pfEt8-2CKdDtBU9eJwOI5fK-K4vWNz8GcOw4Z4J4aLNJoq8SvfeE877gV3Y5",
      },
      data: message,
    };

    const response = await axios(options);
    console.log(response.data);
  } catch (e) {
    console.log(e.message);
  }
};

const postAlerts = asyncHandler(async (req, res) => {
  const alerts = await Alert.create(req.body);
  res.send(alerts);
});

const getAlerts = asyncHandler(async (req, res) => {
  const alerts = await Alert.find({});
  res.json(alerts);
});

export { getAlerts, postAlerts, postNotification };
