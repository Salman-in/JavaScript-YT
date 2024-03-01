// Basic Switch syntax //
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Febraury");
        break;
    case "march":
        console.log("March");
        // break; //Here if we dont add break , it will automatically print the below cases even after matching with this case except default (Not Applicable for modern/latest languages).
    case "april":
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}