// components/Navbar.tsx
import { Select } from './ui/Select'; // Adjust the import path as necessary

const Navbar = () => {
    return (
        <nav className="bg-green-400 p-4">
            <div className="flex justify-between items-center">
                <div className="text-slate-900 font-electrolize">
                    <h1>DAN MAGRO</h1>
                    <p>Blockchain Developer</p>
                </div>
                <SelectMenu />
            </div>
        </nav>
    );
};

export default Navbar;
