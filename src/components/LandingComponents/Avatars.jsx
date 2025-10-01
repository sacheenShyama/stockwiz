import React from "react";

const Avatars = () => {
  return (
    <div className="flex -space-x-1 overflow-hidden bg-transparent">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block size-6 rounded-full "
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block size-6 rounded-full "
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        className="inline-block size-6 rounded-full "
      />
    </div>
  );
};

export default Avatars;
