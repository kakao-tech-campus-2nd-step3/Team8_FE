export type TosData = {
  intro: string;
  sections: Array<{ title: string; contents: string[] }>;
};

export type FormValues = {
  name: string;
  phoneNumber: string;
  agreeToTerms: boolean;
};
