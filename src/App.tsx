
import Navbar from './components/Navbar';



function App() {


  return (
    <div>
        <Navbar/>
        <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://placehold.co/1920x400')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-4xl font-bold">Are You a Supplier?</h1>
                <p className="text-2xl">Explore Matching Opportunities.</p>
                <div className="flex mt-4 space-x-2">
                    <input type="text" placeholder="Search your required service here" className="px-4 py-2 rounded-l-md"/>
                    <input type="text" placeholder="Search your desired location here" className="px-4 py-2"/>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-r-md">Search</button>
                </div>
                <p className="mt-2">Are you a buyer? <a href="#" className="underline">Click here if you are looking to post a requirements</a></p>
            </div>
        </section>
        <section className="py-12 text-center">
            <h2 className="text-3xl font-bold">Ready to dive into <span className="text-blue-600">HABOT</span>?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
            <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded">Sign up Today !</button>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded">Abu Dhabi</button>
                <button className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded">Dubai</button>
                <button className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded">Sharjah & Ajman</button>
                <button className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded">Fujairah</button>
                <button className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded">Ras Al Khaimah</button>
                <button className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded">Umm Al Quwain</button>
            </div>
        </section>
        <section className="py-12 bg-blue-900 text-white text-center">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    <img src="https://placehold.co/300x200" alt="Video thumbnail" className="w-full md:w-1/2"/>
                    <div className="mt-4 md:mt-0 md:ml-8 text-left">
                        <h3 className="text-2xl font-bold">Buyer</h3>
                        <ul className="mt-2 space-y-2">
                            <li>Post your requirements.</li>
                            <li>Sit back for multiple suppliers to contact you.</li>
                            <li>Choose among the suppliers based on the ratings and reviews.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-12 bg-blue-100 text-center">
            <h2 className="text-3xl font-bold">Let Suppliers <span className="text-red-500 underline">Find You</span></h2>
            <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded">Get Verified</button>
        </section>
        <section className="py-12 text-center">
            <h2 className="text-3xl font-bold">How it works?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <i className="fas fa-user-plus text-4xl text-blue-500"></i>
                    <p className="mt-2">Select Your Role and Sign Up</p>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fas fa-file-alt text-4xl text-blue-500"></i>
                    <p className="mt-2">Buyers Post Your Requirements</p>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fas fa-search text-4xl text-blue-500"></i>
                    <p className="mt-2">Review, Select, and Contact the Best Suppliers</p>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fas fa-file-signature text-4xl text-blue-500"></i>
                    <p className="mt-2">Suppliers Complete your profile and get notified for opportunities</p>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fas fa-comments text-4xl text-blue-500"></i>
                    <p className="mt-2">Contact to Buyers and Share your Quote for the service</p>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fas fa-handshake text-4xl text-blue-500"></i>
                    <p className="mt-2">Both the Parties can Connect and Make Business Leave a Feedback</p>
                </div>
            </div>
        </section>
        <footer className="py-8 bg-blue-900 text-white text-center">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="https://placehold.co/50x50" alt="HABOT logo" className="mr-2"/>
                        <span className="text-xl font-bold">HABOT</span>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400">About</a>
                        <a href="#" className="text-gray-400">FAQ</a>
                        <a href="#" className="text-gray-400">Privacy</a>
                        <a href="#" className="text-gray-400">Terms</a>
                        <a href="#" className="text-gray-400">Accessibility</a>
                    </div>
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="#" className="text-gray-400"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="text-gray-400"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-gray-400"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-gray-400"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    </div>
);
};
export default App
