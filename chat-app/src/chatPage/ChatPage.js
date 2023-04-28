import "./ChatPage.css"
import { Link } from 'react-router-dom';

function ChatPage(props){
    return (
        <>
        <div className="row">
          <div className="col" id="logout-btn">
          <Link to="/login">
            <button
              className="btn btn-danger"
            >
              Logout
            </button>
            </Link>
          </div>
      </div>
      <div className="row justify-content-center">
        <div className="col col-4" id="contact-menu">
          <div className="card">
            <div className="card-header">
              <span className="contact-menu-image">
                <img className="profileimg" src="nymar.jpg" alt="image" />
              </span>
              <span className="contact-menu-name" id="top-users-head"> Users </span>
              <span id="add-user-span">
                <svg
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  className="bi bi-person-add"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                  />
                  <path
                    d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
                  />
                </svg>
                <div
                  className="modal fade"
                  id="exampleModalCenter"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">
                          Add new contact
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Contact's identifier"
                        />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item chosen">
                  <div className="contact-menu-li">
                    <span className="contact-menu-image">
                      <img className="profileimg" src="ronaldo.jpg" alt="image" />
                    </span>
                    <span className="contact-menu-name"> John </span>
                    <span className="contact-menu-date"> 20.20.2020 15:56 </span>
                    <div className="contact-menu-last-message">ma matzav?</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="contact-menu-li">
                    <span className="contact-menu-image">
                      <img className="profileimg" src="messi.jpg" alt="image" />
                    </span>
                    <span className="contact-menu-name"> Jane </span>
                    <span className="contact-menu-date"> 20.20.2020 15:56 </span>
                    <div className="contact-menu-last-message">ma omer?</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col col-8" id="message-window">
          <div className="card">
            <div className="card-header">
              <img className="profileimg" src="ronaldo.jpg" alt="image" />
              <span className="pad">John</span>
            </div>
            <div className="chat">
              <div className="mine messages">
                <div className="message">ma omer gever</div>
              </div>
              <div className="yours messages">
                <div className="message">Hey!</div>
                <div className="message">ata shomea?</div>
                <div className="message">ba le macabi haifa?</div>
              </div>
              <div className="mine messages">
                <div className="message">barur ahi!</div>
                <div className="message">
                  mevi ohel? o she ekah mafrum shel savta
                </div>
              </div>
            </div>
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message..."
            />
            <div>
              <button className="btn btn-primary" type="button">Send</button>
            </div>
          </div>
        </div>
      </div>
      
        </>
    );
}
export default ChatPage;