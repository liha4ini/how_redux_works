
import './App.css';
import Likes from "./components/Likes";
import store from "./redux/store";

function App() {
    return (
        <div className="App">
            <div className="wrap">
                {/*<Spin />*/}
                <div className="card">
                    {/*{error && (*/}
                    {/*    <div className='error-message'>*/}
                    {/*        {error}*/}
                    {/*    </div>*/}
                    )}
                    <div className="card-image">
                        <img src="https://avatars.mds.yandex.net/i?id=6614baec7e5c07b6912281ade43d344182e24ad1-8076535-images-thumbs&n=13&exp=1" alt="surfing"/>
                        {/*<Title />*/}
                        <Likes store={store} />
                    </div>
                    {/*<Comments />*/}
                </div>
            </div>
        </div>
    );
}

export default App;
