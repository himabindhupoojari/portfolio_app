// import { NavLink } from "react-router-dom";
import useTheme  from "@hooks/useTheme";
import { MdDarkMode, MdLightMode } from "react-icons/md"
import './Sidebar.scss';
import { NavLink } from "react-router-dom";

function Sidebar() {
    const arr = [
        {
            id: 0,
            link: "/",
            label: 'Home',
        },
        {
            id: 1,
            link: "about",
            label: 'About',
        },
        {
            id: 2,
            link: "portfolio",
            label: 'Portfolio',
        },
        {
            
            id: 3,
            link: "skills",
            label: 'Skills',
        },
        {
            
            id: 4,
            link: "contact",
            label: 'Contact',
        }
    ]

    const { theme, toggleTheme } = useTheme();


    return (
        <div className='header'>
            <div className='container header__container'>
                <div className='header__menu'>
                    {arr.map((item) => {
                        return (
                            <NavLink to={item.link} key={item.id} className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>{item.label}</NavLink>
                        )
                    })}
                </div>
                <button className='header__theme-btn'
                    onClick={toggleTheme}
                >
                    {theme === "light" ? (
                        <>
                            <MdDarkMode />
                        </>
                    ) : (
                        <>
                            <MdLightMode />
                        </>
                    )}
                </button>

            </div>
        </div>
    )
}

export default Sidebar