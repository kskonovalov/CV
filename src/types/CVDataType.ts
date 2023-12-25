export type contactType = {
  value: string;
  icon: string;
  link: string;
  name: string;
  blank: boolean;
  preferred: boolean;
};

export type CVDataType = {
  name: string;
  surname: string;
  photo: string;
  birthday: string;
  position: string;
  lookingFor: string;
  description: string;
  contacts: {
    cv: contactType;
    email: contactType;
    github: contactType;
    linkedin: contactType;
    phone: contactType;
    telegram: contactType;
  };
  onContactsPage: string[];
};
