export class Messages {
  static getMessage() {
    return {
      default: {
        defulttype: 'error',
        defulttitle: 'Errror Message',
        successtype: 'success',
        successtitle: 'Success Message'
      },
      global: {
        dataFetchError: 'Unable to fetch the data'
      },
      authentication : {
        regFailue: 'Unable register the user',
        regSuccess: 'User registration is Successfully Done!',
        loginFailue: 'Unauthorized credentials User login failed ',
        loginSuccess: 'User successfully LoggedIn',
      },
      profile : {
        profFailue: 'User details updation was canclled',
        profSuccess: 'User details Updated Successfully !',
      },
    };
  }
}
