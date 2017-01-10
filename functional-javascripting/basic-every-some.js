function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every( (user) => {
			return goodUsers.some( (goodUser) => {
				return user.id === goodUser.id;
			});
		});
	};
}

module.exports = checkUsersValid