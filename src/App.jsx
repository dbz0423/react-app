import "./App.css";

function App() {
  return (
    <div className="game-container">
      <div className="game-card">
        <div className="card-header">
          <h1>朱浩然</h1>
        </div>
        <div className="card-content">
          <div className="stats">
            <div className="stat-item">
              <span>职位</span>
              <span>前端开发工程师</span>
            </div>
            <div className="stat-item">
              <span>邮箱</span>
              <span>haoran.zhu@example.com</span>
            </div>
            <div className="stat-item">
              <span>电话</span>
              <span>138-1234-5678</span>
            </div>
            <div className="stat-item">
              <span>技能</span>
              <span>React, JavaScript, CSS</span>
            </div>
          </div>
          <div className="card-footer">
            <p>个人名片</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
