import { NavLink } from 'react-router-dom';

const Sidebar = ({links = []}) => {
  return (
    <aside className='sidebar'>
       {
        links.map((menu) => {
          return (
            <div title={menu.caption} key={menu.id}>
              <NavLink to={menu.path} onClick={menu.action}>
                {menu.icon}
              </NavLink>
            </div>
          )
        })
       }
    </aside>
  )
}

export default Sidebar