import '../styles/video.css';
import '../styles/header.css';
import '../styles/general.css';
import '../styles/sidebar.css';
function App() {
  return (
    <div>
     
      <div className="header">
        <div className="header-left">
          <img className="hamburger" src="/icons/hamburger-menu.svg" alt="menu" />
          <img className="youtube-logo" src="/icons/655462698cf771fc41bd5f1a7e56fa3d0d54271de9fee055ac6c2b0592b32bdb_122x56.webp" alt="YouTube logo" />
        </div>
        <div className="header-middle">
          <div className="search-box">
            <input className="search" type="text" placeholder="Search" />
          </div>
          <div className="div-search">
            <button className="search-button"><img src="/icons/search.svg" style={{height: 24, width: 24}} alt="search" /></button>
          </div>
          <button className="voice-search"><img src="/icons/voice-search-icon.svg" style={{height: 24, width: 24}} alt="voice search" /></button>
        </div>
        <div className="header-right">
          <button className="create">
            <img src="/icons/add.jpg" style={{width: 17, height: 17}} alt="create" />Create
          </button>
          <button className="bell">
            <img src="/icons/notification.jpg" style={{width: 24, height: 24}} alt="notifications" />
          </button>
          <img className="me" src="/Channelpics/me.jpg" alt="me" />
        </div>
      </div>

      
      <div className="sidebar">
        
        <div className="first-sidebar">
          <button className="fi-button">
            <div className="fi-si">
              <img src="/icons/home.svg" className="fi-butt-img" alt="Home" />
              <span className="fi-butt-details" style={{fontWeight: 500}}>Home</span>
            </div>
          </button>
          <button className="fi-button">
            <div className="fi-si">
              <img src="/icons/shorts.svg" className="fi-butt-img" alt="Shorts" />
              <p className="fi-butt-details">Shorts</p>
            </div>
          </button>
          <button className="fi-button">
            <div className="fi-si" style={{paddingBottom: 12, borderBottom: '1px solid rgb(240,240,240)'}}>
              <img src="/icons/subscriptions.svg" className="fi-butt-img" alt="Subscriptions" />
              <p className="fi-butt-details">Subscriptions</p>
            </div>
          </button>
        </div>
      
        <div className="second-sidebar">
          <button className="fi-button">
            <div style={{display:'flex', paddingLeft: 10}}>
              <span style={{fontSize: 'medium', fontWeight:500, fontFamily: 'Roboto,sans-serif'}}>You</span>
              <img src="/icons/greater.svg" style={{paddingLeft: 7}} alt="greater" />
            </div>
          </button>
          <button className="fi-button">
            <div className="fi-si">
              <img src="/icons/his.svg" className="fi-butt-img" alt="History" />
              <span className="fi-butt-details">History</span>
            </div>
          </button>
          <button className="fi-button">
            <div className="fi-si">
              <img src="/icons/playlist.svg" className="fi-butt-img" alt="Playlists" />
              <span className="fi-butt-details">Playlists</span>
            </div>
          </button>
          <button className="fi-button">
            <div className="fi-si">
              <img src="/icons/watch-later.svg" className="fi-butt-img" alt="Watch later" />
              <span className="fi-butt-details">Watch later</span>
            </div>
          </button>
          <button className="fi-button" style={{paddingBottom: 50, borderBottom: '1px solid rgb(240,240,240)'}}>
            <div className="fi-si">
              <img src="/icons/liked.svg" className="fi-butt-img" alt="Liked videos" />
              <span className="fi-butt-details">Liked videos</span>
            </div>
          </button>
        </div>
        
        <div className="third-sidebar">
          <button className="fi-button">
            <div style={{display:'flex', paddingLeft: 10}}>
              <span style={{fontSize: 'medium', fontWeight:500, fontFamily: 'Roboto,sans-serif'}}>Explore</span>
            </div>
          </button>
          <button className="fi-button"><div className="fi-si"><img src="/icons/trending.svg" className="fi-butt-img" alt="Trending" /><span className="fi-butt-details">Trending</span></div></button>
          <button className="fi-button"><div className="fi-si"><img src="/icons/shopping.svg" className="fi-butt-img" alt="Shopping" /><span className="fi-butt-details">Shopping</span></div></button>
          <button className="fi-button"><div className="fi-si"><img src="/icons/music.svg" className="fi-butt-img" alt="Music" /><span className="fi-butt-details">Music</span></div></button>
          <button className="fi-button"><div className="fi-si"><img src="/icons/movies.svg" className="fi-butt-img" alt="Movies" /><span className="fi-butt-details">Movies</span></div></button>
          <button className="fi-button"><div className="fi-si"><img src="/icons/live.svg" className="fi-butt-img" alt="Live" /><span className="fi-butt-details">Live</span></div></button>
          <button className="fi-button"><div className="fi-si"><img src="/icons/gaming.svg" className="fi-butt-img" alt="Gaming" /><span className="fi-butt-details">Gaming</span></div></button>
          <button className="fi-button"><div className="fi-si"><img src="/icons/news.svg" className="fi-butt-img" alt="News" /><span className="fi-butt-details">News</span></div></button>
          <button className="fi-button"><div className="fi-si"><img src="/icons/sports.svg" className="fi-butt-img" alt="Sports" /><span className="fi-butt-details">Sports</span></div></button>
          <button className="fi-button"><div className="fi-si"><img src="/icons/courses.svg" className="fi-butt-img" alt="Courses" /><span className="fi-butt-details">Courses</span></div></button>
          <button className="fi-button"><div className="fi-si"><img src="/icons/fas.svg" className="fi-butt-img" alt="Fashion & Beauty" /><span className="fi-butt-details">Fashion & Beauty</span></div></button>
          <button className="fi-button" style={{paddingBottom: 50, borderBottom: '1px solid rgb(240,240,240)'}}><div className="fi-si"><img src="/icons/podcast.svg" className="fi-butt-img" alt="Podcasts" /><span className="fi-butt-details">Podcasts</span></div></button>
        </div>
       
        <div className="fourth-sidebar">
          <button className="fi-button">
            <div style={{display:'flex', paddingLeft: 10}}>
              <span style={{fontSize: 'medium', fontWeight:500, fontFamily: 'Roboto,sans-serif'}}>More from YouTube</span>
            </div>
          </button>
          <button className="fi-button"><div className="fi-si"><img src="/icons/youpre.svg" className="fi-butt-img" alt="YouTube Premium" /><span className="fi-butt-details">YouTube Premium</span></div></button>
          <button className="fi-button"><div className="fi-si"><img src="/icons/youmus.svg" className="fi-butt-img" alt="YouTube Music" /><span className="fi-butt-details">YouTube Music</span></div></button>
          <button className="fi-button" style={{paddingBottom: 50, borderBottom: '1px solid rgb(240,240,240)'}}><div className="fi-si"><img src="/icons/youki.svg" className="fi-butt-img" alt="YouTube Kids" /><span className="fi-butt-details">YouTube Kids</span></div></button>
        </div>
       
        <div className="fifth-sidebar">
          <button className="fi-button"><div className="fi-si"><img src="/icons/setting.svg" className="fi-butt-img" alt="Settings" /><span className="fi-butt-details">Settings</span></div></button>
          <button className="fi-button"><div className="fi-si"><img src="/icons/report.svg" className="fi-butt-img" alt="Report history" /><span className="fi-butt-details">Report history</span></div></button>
          <button className="fi-button"><div className="fi-si"><img src="/icons/help.svg" className="fi-butt-img" alt="Help" /><span className="fi-butt-details">Help</span></div></button>
          <button className="fi-button" style={{paddingBottom: 50, borderBottom: '1px solid rgb(240,240,240)'}}><div className="fi-si"><img src="/icons/feedback.svg" className="fi-butt-img" alt="Send feedback" /><span className="fi-butt-details">Send feedback</span></div></button>
        </div>
      </div>

      
      <div className="vid-grid">
        
  <div className="video-box" id="video1" onClick={() => window.location.href = "https://www.youtube.com/watch?v=ebtBVb0Vrcs"}>
          <div className="thumbnail-row">
            <img className="thumbnail" src="/Images/kya-tujhe.jpg" alt="Kya Tujhe Ab" />
            <div className="video-time">4:22</div>
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/Tseries.jpg" alt="T-Series" />
            </div>
            <div className="vid-details">
              <p className="vid-title">Kya Tujhe Ab FULL VIDEO SONG|SANAM RE</p>
              <p className="vid-author">T-Series <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">26M views &#183; 9 years ago</p>
            </div>
          </div>
        </div>
        {/* Video 2 */}
  <div className="video-box" id="video2" onClick={() => window.location.href = "https://www.youtube.com/watch?v=QmfyWw3Cth8&t=2s"}>
          <div className="thumbnail-row">
            <div className="video-time" style={{right: 11, width: 57}}>2:03:06</div>
            <img className="thumbnail" src="/Images/JS%20interview.jpg" alt="JS Interview" />
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/JS profile.jpg" alt="JS Profile" />
            </div>
            <div className="vid-details">
              <p className="vid-title">2.5 Years Experienced Best JavaScript Interview</p>
              <p className="vid-author">Anurag Singh ProCodrr <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">402K views &#183; 10 months ago</p>
            </div>
          </div>
        </div>
        {/* Video 3 */}
  <div className="video-box" id="video3" onClick={() => window.location.href = "https://www.youtube.com/watch?v=W5LPcpIRLzs&t=12s"}>
          <div className="thumbnail-row">
            <img className="thumbnail" src="/Images/Asmr-Prog.jpg" alt="ASMR Prog" />
            <div className="video-time" style={{right: 11, width: 57}}>1:29:07</div>
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/Asmr.jpg" alt="Asmr" />
            </div>
            <div className="vid-details">
              <p className="vid-title">ASMR Programming - Coding IOS (IPhone) Dynamic Music - No Talking</p>
              <p className="vid-author">AsmrProg <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">4.4M views &#183; 2 years ago</p>
            </div>
          </div>
        </div>
        {/* Video 4 */}
  <div className="video-box" id="video4" onClick={() => window.location.href = "https://www.youtube.com/watch?v=YZFt0yXFJBc&t=26s"}>
          <div className="thumbnail-row">
            <div className="video-time" style={{width: 45, paddingLeft: 7}}>58:44</div>
            <img className="thumbnail" src="/Images/Obs-samay.jpg" alt="Obs Samay" />
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/samay.jpg" alt="Samay" />
            </div>
            <div className="vid-details">
              <p className="vid-title">HOW TO LIVE STREAM CRASH COURSE ft. My Gym Trainer Pranit</p>
              <p className="vid-author">Samay Raina <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">311K views &#183; 3 years ago</p>
            </div>
          </div>
        </div>
        {/* Video 5 */}
  <div className="video-box" id="video5" onClick={() => window.location.href = "https://www.youtube.com/watch?v=JyTylWtvLRA&t=13s"}>
          <div className="thumbnail-row">
            <div className="video-time" style={{width: 45, paddingLeft: 7}}>10:58</div>
            <img className="thumbnail" src="/Images/tatay%20pr.jpg" alt="Tatay Pr" />
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/tatay.jpg" alt="Tatay" />
            </div>
            <div className="vid-details">
              <p className="vid-title">Transforming 1.4m Smallest Room into DREAM GAMING ROOM SETUP</p>
              <p className="vid-author">DIY Tatay Dan <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">17M views &#183; 3 years ago</p>
            </div>
          </div>
        </div>
        {/* Video 6 */}
  <div className="video-box" id="video6" onClick={() => window.location.href = "https://www.youtube.com/watch?v=8xwcT7dHFMI"}>
          <div className="thumbnail-row">
            <img className="thumbnail" src="/Images/Gaming.jpg" alt="Gaming" />
            <div className="video-time" style={{width: 45, paddingLeft: 7}}>31:29</div>
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/Tyllusion.jpg" alt="Tyllusion" />
            </div>
            <div className="vid-details">
              <p className="vid-title">I Built My DREAM PC</p>
              <p className="vid-author">Tyllusion <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">203K views &#183; 2 months ago</p>
            </div>
          </div>
        </div>
        {/* Video 7 */}
  <div className="video-box" id="video7" onClick={() => window.location.href = "https://www.youtube.com/watch?v=S347RCT9LCA&t=8s"}>
          <div className="thumbnail-row">
            <img className="thumbnail" src="/Images/bengali-lofi.jpg" alt="Bengali Lofi" />
            <div className="video-time" style={{width: 45, paddingLeft: 7}}>36:31</div>
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/svf.jpg" alt="SVF" />
            </div>
            <div className="vid-details">
              <p className="vid-title">Bengali Lofi Jukebox Vol-5 | Bengali Lofi Songs | Lofi Hits</p>
              <p className="vid-author">SVF Music <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">551K views &#183; 1 years ago</p>
            </div>
          </div>
        </div>
        {/* Video 8 */}
  <div className="video-box" id="video8" onClick={() => window.location.href = "https://www.youtube.com/watch?v=_EKeIyGa-Bg"}>
          <div className="thumbnail-row">
            <img className="thumbnail" src="/Images/gaming-setup.jpg" alt="Gaming Setup" />
            <div className="video-time" style={{width: 45, paddingLeft: 7}}>34:07</div>
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/Anmol.jpg" alt="Anmol" />
            </div>
            <div className="vid-details">
              <p className="vid-title">My 2025 Gaming & Editing Desk Setup Tour</p>
              <p className="vid-author">Anmol Jaiswal <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">466K views &#183; 4 months ago</p>
            </div>
          </div>
        </div>
        {/* Video 9 */}
  <div className="video-box" id="video9" onClick={() => window.location.href = "https://www.youtube.com/watch?v=oDfK3RfSlKk"}>
          <div className="thumbnail-row">
            <img className="thumbnail" src="/Images/abhi.jpg" alt="Abhi" />
            <div className="video-time">4:31</div>
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/saregama.jpg" alt="Saregama" />
            </div>
            <div className="vid-details">
              <p className="vid-title">Abhi Na Jao Chhod Kar | Audio Song</p>
              <p className="vid-author">Saregama Music <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">4.5M views &#183; 1 year ago</p>
            </div>
          </div>
        </div>
        {/* Video 10 */}
  <div className="video-box" id="video10" onClick={() => window.location.href = "https://www.youtube.com/watch?v=rwxRoYzwkyM"}>
          <div className="thumbnail-row">
            <img className="thumbnail" src="/Images/harry.jpg" alt="Harry" />
            <div className="video-time" style={{width: 45, paddingLeft: 7}}>37:32</div>
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/codewithharry.jpg" alt="CodeWithHarry" />
            </div>
            <div className="vid-details">
              <p className="vid-title">Cursor AI Tutorial - My Personal Tips & Tricks (AI Code Editor)</p>
              <p className="vid-author">CodeWithHarry <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">349k views &#183; 2 weeks ago</p>
            </div>
          </div>
        </div>
        {/* Video 11 */}
  <div className="video-box" id="video11" onClick={() => window.location.href = "https://www.youtube.com/watch?v=6cOy5xn8e6E"}>
          <div className="thumbnail-row">
            <img className="thumbnail" src="/Images/lego.jpg" alt="Lego" />
            <div className="video-time">9:26</div>
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/Brick.jpg" alt="Brick" />
            </div>
            <div className="vid-details">
              <p className="vid-title">Making a LEGO Car Cross Broken Bridges...</p>
              <p className="vid-author">Brick Machines <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">11M views &#183; 8 months ago</p>
            </div>
          </div>
        </div>
        {/* Video 12 */}
  <div className="video-box" id="video12" onClick={() => window.location.href = "https://www.youtube.com/watch?v=2TzgQ5VNhvY"}>
          <div className="thumbnail-row">
            <img className="thumbnail" src="/Images/nasa.jpg" alt="Nasa" />
            <div className="video-time" style={{width: 45, paddingLeft: 7}}>15:48</div>
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/kxng.jpg" alt="Kxng" />
            </div>
            <div className="vid-details">
              <p className="vid-title">Building A NASA PC! (1293 FPS)</p>
              <p className="vid-author">Kxng <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">1.8M views &#183; 1 year ago</p>
            </div>
          </div>
        </div>
        {/* Video 13 */}
  <div className="video-box" id="video13" onClick={() => window.location.href = "https://www.youtube.com/watch?v=h1_Dbj696b4"}>
          <div className="thumbnail-row">
            <img className="thumbnail" src="/Images/white-pc.jpg" alt="White PC" />
            <div className="video-time">7:44</div>
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/MZ.jpg" alt="MZ" />
            </div>
            <div className="vid-details">
              <p className="vid-title">I9 13900K +990 PRO 2T*3 + IGAME 4090 Vulcan W OC</p>
              <p className="vid-author">MZ COMPUTER <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">1.6M views &#183; 1 year ago</p>
            </div>
          </div>
        </div>
        {/* Video 14 */}
  <div className="video-box" id="video14" onClick={() => window.location.href = "https://www.youtube.com/watch?v=NKCKtufeg68"}>
          <div className="thumbnail-row">
            <img className="thumbnail" src="/Images/speaker.jpg" alt="Speaker" />
            <div className="video-time" style={{width: 45, paddingLeft: 7}}>21:50</div>
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/Dtek.jpg" alt="Dtek" />
            </div>
            <div className="vid-details">
              <p className="vid-title">DIY: Portable Bluetooth Android Speaker 4X</p>
              <p className="vid-author">DTeK <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">4.9M views &#183; 10 months ago</p>
            </div>
          </div>
        </div>
        {/* Video 15 */}
  <div className="video-box" id="video15" onClick={() => window.location.href = "https://www.youtube.com/watch?v=UC63-kScXwI"}>
          <div className="thumbnail-row">
            <img className="thumbnail" src="/Images/pacify-samay.jpg" alt="Pacify Samay" />
            <div className="video-time" style={{right: 11, width: 57}}>1:29:07</div>
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/samay.jpg" alt="Samay" />
            </div>
            <div className="vid-details">
              <p className="vid-title">PACIFY 2 ft. CHOWKDI</p>
              <p className="vid-author">Samay Raina <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">884K views &#183; Streamed 4 years ago</p>
            </div>
          </div>
        </div>
        {/* Video 16 */}
  <div className="video-box" id="video16" onClick={() => window.location.href = "https://www.youtube.com/watch?v=tLLFQ1arpYQ&t=10s"}>
          <div className="thumbnail-row">
            <img className="thumbnail" src="/Images/pc-builder.jpg" alt="PC Builder" />
            <div className="video-time" style={{width: 45, paddingLeft: 7}}>39:26</div>
          </div>
          <div className="vid-info-grid">
            <div className="chan-pics">
              <img className="profile-pic" src="/Channelpics/pcbuilder.jpg" alt="PC Builder" />
            </div>
            <div className="vid-details">
              <p className="vid-title">21K BDT Mikrotik PC Build 2024</p>
              <p className="vid-author">PC Builder Bangladesh <i className="fa-solid fa-check-circle"></i></p>
              <p className="vid-stats">149K views &#183; 4 months ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
