const baseUrl = process.env.REACT_APP_BACKEND_URL
// const baseUrl =
// process.env.REACT_APP_DEV_PROXY ||
// 'https://flash-transfer-backend.herokuapp.com';
// const baseUrl = 'http://localhost:8000';
// const baseUrl = "https://flash-transfer-master.herokuapp.com";

const config = {
	session: {
		getSession: baseUrl + '/api/session',
	},
	auth: {
		login: baseUrl + '/api/user-login',
		social: baseUrl + '/api/social-login',
		register: baseUrl + '/api/users',
		walletLogin: baseUrl + '/api/walletLogin',
		walletSignup: baseUrl + '/api/walletSignup',
		getNonce: baseUrl + '/api/nonce',
	},
	post: {
		addPost: baseUrl + '/api/create-post',
		getPosts: baseUrl + '/api/get-posts',
	},
	category: {
		addCategory: baseUrl + `/api/create-category`,
		getCategory: baseUrl + `/api/get-categories`,
	},
	banner: {
		createBanner: baseUrl + '/api/create-banner',
		getBanner: baseUrl + '/api/get-banners',
	},
	location: {
		districts: baseUrl + '/api/get-districts',
	},
	user: {
		update: baseUrl + '/api/update-user',
	},

	Notification: {
		createNotification: baseUrl + '/api/create-Notifications',
		getNotification: baseUrl + '/api/get-Notifications',
	},
	trackLocation: {
		createTrackLocation: baseUrl + '/api/create-trackLocation',
	},
	findLocation: {
		getfindLocation: baseUrl + '/api/get-findLocation',
	},
	History: {
		createHistory: baseUrl + '/api/create-History',
		getHistory: baseUrl + '/api/get-logs',
	},
	Contact: {
		createContact: baseUrl + '/api/contactus',
		getContact: baseUrl + '/api/get-Contact',
	},

	forgotpassword: {
		restPassword: baseUrl + '/api/forgot-password',
		changePassword: baseUrl + '/api/change-password',
	},
	verified: {
		verified: baseUrl + '/api/email-verify',
	},
	usersRole: {
		getUsersRole: baseUrl + '/api/users-role',
	},
	otpAuth: {
		sendOtp: baseUrl + '/api/send-otp',
		verifyOtp: baseUrl + '/api/verify-otp',
	},
	price: {
		getPrice: baseUrl + '/api/exchange/price',
		calPrice: baseUrl + '/api/exchange/cal_price',
	},

};
export default config;
