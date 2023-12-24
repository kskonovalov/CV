const personalDataLink = '/data/personal.json';
export { personalDataLink };

const certificatesDataLink = '/data/certificates.json';
export { certificatesDataLink };

const resumeDataLink = '/data/resume.json';
export { resumeDataLink };

const emailHandlerLink =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? '/test' // dev
    : '/contact.php'; // prod
export { emailHandlerLink };
