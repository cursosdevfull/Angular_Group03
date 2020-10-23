export interface Driver {
  _id: string;
  name: string;
  surname: string;
  lastname: string;
  photo: string | File;
  locations: [];
}
