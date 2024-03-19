const linksData = [
    { name: 'Home', icon: '/icons/home.svg', url: '/' },
    { name: 'About', icon: '/icons/about.svg', url: '/about' },
    { name: 'Event', icon: '/icons/event.svg', url: '/eventInfo' },
    { name: 'Contact', icon: '/icons/call.svg', url: '/contact' }
];

export default function handler(req, res) {
    res.status(200).json(linksData);
}
