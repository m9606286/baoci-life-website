import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { supabase } from '@/lib/supabase';
import emailjs from '@emailjs/browser';
import { Phone, Clock,MapPin, FileText, Send, CheckCircle2, Loader2 } from 'lucide-react';

const serviceOptions = [
  '生前契約規劃',
  '禮儀服務',
  '臨終關懷諮詢',
  '接體服務',
  '其他諮詢',
];

// 📧 EmailJS 設定參數
const EMAILJS_SERVICE_ID = 'service_zf9uh61'; // 您的 Service ID[cite: 6]
const EMAILJS_TEMPLATE_ID = 'template_es3ajzo'; // 請替換為您在 EmailJS 建立的 Template ID
const EMAILJS_PUBLIC_KEY = 'JrnA1g4s1JSwiropU';   // 請替換為 Account 頁面取得的 Public Key

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', phone: '', serviceType: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setStatus('loading');

    try {
      // 1. 同步寫入 Supabase 資料庫
      const { error: dbError } = await supabase.from('consultation_requests').insert({
        name: form.name.trim(),
        phone: form.phone.trim(),
        service_type: form.serviceType || null,
        message: form.message.trim() || null,
      });

      if (dbError) throw dbError;

      // 2. 同步透過 EmailJS 寄出 Email 到 jerry@mail.apex.com.tw
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name.trim(),            // 對應範本中的 {{name}}
          phone: form.phone.trim(),          // 對應範本中的 {{phone}}
          service_type: form.serviceType || '未指定', // 對應範本中的 {{service_type}}
          message: form.message.trim() || '無額外需求說明', // 對應範本中的 {{message}}
          to_email: 'jerry@mail.apex.com.tw',
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setForm({ name: '', phone: '', serviceType: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('表單送出錯誤：', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-ivory-200 to-ivory-100 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-gold-100/40 to-transparent pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-8xl px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 text-sm tracking-[0.3em] uppercase reveal">Contact</p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl text-ink-800 font-bold mt-3 reveal reveal-delay-1">
            準備好了解更多嗎？
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6 reveal reveal-delay-2" />
          <p className="mt-6 text-ink-500 text-lg max-w-2xl mx-auto leading-relaxed reveal reveal-delay-3">
            我們的專業團隊隨時準備為您提供諮詢和協助。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: info */}
          <div className="lg:col-span-2">
            <div className="space-y-5">
              <a
                href="tel:0800-600-603"
                className="reveal flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-ink-900 flex items-center justify-center flex-shrink-0 group-hover:bg-ink-800 transition-colors">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-xs text-ink-400">24小時服務專線</p>
                  <p className="font-serif-tc text-xl text-ink-800 font-bold">0800-600-603</p>
                </div>
              </a>

              <div className="reveal reveal-delay-1 flex items-center gap-4 p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 rounded-full bg-ink-900 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-xs text-ink-400">地址</p>
                  <p className="text-ink-800 font-medium">台北市內湖區新湖二路329號5樓</p>
                </div>
              </div>

              <div className="reveal reveal-delay-2 flex items-center gap-4 p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 rounded-full bg-ink-900 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-xs text-ink-400">統一編號</p>
                  <p className="text-ink-800 font-medium">13024413</p>
                </div>
              </div>

              <div className="reveal reveal-delay-3 p-6 bg-ink-900 rounded-xl shadow-md">
                <p className="text-white text-sm leading-relaxed">
                  臨終關懷諮詢或須啟動接體服務，請直接撥打 24小時服務專線。
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 reveal reveal-delay-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
              <h3 className="font-serif-tc text-2xl text-ink-800 font-bold mb-2">填寫諮詢表單</h3>
              <p className="text-ink-400 text-sm mb-8">我們將於收到表單後儘速與您聯繫</p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-sage-50 border border-sage-200 flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-sage-600 flex-shrink-0" />
                  <p className="text-sage-700 text-sm">
                    感謝您的來信，我們已收到您的諮詢需求，將儘速與您聯繫。
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3">
                  <p className="text-red-700 text-sm">
                    送出失敗，請稍後再試或直接來電 0800-600-603，謝謝。
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-ink-700 mb-2">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-ivory-300 bg-ivory-50 text-ink-800 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                      placeholder="請輸入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-700 mb-2">
                      聯絡電話 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-ivory-300 bg-ivory-50 text-ink-800 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                      placeholder="請輸入聯絡電話"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">
                    需求服務類型
                  </label>
                  <select
                    value={form.serviceType}
                    onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-ivory-300 bg-ivory-50 text-ink-800 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                  >
                    <option value="">請選擇服務類型</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">
                    需求說明
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-ivory-300 bg-ivory-50 text-ink-800 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all resize-none"
                    placeholder="請簡述您的需求或問題..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-ink-900 text-ivory-50 font-medium hover:bg-ink-800 transition-all hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>送出中...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-gold-400 group-hover:translate-x-0.5 transition-transform" />
                      <span>送出諮詢</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
