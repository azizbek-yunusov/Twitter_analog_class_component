import './appHeader.css'

const AppHeader = ({liked, allPost}) => {
  return(
    <div className="app-header">
      <h1>Azizbek Yunusov</h1>
      <h2>{allPost} post, like {liked}</h2>
    </div>
  )
}

export default AppHeader