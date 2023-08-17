const mongoose = require('mongoose');
const Campground = require('./models/campground');

mongoose.connect('mongodb://127.0.0.1/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("mongo connection open");
}).catch(err => {
    console.log("Oh no connection failed!!!");
    console.log(err);
});

const initial_item = [
    {
        author:'64a2d920c7d0fa0641ac4c63',
        title: 'park street',
        price: '3000',
        description:'way to crowded',
        location: 'Paris, France',
        images: [
            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931958/YelpCamp/bz2yjffge9ezc7apgfh4.jpg",
                filename:
                "YelpCamp/bz2yjffge9ezc7apgfh4"
            },

            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931958/YelpCamp/ypvhhycgbfrro3p7pf1n.jpg",
                filename:"YelpCamp/ypvhhycgbfrro3p7pf1n"
            },
            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931959/YelpCamp/nttxl5wxgmfpanatqyon.jpg",
                filename:"YelpCamp/nttxl5wxgmfpanatqyon"
            }
        ]
        
    },
    {
        author:'64a2d920c7d0fa0641ac4c63',
        title: 'somewhere in the peak',
        price: '4000',
        description: 'way to quiet',
        location: 'Tokyo, Japan',
        images: [
            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931958/YelpCamp/bz2yjffge9ezc7apgfh4.jpg",
                filename:
                "YelpCamp/bz2yjffge9ezc7apgfh4"
            },

            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931958/YelpCamp/ypvhhycgbfrro3p7pf1n.jpg",
                filename:"YelpCamp/ypvhhycgbfrro3p7pf1n"
            },
            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931959/YelpCamp/nttxl5wxgmfpanatqyon.jpg",
                filename:"YelpCamp/nttxl5wxgmfpanatqyon"
            }
        ]
        
    },
    {
        author:'64a2d920c7d0fa0641ac4c63',
        title: 'inside a tiny teny',
        price:'1000',
        description: 'way to small',
        location: 'Rio de Janeiro, Brazil',
        images: [
            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931958/YelpCamp/bz2yjffge9ezc7apgfh4.jpg",
                filename:
                "YelpCamp/bz2yjffge9ezc7apgfh4"
            },

            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931958/YelpCamp/ypvhhycgbfrro3p7pf1n.jpg",
                filename:"YelpCamp/ypvhhycgbfrro3p7pf1n"
            },
            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931959/YelpCamp/nttxl5wxgmfpanatqyon.jpg",
                filename:"YelpCamp/nttxl5wxgmfpanatqyon"
            }
        ]
        
    },
    {
        author:'64a2d920c7d0fa0641ac4c63',
        title: 'top of a mountain',
        price:'4000',
        description:'way to high',
        location: 'Sydney, Australia',
        images: [
            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931958/YelpCamp/bz2yjffge9ezc7apgfh4.jpg",
                filename:
                "YelpCamp/bz2yjffge9ezc7apgfh4"
            },

            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931958/YelpCamp/ypvhhycgbfrro3p7pf1n.jpg",
                filename:"YelpCamp/ypvhhycgbfrro3p7pf1n"
            },
            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931959/YelpCamp/nttxl5wxgmfpanatqyon.jpg",
                filename:"YelpCamp/nttxl5wxgmfpanatqyon"
            }
        ]
        
    },
    {
        author:'64a2d920c7d0fa0641ac4c63',
        title: 'near micosoft office',
        price:'3000',
        description: 'way to crowded',
        location: 'Mumbai, India',
        images: [
            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931958/YelpCamp/bz2yjffge9ezc7apgfh4.jpg",
                filename:
                "YelpCamp/bz2yjffge9ezc7apgfh4"
            },

            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931958/YelpCamp/ypvhhycgbfrro3p7pf1n.jpg",
                filename:"YelpCamp/ypvhhycgbfrro3p7pf1n"
            },
            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931959/YelpCamp/nttxl5wxgmfpanatqyon.jpg",
                filename:"YelpCamp/nttxl5wxgmfpanatqyon"
            }
        ]
        
    },
    {
        author:'64a2d920c7d0fa0641ac4c63',
        title: 'near the river',
        price:'1000',
        description: 'way to quite',
        location: 'Bangkok, Thailand',
        images: [
            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931958/YelpCamp/bz2yjffge9ezc7apgfh4.jpg",
                filename:
                "YelpCamp/bz2yjffge9ezc7apgfh4"
            },

            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931958/YelpCamp/ypvhhycgbfrro3p7pf1n.jpg",
                filename:"YelpCamp/ypvhhycgbfrro3p7pf1n"
            },
            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931959/YelpCamp/nttxl5wxgmfpanatqyon.jpg",
                filename:"YelpCamp/nttxl5wxgmfpanatqyon"
            }
        ]
        
    },
    {
        author:'64a2d920c7d0fa0641ac4c63',
        title: 'somewhere in the dark',
        price: '2000',
        description: 'no sign of light',
        location: 'Cairo, Egypt',
        images: [
            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931958/YelpCamp/bz2yjffge9ezc7apgfh4.jpg",
                filename:
                "YelpCamp/bz2yjffge9ezc7apgfh4"
            },

            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931958/YelpCamp/ypvhhycgbfrro3p7pf1n.jpg",
                filename:"YelpCamp/ypvhhycgbfrro3p7pf1n"
            },
            {
                url:"https://res.cloudinary.com/dztrkupjm/image/upload/v1688931959/YelpCamp/nttxl5wxgmfpanatqyon.jpg",
                filename:"YelpCamp/nttxl5wxgmfpanatqyon"
            }
        ]
    }
]



const seedDB = async () => { 

    await Campground.deleteMany({});

    await Campground.insertMany(initial_item).then(res => { 
        console.log(res);
    }).catch(e => { 
        console.log(e);
    })
}


seedDB();






