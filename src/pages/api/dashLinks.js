const dashData = [
    { name: 'Profile', icon: '/icons/person.svg', url: '/attendee/profile' },
    { name: 'Calender', icon: '/icons/calender_.svg', url: '/attendee/calender' },
    { name: 'Chat', icon: '/icons/chat.svg', url: '/attendee/chat' },
    { name: 'Home', icon: '/icons/homeb.svg', url: '/' },
    { name: 'About', icon: '/icons/aboutb.svg', url: '/about' },
    { name: 'Events', icon: '/icons/eventb.svg', url: '/eventInfo' },
    { name: 'Contact', icon: '/icons/callb.svg', url: '/contact' }
];

export default function handler(req, res) {
    res.status(200).json(dashData);
}
