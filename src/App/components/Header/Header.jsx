const Header = ({ showModal }) => {
  return (
    <div className="navbar bg-dark mb-3">
      <div className="container-fluid">
        <div className="navbar-brand md-0 h1 text-success">Navbar</div>
        <button className="btn btn-outline-success" onClick={showModal}>
          Open Modal
        </button>
      </div>
    </div>
  );
};

export default Header;
