const NavBar = () => {
    return (
        <nav className="flex justify-center bg-blue-950 border-b border-slate-100">
            <div className="flex w-full max-w-7xl items-center justify-between px-8 py-5 text-white">
                <div>
                    Daniel Guerrero
                </div>
                <div className="hidden sm:flex justify-between w-[200px] text-zinc-300 items-center">
                    <div>About</div>
                    <div>Skills</div>
                    <div>Projects</div>
                </div>
                <div className="hidden justify-end sm:flex">
                    <div className="bg-blue-500 py-2 px-3 rounded-lg">Resume</div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;