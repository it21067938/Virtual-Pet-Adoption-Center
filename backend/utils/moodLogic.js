export const setMoodLogic = (createdAt) => {
    const now = new Date();
    const diffInMs = now - createdAt;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24); //ms to days

    if (diffInDays < 1) {
        return "Happy";
    } else if (diffInDays >= 1 && diffInDays <= 3 ) {
        return "Excited";
    }else {
        return "Sad";
    }
}