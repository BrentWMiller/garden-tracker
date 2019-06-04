export interface User {
  uid: string;
  email: string;
  password?: string; // initial register only; not saved
}
