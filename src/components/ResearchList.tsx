import React from 'react';
import { Search } from 'lucide-react';

export function ResearchList() {
  return (
    <div className="bg-white rounded-lg shadow-sm mt-6">
      {/* Search and filters */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm đề tài..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="px-4 py-2 border rounded-lg bg-white">
            <option>Tất cả lĩnh vực</option>
            <option>Công nghệ thông tin</option>
            <option>Khoa học tự nhiên</option>
            <option>Khoa học xã hội</option>
          </select>
          <select className="px-4 py-2 border rounded-lg bg-white">
            <option>Tất cả trạng thái</option>
            <option>Đang thực hiện</option>
            <option>Hoàn thành</option>
            <option>Chờ duyệt</option>
          </select>
        </div>
      </div>

      {/* Research list */}
      <div className="divide-y">
        {[1, 2, 3].map((item) => (
          <ResearchItem key={item} />
        ))}
      </div>
    </div>
  );
}

function ResearchItem() {
  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900">
            Nghiên cứu ứng dụng trí tuệ nhân tạo trong giáo dục
          </h3>
          <div className="mt-1 text-sm text-gray-500">
            Mã đề tài: AI-EDU-2024-001 • Chủ nhiệm: TS. Nguyễn Văn A
          </div>
          <div className="mt-2 flex items-center space-x-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Đang thực hiện
            </span>
            <span className="text-sm text-gray-500">
              Thời gian: 01/2024 - 12/2024
            </span>
          </div>
        </div>
        <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}