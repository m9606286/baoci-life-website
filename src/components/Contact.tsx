import React, { useState } from 'react';
import { MapPin, Send, CheckCircle2 } from 'lucide-react';

const taiwanLocations = [
  '基隆市', '台北市', '新北市', '桃園市', '新竹市', '新竹縣',
  '苗栗縣', '台中市', '彰化縣', '南投縣', '雲林縣', '嘉義市',
  '嘉義縣', '台南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣',
  '台東縣', '澎湖縣', '金門縣', '連江縣'
];

const serviceOptions = [
  '商品諮詢',
  '手續查詢',
  '繳款查詢',
  '禮儀服務',
  '陵園服務',
  '意見反映'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '', // 電子郵件 (選填)
    location: '', // 居住地點 (無預設)
    service: '商品諮詢',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ⚠️ 請將引號內的網址替換為您剛剛複製的 GAS 網址
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzBIEBCjy4KlujkBQeROvmFJblaeKucJCGuUUe4HL7p_7h6f_bC4xhEqdER6dtjQxVb/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.location) {
      alert('請選擇您的居住地點！');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.result === 'success') {
        setSubmitted(true);
      } else {
        alert('表單送出失敗，請稍後再試或直接撥打免付費專線！');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('網路連線異常，請稍後再試！');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 shadow-sm">
          <CheckCircle2 className="w-16 h-16 text-gold-600 mx-auto mb-4" />
          <h3 className="text-2xl font-serif-tc font-bold text-ink-900 mb-2">感謝您的填寫</h3>
          <p className="text-ink-600 mb-6">我們已收到您的諮詢需求，將會盡快由專人與您聯繫。</p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', phone: '', email: '', location: '', service: '商品諮詢', message: '' });
            }}
            className="bg-ink-900 text-stone-100 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-ink-800 transition-colors"
          >
            填寫其他諮詢
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif-tc font-bold text-ink-900 mb-3">聯絡我們</h2>
          <p className="text-ink-600">填寫下方表單，將有專人為您提供尊榮、溫暖的諮詢服務。</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 姓名 */}
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-2">您的姓名 *</label>
              <input
                type="text"
                required
                placeholder="請輸入姓名"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
              />
            </div>

            {/* 電話 */}
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-2">聯絡電話 *</label>
              <input
                type="tel"
                required
                placeholder="請輸入電話號碼"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 電子郵件 (選填) */}
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-2">
                電子郵件 <span className="text-stone-400 font-normal">(選填)</span>
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
              />
            </div>

            {/* 居住地點 (必填，無預設) */}
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-2">居住地點 *</label>
              <div className="relative">
                <select
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className={`w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all bg-white appearance-none cursor-pointer ${
                    !formData.location ? 'text-stone-400' : 'text-ink-900'
                  }`}
                >
                  <option value="" disabled hidden>
                    -- 請選擇縣市 --
                  </option>
                  {taiwanLocations.map((loc) => (
                    <option key={loc} value={loc} className="text-ink-900">
                      {loc}
                    </option>
                  ))}
                </select>
                <MapPin className="w-5 h-5 text-stone-400 absolute right-4 top-3.5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* 需求服務類型 */}
          <div>
            <label className="block text-sm font-medium text-ink-700 mb-2">需求服務類型 *</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all bg-white cursor-pointer"
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* 留言內容 */}
          <div>
            <label className="block text-sm font-medium text-ink-700 mb-2">諮詢內容 / 需求留言</label>
            <textarea
              rows={4}
              placeholder="請簡述您的需求或想詢問的問題..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all resize-none"
            />
          </div>

          {/* 送出按鈕 */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-ink-900 hover:bg-ink-800 text-stone-100 py-3.5 rounded-xl font-medium transition-all shadow-sm hover:shadow flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {loading ? (
              <span>送出中...</span>
            ) : (
              <>
                <Send className="w-4 h-4 text-gold-400" />
                <span>確認送出諮詢</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
