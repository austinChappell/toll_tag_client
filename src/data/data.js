const data = {
  users: [
    {
      firstName: 'Austin',
      lastName: 'Chappell',
      password: 'test',
      id: 1,
      balance: 34.74,
      token: 'ads98fiuh2398wefay',
      isAdmin: true,
      email: 'austin@cratebind.com'
    },
    {
      firstName: 'Eric',
      lastName: 'Chen',
      password: 'test',
      id: 2,
      balance: 36.74,
      token: '238asdjavopiasd23ewff',
      isAdmin: true,
      email: 'eric@cratebind.com'
    },
    {
      firstName: 'Matt',
      lastName: 'Wood',
      password: 'test',
      id: 3,
      balance: 24.52,
      token: '239rp8asdfkljhawerpoi',
      isAdmin: false,
      email: 'matt@cratebind.com'
    },
    {
      firstName: 'Juan',
      lastName: 'Carlos',
      password: 'test',
      id: 4,
      balance: 14.74,
      token: 'wqgrj234khagoi2uwqkjnav',
      isAdmin: false,
      email: 'juan@cratebind.com'
    },
    {
      firstName: 'Yang',
      lastName: 'Yu',
      password: 'test',
      id: 5,
      balance: 42.39,
      token: '23r98uadfh23erg9812ed',
      isAdmin: false,
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
    {
      location: '121 Prestion',
      created_at: new Date().toDateString(),
      toll_tag_id: 3,
      charge: 0.90
    },
    {
      location: 'DNT Josey',
      created_at: new Date().toDateString(),
      toll_tag_id: 3,
      charge: 0.50
    },
  ],
  tollTags: [
    {
      id: 1,
      vehicleTag: 1,
      make: 'Toyota',
      model: 'Camry',
      year: '2008',
      lpNum: '28AE7C',
      remainingBalance: 37.24,
      user_id: 4,
    },
    {
      id: 2,
      vehicleTag: 2,
      make: 'Honda',
      model: 'CRV',
      year: '2012',
      lpNum: '231FA3',
      remainingBalance: 29.24,
      user_id: 3
    },
    {
      id: 3,
      vehicleTag: 3,
      make: 'Honda',
      model: 'Civic',
      year: '2016',
      lpNum: 'Z8T7CY',
      remainingBalance: 27.09,
      user_id: 4,
    },
  ],
}

module.exports = data;
