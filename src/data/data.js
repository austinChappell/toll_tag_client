const data = {
  users: [
    {
      firstName: 'Austin',
      lastName: 'Chappell',
      password: 'test',
      id: 1,
      balance: 34.74,
      token: 'ads98fiuh2398wefay',
      idAdmin: true,
      email: 'austin@cratebind.com'
    },
    {
      firstName: 'Eric',
      lastName: 'Chen',
      password: 'test',
      id: 2,
      balance: 36.74,
      token: '238asdjavopiasd23ewff',
      idAdmin: true,
      email: 'eric@cratebind.com'
    },
    {
      firstName: 'Matt',
      lastName: 'Wood',
      password: 'test',
      id: 3,
      balance: 24.52,
      token: '239rp8asdfkljhawerpoi',
      idAdmin: false,
      email: 'matt@cratebind.com'
    },
    {
      firstName: 'Juan',
      lastName: 'Carlos',
      password: 'test',
      id: 4,
      balance: 14.74,
      token: 'wqgrj234khagoi2uwqkjnav',
      idAdmin: false,
      email: 'juan@cratebind.com'
    },
    {
      firstName: 'Yang',
      lastName: 'Yu',
      password: 'test',
      id: 5,
      balance: 42.39,
      token: '23r98uadfh23erg9812ed',
      idAdmin: false,
      email: 'yang@cratebind.com'
    },
  ],
  events: [
    {
      location: 'DNT Walnut Hill',
      created_at: new Date().toDateString(),
      toll_tag_id: 1,
      charge: 0.40
    },
    {
      location: 'DNT Royal',
      created_at: new Date().toDateString(),
      toll_tag_id: 1,
      charge: 0.40
    },
    {
      location: '121 Prestion',
      created_at: new Date().toDateString(),
      toll_tag_id: 1,
      charge: 0.90
    },
    {
      location: 'DNT Josey',
      created_at: new Date().toDateString(),
      toll_tag_id: 2,
      charge: 0.50
    },
    {
      location: '121 Ohio',
      created_at: new Date().toDateString(),
      toll_tag_id: 2,
      charge: 0.75
    },
  ],
  tollTags: [
    {
      id: 1,
      vehicleTag: 1,
      remainingBalance: 37.24,
      user_id: 4,
    },
    {
      id: 2,
      vehicleTag: 2,
      remainingBalance: 29.24,
      user_id: 3
    }
  ],
}

module.exports = data;
