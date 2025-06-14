export default function TopBar() {
  return (
    <div className="py-2 px-4 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <span className="d-inline-block mr-3">
              <strong>Have a question?</strong>
            </span>
            <a href="tel:1020123456" className="d-inline-block mr-3">
              <span className="icon-phone mr-2"></span> 10 20 123 456
            </a>
            <a href="mailto:info@nurture.com" className="d-inline-block">
              <span className="icon-envelope mr-2"></span> info@nurture.com
            </a>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <a href="#" className="btn btn-outline-primary btn-sm mr-2">
              Log In
            </a>
            <a href="#" className="btn btn-primary btn-sm">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}