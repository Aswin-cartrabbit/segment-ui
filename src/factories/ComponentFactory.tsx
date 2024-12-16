import { CountryPickerCreater } from './creators/CountryPickerCreater';
import { datePickerCreater } from './creators/datePickerCreater';
import { dropdownCreator } from './creators/dropdownCreator';
import { LanguagePickerCreater } from './creators/LanguagePickerCreater';
import { multiInputCreator } from './creators/multiInputCreator';
import { MultiSelectCreater } from './creators/MultiSelectCreater';

export class ComponentFactory {
  static createComponent(type: string, field: any) {
     switch (type) {
      case 'dropdown':
        return dropdownCreator(field);
      case 'multiInput':
        return multiInputCreator(field);
      case 'date':
        return datePickerCreater(field);
      case 'languageDropdown':
        return LanguagePickerCreater(field);
      case 'countryDropdown':
        return CountryPickerCreater(field);
      case 'multiSelect':
        return MultiSelectCreater(field);
      default:
        return null;
    }
  }
}