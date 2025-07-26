const users = [
  {
    id: '6f3a2a2b-ef84-4e4d-b231-381547f65776',
    username: 'amy_rogers',
    name: 'Amy Rogers',
    email: 'amy@gmail.com',
    password: 'password123',
    phone: '9345193453',
    address: {
      street: 'sunset boulevard',
      city: 'Los Angeles',
      zipcode: '90001'
    },
    tasks: [
      {
        id: 'a2a8b6a1-1a4e-45d4-b8e3-622cb4ec2db7',
        task: 'Finish project report',
        isCompleted: false
      },
      {
        id: 'b1d3f21d-9e55-4a64-bd80-d2f63ff0de94',
        task: 'Buy groceries',
        isCompleted: true
      }
    ]
  },
  {
    id: '99c8e31f-2701-4951-b75f-5e5c2ae0189b',
    username: 'sam_wilson',
    name: 'Sam Wilson',
    email: 'sam@gmail.com',
    password: '12345678',
    phone: '9345193454',
    address: {
      street: 'maple street',
      city: 'Denver',
      zipcode: '80201'
    },
    tasks: [
      {
        id: '5b64f1f9-34e3-49b1-908b-d228f82e2291',
        task: 'Submit assignment',
        isCompleted: false
      },
      {
        id: '10b409d5-5c2a-48d1-92fc-9f46007d81dc',
        task: 'Pay bills',
        isCompleted: false
      }
    ]
  },
  {
    id: '75b87f13-674e-4d0a-b7f4-84e8f95323f9',
    username: 'linda_snow',
    name: 'Linda Snow',
    email: 'linda@gmail.com',
    password: 'abcdefg',
    phone: '9345193455',
    address: {
      street: 'ocean drive',
      city: 'Miami',
      zipcode: '33101'
    },
    tasks: [
      {
        id: 'c0f98a88-b87c-48c3-b0cf-df50770e03c3',
        task: 'Yoga class',
        isCompleted: true
      },
      {
        id: '24c09a36-2cd7-4711-a2c2-bf6c3e85c3ed',
        task: 'Clean kitchen',
        isCompleted: false
      }
    ]
  },
  {
    id: 'a207c3b4-7a1f-438c-a48e-08709f51e8b7',
    username: 'james.bond',
    name: 'James Bond',
    email: 'bond007@gmail.com',
    password: 'shakenNotStirred',
    phone: '9345193456',
    address: {
      street: 'secret lane',
      city: 'London',
      zipcode: 'SW1A 1AA'
    },
    tasks: [
      {
        id: '5cdd235c-1441-4096-a47b-f2e41c42bc16',
        task: 'Spy training',
        isCompleted: false
      },
      {
        id: '81d876d3-28e4-4b77-9799-5a8d3ab4f421',
        task: 'Mission briefing',
        isCompleted: false
      }
    ]
  },
  {
    id: '18dc4f59-7ed0-44d7-b4f5-5794c02a19b3',
    username: 'tony_stark',
    name: 'Tony Stark',
    email: 'tony@starkindustries.com',
    password: 'iamironman',
    phone: '9345193457',
    address: {
      street: 'malibu mansion',
      city: 'Malibu',
      zipcode: '90265'
    },
    tasks: [
      {
        id: 'f9ff4c61-9c61-4b46-86f2-1c3d2bc823dd',
        task: 'Build new armor',
        isCompleted: true
      },
      {
        id: '1b4a08b1-5936-4232-9cb4-88f1659a008f',
        task: 'Board meeting',
        isCompleted: false
      }
    ]
  },
  {
    id: '5b1fef2f-fde6-420c-bd34-1ae665dd5875',
    username: 'bruce_wayne',
    name: 'Bruce Wayne',
    email: 'bruce@wayneenterprises.com',
    password: 'batman123',
    phone: '9345193458',
    address: {
      street: 'wayne manor',
      city: 'Gotham',
      zipcode: '10001'
    },
    tasks: [
      {
        id: 'c9e173d3-5d65-4cd4-90cd-4b7703648b18',
        task: 'Night patrol',
        isCompleted: false
      },
      {
        id: 'a23eeb75-3fd2-4c10-935d-9de05b2c3604',
        task: 'Train with Alfred',
        isCompleted: true
      }
    ]
  },
  {
    id: '29516f2c-1df3-4c8e-8a7a-0e2f2fca6f38',
    username: 'clark_kent',
    name: 'Clark Kent',
    email: 'clark@dailyplanet.com',
    password: 'superman',
    phone: '9345193459',
    address: {
      street: 'kent farm',
      city: 'Smallville',
      zipcode: '66002'
    },
    tasks: [
      {
        id: '01e1e60b-72e3-4bb6-8107-39df275d9f8e',
        task: 'Write article',
        isCompleted: false
      },
      {
        id: '9a47a0cc-1df2-46b3-8bde-55bc5c35cc6e',
        task: 'Save Metropolis',
        isCompleted: true
      }
    ]
  },
  {
    id: 'c7de2d98-3c4b-4a17-99be-891f2f6b03c3',
    username: 'natasha_romanoff',
    name: 'Natasha Romanoff',
    email: 'blackwidow@shield.com',
    password: 'redroom',
    phone: '9345193460',
    address: {
      street: 'unknown',
      city: 'Budapest',
      zipcode: '99999'
    },
    tasks: [
      {
        id: '27dc0071-e07f-4fe1-b54a-83e0420b13d2',
        task: 'Infiltration mission',
        isCompleted: false
      },
      {
        id: 'f09e025c-11ae-41d9-9536-c3b8fcf0fd80',
        task: 'Debrief',
        isCompleted: false
      }
    ]
  },
  {
    id: '8f7cbb7e-b7e9-4698-97db-08d2355471a1',
    username: 'steve_rogers',
    name: 'Steve Rogers',
    email: 'cap@avengers.com',
    password: 'shield123',
    phone: '9345193461',
    address: {
      street: 'brooklyn avenue',
      city: 'New York',
      zipcode: '10002'
    },
    tasks: [
      {
        id: '124dd099-2a87-4f5e-ae9e-6e9ac4ae0411',
        task: 'Training new recruits',
        isCompleted: true
      },
      {
        id: '9fdd0b0f-0d5f-4b9f-918e-09e04e92b96a',
        task: 'Report writing',
        isCompleted: false
      }
    ]
  },
  {
    id: 'b4e92e97-880d-432b-a96b-f16c8f46e6aa',
    username: 'peter_parker',
    name: 'Peter Parker',
    email: 'spidey@dailybugle.com',
    password: 'webslinger',
    phone: '9345193462',
    address: {
      street: 'forest hills',
      city: 'Queens',
      zipcode: '11375'
    },
    tasks: [
      {
        id: 'b67a8784-f4df-4c48-bad7-07d82fd32095',
        task: 'Photography assignment',
        isCompleted: false
      },
      {
        id: 'abc98712-4a79-412a-b3db-0b44c51592ec',
        task: 'Stop robbery',
        isCompleted: true
      }
    ]
  }
];


module.exports = { users }