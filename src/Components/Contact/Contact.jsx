import { Helmet } from 'react-helmet';
const Contact = () => {
    return (
        
        <div className="max-w-4xl mx-auto p-8 mt-10 bg-fuchsia-100 shadow-lg rounded-lg">
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center text-purple-600">Contact Us</h2>
            <p className="text-center text-gray-700 mt-2">We had love to hear from you! Reach out with any questions or feedback.</p>

            <form className="mt-6">
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Name</label>
                    <input type="text" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your Name" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Email</label>
                    <input type="email" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your Email" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Message</label>
                    <textarea className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your Message" rows="4"></textarea>
                </div>

                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
