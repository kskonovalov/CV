const PersonalData = {
  photo: '/assets/images/photo.png',
  name: 'Konstantin',
  surname: 'Konovalov',
  position: 'Remote Frontend Developer (React JS)',
  birthday: '25-11-1987',
  email: 'k.s.konovalov@gmail.com',
  phone: '+7(909)553-56-76',
  skype: 'konst-mb',
  linkedin: 'https://www.linkedin.com/in/konstantin-konovalov',
  cv:
    'https://docs.google.com/document/d/15_D6FMacbpgnTg-qZ_fHtnkgVlSIcWA2iqwOQmZnFNY'
};

export const PersonalDataAdditional = {
  email: {
    link: 'mailto:k.s.konovalov@gmail.com',
    blank: false,
    preferred: true,
    icon: 'fa-envelope'
  },
  phone: {
    link: 'tel:+79095535676',
    blank: false,
    icon: 'fa-phone'
  },
  skype: {
    link: 'skype:konst-mb?chat',
    blank: false,
    icon: 'fa-skype'
  },
  linkedin: {
    link: 'https://www.linkedin.com/in/konstantin-konovalov',
    blank: true,
    icon: 'fa-linkedin'
  },
  cv: {
    link:
      'https://docs.google.com/document/d/15_D6FMacbpgnTg-qZ_fHtnkgVlSIcWA2iqwOQmZnFNY',
    blank: true
  }
};

export default PersonalData;
