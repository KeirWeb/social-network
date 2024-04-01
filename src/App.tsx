import { FC } from 'react'
import './assets/scss/App.scss'
import GlobalErrorContainer from './components/GlobalError/GlobalErrorContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Main from './components/Main'

const App: FC = () => {
	return (
		<>
			<GlobalErrorContainer />
			<div className='wrapper'>
				<HeaderContainer />
				<Main />
			</div>
		</>
	)
}

export default App
