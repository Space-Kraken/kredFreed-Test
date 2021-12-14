import { Data } from "./data/getApiData";
import { Persistence } from "./Storage/Persistence";
import { Validate } from "./Validator/InputValidator";
import { FormValidator } from "./Validator/FormValidator";

export const Services = {
    Data,
    Validate,
    Persistence,
    FormValidator
}