import { NavLink } from 'react-router-dom'
import s from './Sidebar.module.scss'
const Sidebar = () => {
	return (
		<aside className={s.sidebar}>
			<ul>
				<li className={s.sidebar__item}>
					<NavLink activeClassName={s.active} to='/profile' className={s.sidebar__link}>
						Profile
					</NavLink>
				</li>
				<li className={s.sidebar__item}>
					<NavLink activeClassName={s.active} to='/dialogs' className={s.sidebar__link}>
						Messages
					</NavLink>
				</li>
				<li className={s.sidebar__item}>
					<NavLink activeClassName={s.active} to='/users' className={s.sidebar__link}>
						Users
					</NavLink>
				</li>
				<li className={s.sidebar__item}>
					<a href='#' className={s.sidebar__link}>
						News
					</a>
				</li>
				<li className={s.sidebar__item}>
					<a href='#' className={s.sidebar__link}>
						Music
					</a>
				</li>
				<li className={s.sidebar__item}>
					<a href='#' className={s.sidebar__link}>
						Settings
					</a>
				</li>
			</ul>
		</aside>
	)
}

export default Sidebar
