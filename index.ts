interface updateUserProfileInterface {
  accessToken: string,
  profile: {
    name: string,
    assistantName: string,
    assistantVoice: string,
    email: string,
    locations: Array<LocationInterface>
    dietaryPreferences: {
      restrictions: string,
      preferences: string
    }
  }
}
interface LocationInterface {
  name: string,
  address: {
    street: string,
    street2: string, //optional
    country: string,
    city: string,
    state: string,
    zip: string
  }
}
interface addOrUpdateLocationInterface {
  accessToken: string,
  location: LocationInterface,
  deleteLocationName: string
}
interface createLessonInterface {
  accessToken: string,
  lesson: {
    domain: string,
    name: string,
    description: string
  }
}
interface deleteConnectionStorageInterface {
  accessToken: string,
  appId: string
}
interface deleteLessonInterface {
  accessToken: string,
  lessonId: string
}
interface devResetUserInterface {
  accessToken: string
}
interface setDeviceLostInterface {
  accessToken: string,
  deviceLost: boolean,
  message: string //optional
}
interface updateJournalEntryInterface {
  accessToken: string,
  entryId: string,
  deleteEntry: boolean, //optional
  newTextContent: string, //optional and currently doesn't work
}
interface updateLessonInterface {
  accessToken: string,
  lessonId: string,
  lesson: {
    name: string, //optional
    description: string //optional
  }
}

//@ts-ignore
class rabbitHoleClient {
  accessToken: string;
  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }  

  async rabbitGetRequest(url: string) {
    return await fetch(url, {
      "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
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
  async rabbitPostRequest(url: string, payload: object) {
    return await fetch(url, {
      "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
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
      "body": JSON.stringify(payload),
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
    return await this.rabbitGetRequest(`https://hole.rabbit.tech/apis/fetchUserProfile?accessToken=${this.accessToken}`);
  }

  /**
   * @param {string} deviceId optional
   */
  async linkDevice(userId: string, linkingPasscode: string, deviceId: string) {
    //might be a skill issue on my end but i got 403d when i tried values that totally won't work
    //deviceId is optional according to the API??
    return await this.rabbitGetRequest(`https://hole.rabbit.tech/apis/linkDevice?userId=${userId}&linkingPasscode=${linkingPasscode}&deviceId=${deviceId}`);
  }

  //PATCH
  async updateUserProfile(payload: updateUserProfileInterface) {
    return await fetch("https://hole.rabbit.tech/apis/updateUserProfile", {
      "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
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
      "body": JSON.stringify(payload),
      "method": "PATCH"
    });
  }

  //POST
  async acceptSocialTerms() {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/acceptSocialTerms", {accessToken: this.accessToken});
  }
  async addOrUpdateLocation(payload: addOrUpdateLocationInterface) {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/addOrUpdateLocation", payload);
  }
  async bigRedButton() {
    //uhhhh idk how to read that webpack shit and its in some other api docs that get
    //passed to the user so if you want to, implement it. It's not like you're going
    //to use it since you can't :p
    return {};
  }
  async createLesson(payload: createLessonInterface) {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/createLesson", payload);
  }
  async deleteConnectionStorage(payload: deleteConnectionStorageInterface) {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/deleteConnectionStorage", payload);
  }
  async deleteLesson(payload: deleteLessonInterface) {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/deleteLesson", payload);
  }
  async devResetUser(payload: devResetUserInterface) {
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
  async fetchUserExpediaBookingEntry(entryId: string) {
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
  async setDeviceLost(payload: setDeviceLostInterface) {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/setDeviceLost", payload);
  }
  async unlinkDevice() {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/unlinkDevice", {accessToken: this.accessToken});
  }
  async updateJournalEntry(payload: updateJournalEntryInterface) {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/updateJournalEntry", payload);
  }
  async updateLesson(payload: updateLessonInterface) {
    return await this.rabbitPostRequest("https://hole.rabbit.tech/apis/updateLesson", payload);
  }
}

const holeclient = new rabbitHoleClient("accessToken");

const response = await holeclient.devResetUser({accessToken: holeclient.accessToken});
console.log(await response.text());

/*  const updatedProfile = await holeclient.updateUserProfile({ 
    accessToken: holeclient.accessToken, 
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
    })*/
/*  await holeclient.addOrUpdateLocation({
    accessToken: holeclient.accessToken, 
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
  await holeclient.createLesson({
    accessToken: holeclient.accessToken,
    lesson: {
      domain: "https://rabbit.tech/",
      name: "rabbit-r1-buy-automation",
      description: "automatically order yourself a 2nd r1"
    }
  })

  await holeclient.deleteConnectionStorage({
    accessToken: holeclient.accessToken, 
    appId: "appId"
  });

  await holeclient.deleteLesson({
    accessToken: holeclient.accessToken, 
    lessonId: "test-twitter"
  })

  await holeclient.devResetUser({
    accessToken: ""
  })
  await holeclient.fetchDeviceState();
  await holeclient.fetchSessionState();
  await holeclient.fetchUserConnectionState();
  await holeclient.fetchUserExpediaBookingEntries();
  await holeclient.fetchUserExpediaBookingEntry("id");

  await holeclient.setDeviceLost({
    accessToken: holeclient.accessToken, 
    deviceLost: true, 
    message: "hlep" //optional
  });
  await holeclient.unlinkDevice();

  await holeclient.updateJournalEntry({
    accessToken: holeclient.accessToken, 
    entryId: "id", 
    deleteEntry: false, //optional
    newTextContent: "doesn't work" //optional
  })

  await holeclient.updateLesson({
    accessToken: holeclient.accessToken, 
    lessonId: "test-twitter", 
    lesson: {
      name: "name", //optional 
      description: "description" //optional
    }
  })*/
