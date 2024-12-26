import { DatePicker } from '@/components/pickers/DatePicker';

export const datePickerCreater = (field: any) => {
  return <DatePicker {...field} />;
};
