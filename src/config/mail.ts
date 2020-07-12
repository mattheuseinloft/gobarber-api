interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'scorpzero7@zohomail.com',
      name: 'Scorp da GoBarber',
    },
  },
} as IMailConfig;
