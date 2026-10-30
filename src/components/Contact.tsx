import React, { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { MapPin, Send, CheckCircle2, Building2, Phone, Mail } from 'lucide-react';

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
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '', // 電子郵件 (選填)
    location: '', // 居住地點 (無預設)
    service: '', // 需求服務類型 (無預設)
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ⚠️ 請將引號內的網址替換為您複製的 GAS 網址
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzBIEBCjy4KlujkBQeROvmFJblaeKucJCGuUUe4HL7p_7h6f_bC4xhEqdER6dtjQxVb/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.location) {
      alert('請選擇您的居住地點！');
      return;
    }

    if (!formData.service) {
      alert('請選擇您的需求服務類型！');
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
      <section className="pt-2 pb-24 lg:pt-4 lg:pb-32 bg-ivory-100 relative -mt-6 lg:-mt-10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white/80 border border-gold-400/30 rounded-2xl p-8 shadow-md backdrop-blur-sm">
            <CheckCircle2 className="w-16 h-16 text-gold-600 mx-auto mb-4" />
            <h3 className="text-2xl font-serif-tc font-bold text-ink-950 mb-2">感謝您的填寫</h3>
            <p className="text-slate-600 mb-6">我們已收到您的諮詢需求，將會盡快由專人與您聯繫。</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', phone: '', email: '', location: '', service: '', message: '' });
              }}
              className="bg-ink-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gold-600 transition-colors shadow-md cursor-pointer"
            >
              填寫其他諮詢
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-2 pb-24 lg:pt-4 lg:pb-32 bg-ivory-100 relative -mt-6 lg:-mt-10 overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto px-6 relative">
        
        {/* 標題區 */}
        <div className="text-center mb-10">
          <p className="text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-mono font-medium reveal">
            CONTACT US
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl font-bold text-ink-950 mt-2 reveal reveal-delay-1">
            聯絡我們
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4 reveal reveal-delay-2" />
        </div>

        {/* 總公司資訊卡片 */}
        <div className="max-w-2xl mx-auto mb-12 reveal reveal-delay-3">
          <div className="group bg-white/90 rounded-2xl p-6 sm:p-8 border border-gold-400/30 shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {/* 放大 Icon，當滑鼠移入整個方格範圍時切換為深金底白線條 */}
                <div className="p-2 rounded-xl bg-gold-400/15 group-hover:bg-gold-600 transition-colors duration-300 shrink-0">
                  <Building2 className="w-6 h-6 text-gold-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif-tc text-xl font-bold text-ink-950">
                  寶慈生命事業 (總公司)
                </h3>
              </div>

              {/* 電話、地址、Email 改為移到該處才出現深金色白字 (hover:text-gold-700) */}
              <div className="space-y-3 text-sm sm:text-base text-slate-600">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 shrink-0 text-gold-600" />
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <span>
                      電話：
                      <a href="tel:062678859" className="hover:text-gold-700 hover:underline font-mono transition-colors">
                        (06) 2678859
                      </a>
                    </span>
                    <span>
                      24 小時專線：
                      <a href="tel:0800600603" className="hover:text-gold-700 hover:underline font-semibold font-mono transition-colors">
                        0800-600-603
                      </a>
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 shrink-0 text-gold-600" />
                  <span>
                    地址：
                    <span className="hover:text-gold-700 hover:underline transition-colors cursor-default">
                      台北市內湖區新湖二路329號5樓
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0 text-gold-600" />
                  <span>
                    Email：
                    <a href="mailto:service@apexbaoci.com.tw" className="hover:text-gold-700 hover:underline transition-colors">
                      service@apexbaoci.com.tw
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 表單區塊 */}
        <div className="bg-white/80 backdrop-blur-sm border border-gold-400/30 rounded-3xl p-6 sm:p-10 shadow-lg reveal reveal-delay-4">
          <div className="text-center mb-8 space-y-2">
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              填寫下方表單，將有專人為您提供尊榮、溫暖的諮詢服務。
            </p>
            <p className="text-gold-700 font-bold text-sm sm:text-base">
              臨終接體服務請直接撥打24小時服務專線 <a href="tel:0800600603" className="underline font-mono">0800-600-603</a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* 姓名 */}
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">您的姓名</label>
                <input
                  type="text"
                  required
                  placeholder="請輸入姓名"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all text-ink-900 shadow-sm"
                />
              </div>

              {/* 電話 */}
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">聯絡電話</label>
                <input
                  type="tel"
                  required
                  placeholder="請輸入電話號碼"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all text-ink-900 shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* 電子郵件 (選填) */}
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">
                  電子郵件 <span className="text-stone-400 font-normal">(選填)</span>
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all text-ink-900 shadow-sm"
                />
              </div>

              {/* 居住地點 */}
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">居住地點</label>
                <div className="relative">
                  <select
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className={`w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all appearance-none cursor-pointer shadow-sm ${
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

            {/* 需求服務類型 (取消預設值) */}
            <div>
              <label className="block text-sm font-medium text-ink-900 mb-2">需求服務類型</label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className={`w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all appearance-none cursor-pointer shadow-sm ${
                  !formData.service ? 'text-stone-400' : 'text-ink-900'
                }`}
              >
                <option value="" disabled hidden>
                  -- 請選擇服務類型 --
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-ink-900">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* 留言內容 */}
            <div>
              <label className="block text-sm font-medium text-ink-900 mb-2">諮詢內容 / 需求留言</label>
              <textarea
                rows={4}
                placeholder="請簡述您的需求或想詢問的問題..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all resize-none text-ink-900 shadow-sm"
              />
            </div>

            {/* 送出按鈕 */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-ivory-100 hover:bg-gold-600 text-ink-900 hover:text-white border border-gold-400/50 py-3.5 rounded-xl font-medium transition-all shadow-sm hover:shadow-md flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer group"
            >
              {loading ? (
                <span>送出中...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-gold-600 group-hover:text-white transition-colors" />
                  <span>確認送出諮詢</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
