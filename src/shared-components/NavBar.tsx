const NavBar = () => {
    return (
        <nav className="flex justify-center bg-blue-950 border-b border-slate-200">
            <div className="flex w-full max-w-7xl items-center justify-between px-8 py-5 text-white">
                Daniel Guerrero
                <div className="hidden flex-1 justify-end sm:flex">
                    <div className="flex justify-between w-[300px] text-zinc-300">
                        <div>About</div>
                        <div>Skills</div>
                        <div>Projects</div>
                        <div>Resume</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;