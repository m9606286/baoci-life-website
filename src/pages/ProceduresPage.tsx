import React, { useEffect } from 'react';
import Procedures from '@/components/Procedures';

export default function ProceduresPage() {
  // 進入頁面時自動捲動至頂端
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-ivory-100">
      <Procedures />
    </main>
  );
}
