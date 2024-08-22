class rabbitHoleClient {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }
  async rabbitGetRequest(url) {
    return await fetch(url, {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Linux\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "Referer": "https://hole.rabbit.tech/teach-mode/lessons/test-twitter/record",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    });
  }
  async rabbitPostRequest(url, payload) {
    return await fetch(url, {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Linux\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "Referer": "https://hole.rabbit.tech/teach-mode/lessons/test-twitter/record",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": payload,
      "method": "POST"
    });
  }
  async fetchIsUserEntitledTeachMode() {
    return await this.rabbitGetRequest(`https://hole.rabbit.tech/apis/fetchIsUserEntitledTeachMode?accessToken=${this.accessToken}`)
  }
  async fetchJournalEntry(entryId) {
    return await this.rabbitGetRequest(`https://hole.rabbit.tech/apis/fetchJournalEntry?accessToken=${this.accessToken}&entryId=${entryId}`);
  }
  //urls is an array with ???. example: img from magic cam
  async fetchJournalEntryResources(urls) {
    return await this.rabbitGetRequest(`https://hole.rabbit.tech/apis/fetchJournalEntryResources?accessToken=${this.accessToken}&urls=${urls}`);
  }
  async fetchLesson(lessonId) {
    return await this.rabbitGetRequest(`https://hole.rabbit.tech/apis/fetchLesson?accessToken=${this.accessToken}&lessonId=${lessonId}`);
  }
  async fetchLessons() {
    return await this.rabbitGetRequest(`https://hole.rabbit.tech/apis/fetchLessons?accessToken=${this.accessToken}`);
  }
  async fetchUserLessons() {
    //might fill with `fetchLessons` but I'm not sure if that's different
    return await this.rabbitGetRequest(`https://hole.rabbit.tech/apis/fetchUserLessons?accessToken=${this.accessToken}`);
  }
  async fetchUserProfile() {
    //this only returns the username afaik lol
    return await this.rabbitGetRequest(`https://hole.rabbit.tech/apis/fetchUserProfile?accessToken=${this.accessToken}`);
  }

  /**
   * @param {string} deviceId optional
   */
  async linkDevice(userId, linkingPasscode, deviceId) {
    //might be a skill issue on my end but i got 403d when i tried values that totally won't work
    //deviceId is optional according to the API??
    return await this.rabbitGetRequest(`https://hole.rabbit.tech/apis/linkDevice?userId=${userId}&linkingPasscode=${linkingPasscode}&deviceId=${deviceId}`);
  }

  //PATCH
  async updateUserProfile(payload) {
    return await fetch("https://hole.rabbit.tech/apis/updateUserProfile", {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Linux\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "Referer": "https://hole.rabbit.tech/teach-mode/lessons/test-twitter/record",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": payload,
      "method": "PATCH"
    });
  }

  //POST
  async acceptSocialTerms() {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/acceptSocialTerms", {accessToken: this.accessToken});
  }
  async addOrUpdateLocation(payload) {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/addOrUpdateLocation", payload);
  }
  async bigRedButton() {
    //uhhhh idk how to read that webpack shit and its in some other api docs that get
    //passed to the user so if you want to, implement it. It's not like you're going
    //to use it since you can't :p
    return {};
  }
  async createLesson(payload) {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/createLesson", payload);
  }
  async deleteConnectionStorage(payload) {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/deleteConnectionStorage", payload);
  }
  async deleteLesson(payload) {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/deleteLesson", payload);
  }
  async devResetUser(payload) {
    //the payload only cosists of an `accessToken` but for the user's safety it isnt as easy to use lol
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/devResetUser", payload);
  }
  async fetchDeviceState() {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/fetchDeviceState", {accessToken: this.accessToken});
  }
  async fetchSessionState() {
    //returns an empty object but I still decided to recreate it here.
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/fetchSessionState", {accessToken: this.accessToken});
  }
  async fetchUserConnectionState() {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/fetchUserConnectionState", {accessToken: this.accessToken});
  }
  async fetchUserExpediaBookingEntries() {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/fetchUserExpediaBookingEntries", {accessToken: this.accessToken});
  }
  async fetchUserExpediaBookingEntry(entryId) {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/fetchUserExpediaBookingEntry", {accessToken: this.accessToken, entryId: entryId});
  }
  async fetchUserJournal() {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/fetchUserJournal", {accessToken: this.accessToken});
  }
  async generateLinkingPasscode() {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/generateLinkingPasscode", {accessToken: this.accessToken});
  }
  async sendResetPasswordEmail() {
  return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/sendResetPasswordEmail", {accessToken: this.accessToken});
  }
  async setDeviceLost(payload) {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/setDeviceLost", payload);
  }
  async unlinkDevice() {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/unlinkDevice", {accessToken: this.accessToken});
  }
  async updateJournalEntry(payload) {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/updateJournalEntry", payload);
  }
  async updateLesson(payload) {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/updateLesson", payload);
  }
}

const holeClient = new rabbitHoleClient("accessToken");
const updatedProfile = await holeClient.updateUserProfile({ 
  accessToken: holeClient.accessToken, 
  profile: { //everything here is optional 
    name: "uh-number-one", 
    assistantName: "assistantName", 
    assistantVoice: "default", 
    email: "yourmail@mail.com", 
    locations: [{ //only street2 in a location is optional
      name: "house", 
      address: {
        street: "some random street", 
        street2: "another street", //optional
        country: "Poland", 
        city: "City", 
        state: "Slaskie", 
        zip: "03-100" } 
    }], 
    dietaryPreferences: {
      restrictions: "pinaple", 
      preferences: "chese" 
    }
  }
  })
await holeClient.addOrUpdateLocation({
  accessToken: holeClient.accessToken, 
  location: {
    name: "house", 
    address: {
      street: "some random street TWO!", 
      street2: "another street", //optional
      country: "Poland", 
      city: "City", 
      state: "Slaskie", 
      zip: "03-100"
    }
  },
  deleteLocationName: "house"
})
await holeClient.createLesson({
  accessToken: holeClient.accessToken,
  lesson: {
    domain: "https://rabbit.tech/",
    name: "rabbit-r1-buy-automation",
    description: "automatically order yourself a 2nd r1"
  }
})
await holeClient.deleteConnectionStorage({
  accessToken: holeClient.accessToken, 
  appId: "appId"
});
await holeClient.deleteLesson({
  accessToken: accessToken, 
  lessonId: "test-twitter"
})
await holeClient.devResetUser({
  accessToken: ""
})
await holeClient.fetchDeviceState();
await holeClient.fetchSessionState();
await holeClient.fetchUserConnectionState();
await holeClient.fetchUserExpediaBookingEntries();
await holeClient.fetchUserExpediaBookingEntry("id");
await holeClient.setDeviceLost({
  accessToken: accessToken, 
  deviceLost: true, 
  message: "hlep" //optional
});
await holeClient.unlinkDevice();
await holeClient.updateJournalEntry({
  accessToken: accessToken, 
  entryId: "id", 
  deleteEntry: false, //optional
  newTextContent: "doesn't work" //optional
})
await holeClient.updateLesson({
  accessToken: accessToken, 
  lessonId: "test-twitter", 
  lesson: {
    name: "name", //optional 
    description: "description" //optional
  }
})