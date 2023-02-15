import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Abdul Rafay",
    lastName: "",
    initials: "AR", 
    position: "a Full Stack Developer & ML Enginner",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'I am from Pakistan'
        },
        {
            emoji: "💼",
            text: "Software Engineer at Swam Technologies, NUST"
        },
        {
            emoji: "📧",
            text: "99marafay@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/mohammad.abdul.rafay.99/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/abdul_rafay99/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/rafay99-epic",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/abdul-rafay1999/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/abdul_rafay99",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "https://rafayblogs.tech",
            icon: 'fa fa-book',
            label: 'Blog'
        },
    ],
    bio: "Hello! I'm Rafay. I'm a Software Engineer for Swam Technologies. I studied Software Engineering at CUST, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'machine learning','writing articles'],
            exposedTo: ['nodejs', 'python', 'Canva','Gimp']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'coding',
            emoji: '👨‍💻'
        },
        {
            label: 'blogs',
            emoji: '📝'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        },
        {
            label: 'driving cars ',
            emoji: '🏎️'
        }

    ],
    portfolio: [ 
        {
            title: "Parking-Assistant",
            live: "https://paytonpierce.dev",
            source: "https://github.com/rafay99-epic/Parking-Assistant", 
            image: mock1
        },
        {
            title: "Blog Website",
            live: "https://rafayblogs.tech",
            source: "https://github.com/rafay99-epic/Blog-website",
            image: mock2
        },
        {
            title: "One Power Pvt Website",
            live: "https://onepower.tech/",
            source: "https://github.com/1-Power/1-Power-website",
            image: mock3
        },
        {
            title: "Cyber Attack Detection",
            live: "",
            source: "https://github.com/rafay99-epic/Cyber-Attack-Detection",
            image: mock4
        },
        {
            title: "Web Scrapper",
            live: "",
            source: "https://github.com/rafay99-epic/Web-Scrapper",
            image: mock5
        }
    ]
}