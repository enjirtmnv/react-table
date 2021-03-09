import './App.css';
import { Provider } from "react-redux";
import Table from './components/Table';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className={'container mt-5'}>
                <Table />
            </div>
        </Provider>
    );
}

export default App;
