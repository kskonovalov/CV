export type buttonType = {
  title: string;
  link: string;
};

export type imageType = {
  thumb: string;
  full: string;
  alt: string;
};

export type projectType = {
  title: string;
  description: string;
  tech: {
    main?: string;
    additional?: string;
  };
  buttons: buttonType[];
  images: imageType[];
};

export type portfolioDataType = {
  text: string;
  projects: projectType[];
};
