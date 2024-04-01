import { ThemeProvider, createTheme } from '@mui/material'
import ReactDOM from 'react-dom'
import 'react-loading-skeleton/dist/skeleton.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import App from './App'
import { store } from './store/store'

const theme = createTheme({
	palette: {
		primary: {
			main: '#03B48A',
			light: '#08dbaa',
			dark: '#08a17d',
			contrastText: '#fff',
		},
	},
})

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
)
