export const COLORS = {
    ACCENT: "#a6e3ff",
    ACCENT2: "#bdeaff",
    HEADER_TEXT: "#fff",
    TEXT: "#e3e3e3",
    FOREGROUND: "#151A21",
    BACKGROUND: "#0B0E11",
    BACKGROUND2: "#101419",
    BUTTON: "#0B0E11",
    BUTTON_HOVER: "#171717",
    BUTTON_RED: "#eb4034",
    BUTTON_RED_HOVER: "#c7382e",
    INPUT: "#DEE3EA",
    LINK_HOVER: "#c2c2c2",
    BLUE: "#001ab7",
    YELLOW: "#ffc91b",
    BUTTON_GREEN: "#169c09",
    BUTTON_GREEN_HOVER: "#4ba343"
}

export const API_TIMEOUT: number = 6000; // in ms

export const ERRORS = {
    GENERIC_ERROR: "Something has gone wrong.",
    EMAIL_NOT_PROVIDED: "Please provide an email.",
    USERNAME_NOT_PROVIDED: "Please provide a username.",
    PASSWORD_NOT_PROVIDED: "Please provide a password.",
    INVALID_EMAIL: "Your inputted email is invalid.",
    INVALID_USERNAME: "Your inputted username must be between 3-16 characters and cannot have multiple underscores next to each other or at the end.",
    INVALID_PASSWORD: "Incorrect password.",
    INVALID_PASSWORD_REGEX: "Your password needs to have at least 8 characters, a number, and a symbol.",
    EMAIL_TAKEN: "This email is already registered.",
    USERNAME_TAKEN: "This username is already taken.",
    PASSWORD_MISMATCH: "Password mismatch. Please make sure both passwords match!",
    EMAIL_DOES_NOT_EXIST: "This user does not exist.",
    AUTH_FAILED: "Authentication failed. Please try again later.",
    RATE_LIMITED: "Too many requests from this IP! Try again in 15 minutes.",
    AUTH_COOKIE_PRESENT: "You are already logged in!",
    AUTH_COOKIE_NOT_PRESENT: "You are not logged in!",
    AUTH_TIME_OUT: "Your request has timed out. Please try again later."
}