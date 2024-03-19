import React from 'react';

const Index = () => {
  return (
    <div className="flex">
      {/* Left Dashboard */}
      <div className="w-1/4 bg-gray-200 p-4">
        <ul>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Dashboard Link 1</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Dashboard Link 2</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Dashboard Link 3</a></li>
        </ul>
      </div>

      {/* Main Content (Posts) */}
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
       
        <div className="post">
          <h2 className="text-xl font-semibold mb-2">Post Title</h2>
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non feugiat massa, id consequat nisi.</p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
     
      </div>
    </div>
  );
};

export default Index;