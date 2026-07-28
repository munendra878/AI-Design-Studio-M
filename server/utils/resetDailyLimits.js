export const resetDailyLimits = (user) => {

    const today = new Date().toDateString();
    const last = new Date(user.lastReset).toDateString();

    if (today !== last) {

        user.promptUsed = 0;
        user.imageUsed = 0;
        user.saveUsed = 0;
        user.lastReset = new Date();

    }

};