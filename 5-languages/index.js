const language = prompt("Enter language");

switch (language) {
    case "en":
        console.log("Hello!");
        break;
    case "fr":
        console.log("Bonjour");
        break;
    case "ru":
        console.log("Здравствуйте");
        break;
    case "de":
        console.log("Gutten tag!");
        break;
    default:
        console.log("empty language");
}