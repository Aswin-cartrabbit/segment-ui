import { dropdownCreator } from './creators/dropdownCreator';
import { multiInputCreator } from './creators/multiInputCreator';

export class ComponentFactory {
  static createComponent(type: string, field: any) {
     switch (type) {
      case 'dropdown':
        return dropdownCreator(field);
      case 'multiInput':
        return multiInputCreator(field);
      default:
        return null;
    }
  }
}
