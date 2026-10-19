import { SquarePen, Trash2, Plus } from "lucide-react";

const posts = [
  { id: 1, title: "Laravel", author: "The Laravel", category: "Web Development", status: "published", date: "2025-07-19T02:00:00" },
  { id: 2, title: "React", author: "The React Js", category: "Programming", status: "archived", date: "2025-07-19T02:01:00" },
  { id: 3, title: "Python", author: "The Python", category: "Business", status: "draft", date: "2025-07-19T02:01:00" },
  { id: 4, title: "Web designer updated", author: "test updated", category: "Marketing", status: "published", date: "2025-07-19T23:49:00" },
];

const statusStyles = {
  published: "bg-green-600 text-white",
  archived: "bg-yellow-400 text-white",
  draft: "bg-red-600 text-white",
};

function formatDate(date) {
  return new Date(date).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-light text-gray-800">Post Management System</h1>
          <p className="text-gray-500 mt-2">Manage your posts efficiently</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
            <h2 className="font-medium text-gray-800">All Posts</h2>
            <button className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md">
              <Plus size={16} />
              Create New
            </button>
          </div>

          <div className="p-4 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-3 py-2 rounded-tl">#</th>
                  <th className="px-3 py-2">Title</th>
                  <th className="px-3 py-2">Author</th>
                  <th className="px-3 py-2">Category</th>
                  <th className="px-3 py-2">Status</th>
                  <th className="px-3 py-2">Date</th>
                  <th className="px-3 py-2 rounded-tr">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, index) => (
                  <tr key={post.id} className={index % 2 === 1 ? "bg-gray-100" : "bg-white"}>
                    <td className="px-3 py-3">{index + 1}</td>
                    <td className="px-3 py-3">
                      <a href="#" className="text-blue-600 underline hover:text-blue-800">
                        {post.title}
                      </a>
                    </td>
                    <td className="px-3 py-3">{post.author}</td>
                    <td className="px-3 py-3">{post.category}</td>
                    <td className="px-3 py-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded capitalize ${statusStyles[post.status]}`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-3 py-3">{formatDate(post.date)}</td>
                    <td className="px-3 py-3">
                      <div className="flex gap-1">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded">
                          <SquarePen size={14} />
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 text-white p-1.5 rounded">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}