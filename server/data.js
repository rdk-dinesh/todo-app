const users = [
    {
        id: 'c0e00444-f033-4f78-b582-161bc7d19ba9',
        username: 'mike_john',
        name: 'Mike John',
        email: 'john@gmail.com',
        password: '12345678',
        phone: '9345193451',
        address: {
            street: 'river view residence',
            city: 'Madurai',
            zipcode: '604206'
        },
        tasks: [
            {
                id: '65268c05-cc47-49f6-9457-93b922be5872',
                task: 'Go to gym',
                isCompleted: false,
            },
            {
                id: 'c6892c7f-2f91-4757-b660-5502ac351b9c',
                task: 'Go to temple',
                isCompleted: false,
            },
            {
                id: '830c9952-24d9-4872-a7de-60430023f3fe',
                task: 'Buy Groceries',
                isCompleted: false,
            }
        ]
    },
    {
        id: 'dc0c0b44-a89b-410b-b31b-66ca77273378',
        username: 'mike@gmail.com',
        name: 'Mike Cave',
        email: 'sample@gmail.com',
        password: '123456',
        phone: '9345193452',
        address: {
            street: 'pillaiyar koil street',
            city: 'chennai',
            zipcode: '604206'
        },
        tasks: [
            {
                id: 'ad353317-3065-45bb-a486-8fdff0dcc0e1',
                task: 'Go to service center',
                isCompleted: false,
            },
            {
                id: 'c7be2554-daff-49b7-82e2-0e9c3fe4ab4a',
                task: 'Go to temple',
                isCompleted: false,
            }
        ]
    }
]

module.exports = { users }