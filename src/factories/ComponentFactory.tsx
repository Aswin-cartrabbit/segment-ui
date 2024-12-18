import { CountryPickerCreater } from "./creators/CountryPickerCreater";
import { datePickerCreater } from "./creators/datePickerCreater";
import { dateRangePickerCreater } from "./creators/DateRangePickerCreater";
import { dropdownCreator } from "./creators/dropdownCreator";
import { InputCreator } from "./creators/InputCreater";
import { LanguagePickerCreater } from "./creators/LanguagePickerCreater";
import { multiInputCreator } from "./creators/multiInputCreator";
import { MultiSelectCreater } from "./creators/MultiSelectCreater";

export class ComponentFactory {
  static createComponent(type: string, field: any) {
    switch (type) {
      case "dropdown":
        return dropdownCreator(field);
      case "multiInput":
        return multiInputCreator(field);
      case "date":
        return datePickerCreater(field);
      case "dateRange":
        return dateRangePickerCreater(field);
      case "languageDropdown":
        return LanguagePickerCreater(field);
      case "countryDropdown":
        return CountryPickerCreater(field);
      case "multiSelect":
        return MultiSelectCreater(field);
      case "input":
        return InputCreator(field);
      default:
        return null;
    }
  }
}
