class Github {
  // Note: you would not want to leave this ID & secret in a production project as it is insecure
  // This data is brought in from Github Oauth
  constructor() {
    this.client_id = '6af1c82778958e133305';
    this.client_secret = '7d551ebac2ccecf23b89ab17d110d751a73250c4';
  }

  async getUser(user) {
    // This gets the User info
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      // Note this is an ES6 abbrevation of 'profile: profile'
      profile
    }
  }
}
