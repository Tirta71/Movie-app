import React from "react";

export default function SearchNavbar() {
  return (
    <div
      className="modal fade"
      id="search-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form>
            <input type="text" placeholder="Search here..." />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
