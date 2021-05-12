let config;

export default config = {
	hostName: 'http://localhost:8080/',
    // hostName: 'https://music-service-123123.herokuapp.com/',
	validators: {
		usernameMinLength: 3,
		passwordMinLength: 8,
		firstNameMinLength: 3,
		lastNameMinLength: 3
	}
}
