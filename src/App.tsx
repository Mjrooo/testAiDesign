/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, User, Building2, BarChart3, FileText, Target, Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-[846px] bg-white rounded-3xl shadow-2xl shadow-zinc-200/50 overflow-hidden flex flex-row border border-zinc-100"
      >
        {/* Left Column: Image + Secondary Info */}
        <div className="w-[280px] bg-zinc-50/50 border-r border-zinc-100 flex flex-col shrink-0">
          <div className="relative h-44 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/training/600/400" 
              alt="Course background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="px-2.5 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-md shadow-lg shadow-blue-600/30">
                Active
              </span>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] border-b border-zinc-200 pb-2">课程详情</h3>
              <div className="space-y-4">
                <SidebarItem 
                  icon={<Building2 className="w-4 h-4 text-amber-500" />} 
                  label="所属部门" 
                  value="若依科技" 
                />
                <SidebarItem 
                  icon={<BarChart3 className="w-4 h-4 text-purple-500" />} 
                  label="培训级别" 
                  value="公司级" 
                />
                <SidebarItem 
                  icon={<Target className="w-4 h-4 text-cyan-500" />} 
                  label="培训类别" 
                  value="入厂培训" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Main Content */}
        <div className="flex-1 p-8 flex flex-col min-w-0">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-zinc-900 mb-3 tracking-tight">3年级班级</h1>
            <p className="text-zinc-500 text-sm leading-relaxed">
              针对一线作业人员的冬季专项提升计划，通过模拟演练与理论考核，全面提升特殊作业环境下的安全防御能力与操作规范。
            </p>
          </div>

          {/* Info Row - Single line display */}
          <div className="flex items-center gap-x-8 mb-10">
            <InfoItem 
              icon={<Calendar className="w-5 h-5 text-blue-500" />} 
              label="开班时间" 
              value="2026-03-10" 
            />
            <div className="w-px h-8 bg-zinc-100" />
            <InfoItem 
              icon={<User className="w-5 h-5 text-emerald-500" />} 
              label="培训讲师" 
              value="讲师1" 
            />
            <div className="w-px h-8 bg-zinc-100" />
            <InfoItem 
              icon={<FileText className="w-5 h-5 text-rose-500" />} 
              label="考核方式" 
              value="书面考试" 
            />
          </div>

          {/* Footer: Progress and Action */}
          <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">学习进度</span>
                <span className="text-xs font-black text-blue-600">0%</span>
              </div>
              <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "0%" }}
                  className="h-full bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.3)]"
                />
              </div>
            </div>

            <button className="group relative px-8 py-3 bg-zinc-900 hover:bg-black text-white rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-zinc-900/10 active:scale-95 shrink-0">
              <span className="text-sm tracking-wide">开始学习</span>
              <Play className="w-3.5 h-3.5 fill-current text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SidebarItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-1.5 bg-white rounded-lg border border-zinc-100 shadow-sm shrink-0">
        {icon}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">{label}</span>
        <span className="text-xs font-bold text-zinc-700 truncate">{value}</span>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center border border-zinc-100 group-hover:bg-white group-hover:shadow-md transition-all duration-300 shrink-0">
        {icon}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.15em] mb-1">{label}</span>
        <span className="text-base font-bold text-zinc-800 truncate">{value}</span>
      </div>
    </div>
  );
}

