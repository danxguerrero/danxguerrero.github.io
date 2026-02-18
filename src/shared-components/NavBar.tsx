const NavBar = () => {
    return (
        <nav className="flex justify-center bg-slate-900 border-b border-slate-800">
            <div className="flex w-full max-w-7xl items-center justify-between px-8 py-5 text-white">
                <div className="flex items-center">
                    <i className="fa-solid fa-user-astronaut mr-2 text-3xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-transparent bg-clip-text"></i>
                    Daniel Guerrero
                </div>
                <div className="hidden sm:flex justify-between w-[200px] text-slate-300 items-center">
                    <div className="hover:text-slate-50">About</div>
                    <div className="hover:text-slate-50">Skills</div>
                    <div className="hover:text-slate-50">Projects</div>
                </div>
                <div className="hidden justify-end sm:flex">
                    <div className="bg-cyan-500 py-2 px-3 rounded-lg text-slate-50 hover:border hover:border-slate-50">Resume</div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;