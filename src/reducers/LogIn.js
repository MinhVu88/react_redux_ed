const logIn = (initialState = false, action) => {
    switch(action.type) {
      case 'SIGN_IN':
        return !initialState;
      default:
        return initialState;
    };
};

export default logIn;