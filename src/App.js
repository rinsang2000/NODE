import logo from './logo.svg';
import './App.css';
const me= {
  name: "Sang",
  age: 20
}

export default function App(props){
  const showfromList =(list) => {
    return list.map(item =>
      <div>dsada</div>)
  }
  return(
    <div className="layout">
      <div className="layout_left">
        <div className="avatar">
          <img src="https://baominh.tech/wp-content/uploads/2020/09/nhan-dan-facebook.png"></img>
          <div className="intro_basic">
            <h2>Hello</h2>
            <h3>My name {me.name}</h3>
          </div>
        </div>
      </div>
      <div className="layout_right">
        <div className="intro">
          <h3>introducing ing youself self</h3>
          <h3>introducing with text boxes</h3>
        </div>
        <div className="line">
          <div className="line-center" ></div>
          <div className="cicle left" ></div>
          <div className="cicle right" ></div>
        </div>
        <div className="texboxes-container">
          <div className="item-container">
            <div className="item-content">
              <h3>Text here1</h3>
              <p>Lorem ipsum dolor sit amet</p>
              </div>
            
                    
          </div>
          <div className="item-container">
            <div className="item-content">
              <h3>Text here1</h3>
              <p>Lorem ipsum dolor sit amet</p>
              </div>
            
                    
          </div>
          <div className="item-container">
            <div className="item-content">
              <h3>Text here1</h3>
              <p>Lorem ipsum dolor sit amet</p>
              </div>
            
                    
          </div>
          <div className="item-container">
            <div className="item-content">
              <h3>Text here1</h3>
              <p>Lorem ipsum dolor sit amet</p>
              </div>
            
                    
          </div>
        </div>
      </div>
    </div>
  )
}
