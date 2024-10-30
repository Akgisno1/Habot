

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex items-center">
                <img src="https://placehold.co/50x50" alt="HABOT logo" className="mr-2"/>
                <span className="text-xl font-bold">HABOT</span>
            </div>
            <nav className="flex items-center space-x-4">
                <a href="#" className="text-gray-600">Find Suppliers</a>
                <a href="#" className="text-gray-600">Find Service Tags <i className="fas fa-chevron-down"></i></a>
                <button className="px-4 py-2 border border-green-500 text-green-500 rounded">Login / Sign Up</button>
            </nav>
        </header>
  )
}

export default Navbar