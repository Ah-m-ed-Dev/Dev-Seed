import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowUpLeft,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Database,
  Facebook,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Palette,
  Phone,
  Play,
  Quote,
  Rocket,
  Send,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Target,
  Users,
  X,
  Zap,
} from 'lucide-react';

type Project = { title: string; category: string; description: string; tags: string[]; accent: string };

const services = [
  { icon: Globe2, number: '01', title: 'تطوير المواقع', text: 'نبني تجارب رقمية سريعة، مرنة، ومصممة لتكبر مع أعمالك.', tags: ['React', 'Next.js', 'Tailwind'] },
  { icon: Smartphone, number: '02', title: 'تطبيقات الجوال', text: 'تطبيقات ذكية وسلسة تصل بمنتجك إلى عملائك أينما كانوا.', tags: ['iOS', 'Android', 'React Native'] },
  { icon: BarChart3, number: '03', title: 'أنظمة الإدارة', text: 'حوّل عملياتك اليومية إلى نظام واضح يمنحك رؤية وتحكماً أكبر.', tags: ['ERP', 'CRM', 'Analytics'] },
  { icon: Zap, number: '04', title: 'حلول مخصصة', text: 'نحوّل التحديات المعقدة إلى أدوات عملية مصممة حول احتياجك.', tags: ['Automation', 'APIs', 'Cloud'] },
];

const projects: Project[] = [
  { title: 'نواة للأعمال', category: 'أنظمة الإدارة', description: 'منصة موحدة لإدارة الفروع والمخزون والعمليات اليومية.', tags: ['ERP', 'Dashboard'], accent: 'from-blue-900 to-sky-500' },
  { title: 'مدار للتجارة', category: 'المواقع الإلكترونية', description: 'تجربة تجارة إلكترونية عربية تضع المنتج في الواجهة.', tags: ['E-commerce', 'Next.js'], accent: 'from-slate-950 to-blue-600' },
  { title: 'وصلة', category: 'التطبيقات', description: 'تطبيق جوال يقرّب الخدمات المحلية من المستخدمين.', tags: ['Mobile', 'React Native'], accent: 'from-sky-950 to-cyan-500' },
  { title: 'مسار للتعليم', category: 'المواقع الإلكترونية', description: 'مساحة تعليمية تفاعلية للفرق والمهنيين الطموحين.', tags: ['LMS', 'UX/UI'], accent: 'from-blue-950 to-blue-400' },
  { title: 'بيانات+', category: 'أنظمة الإدارة', description: 'لوحات مؤشرات تساعد الإدارة على اتخاذ قرارات أسرع.', tags: ['BI', 'Data'], accent: 'from-slate-900 to-sky-600' },
  { title: 'سُحُب', category: 'التطبيقات', description: 'منصة حجز مرنة بواجهة سهلة وتجربة دفع سلسة.', tags: ['SaaS', 'Payments'], accent: 'from-cyan-950 to-blue-500' },
];

const testimonials = [
  { quote: 'لم يكتفِ فريق DevSeed بتنفيذ ما طلبناه، بل ساعدنا على رؤية فرص جديدة لم نكن نراها.', name: 'محمد عبد الرحمن', role: 'المدير التنفيذي، مدار' },
  { quote: 'النتيجة كانت أسرع وأكثر احترافية مما توقعنا. أصبح فريقنا يعمل بوضوح وثقة أكبر.', name: 'سارة النور', role: 'مديرة العمليات، نواة' },
  { quote: 'شريك تقني يفهم العمل فعلاً. التواصل واضح، والالتزام بالمواعيد استثنائي.', name: 'عمر الطيب', role: 'مؤسس، وصلة' },
];

const process = ['نستمع ونفهم', 'نخطط ونصمم', 'نبني ونختبر', 'نطلق ونطوّر'];

function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('الكل');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [sent, setSent] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

  const filteredProjects = useMemo(
    () => projectFilter === 'الكل' ? projects : projects.filter((project) => project.category === projectFilter),
    [projectFilter]
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className={dark ? 'dark' : ''} dir="rtl">
      <main className="min-h-screen overflow-hidden bg-[#f7f9fc] text-slate-950 transition-colors duration-500 dark:bg-[#07111f] dark:text-white">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#07111f]/85">
          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
            <button onClick={() => scrollTo('home')} className="flex items-center gap-3 text-right" aria-label="العودة للرئيسية">
              <img src="/assets/images/devseed-stacked.png" alt="DevSeed" className="h-11 w-11 object-contain" />
              <span className="hidden text-sm font-extrabold tracking-tight sm:block">DevSeed <span className="font-normal text-slate-500 dark:text-slate-400">Tech Solutions</span></span>
            </button>
            <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex dark:text-slate-300">
              <button className="text-blue-600 dark:text-sky-400" onClick={() => scrollTo('home')}>الرئيسية</button>
              <button onClick={() => scrollTo('about')}>من نحن</button>
              <button onClick={() => scrollTo('services')}>خدماتنا</button>
              <button onClick={() => scrollTo('work')}>أعمالنا</button>
              <button onClick={() => scrollTo('contact')}>تواصل معنا</button>
            </nav>
            <div className="flex items-center gap-2">
              <button onClick={() => setDark(!dark)} className="rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-300" aria-label="تبديل النمط">
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => scrollTo('contact')} className="hidden rounded-full bg-[#003d7a] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/15 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:block">ابدأ مشروعك <ArrowLeft className="mr-2 inline" size={16} /></button>
              <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-slate-200 p-2.5 lg:hidden dark:border-white/10" aria-label="القائمة">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
            </div>
          </div>
          {menuOpen && <nav className="border-t border-slate-100 bg-white px-5 py-4 dark:border-white/10 dark:bg-[#07111f] lg:hidden"><div className="grid gap-1 text-right font-semibold text-slate-700 dark:text-slate-200">{[['home', 'الرئيسية'], ['about', 'من نحن'], ['services', 'خدماتنا'], ['work', 'أعمالنا'], ['contact', 'تواصل معنا']].map(([id, label]) => <button key={id} onClick={() => scrollTo(id)} className="rounded-xl px-3 py-3 text-right hover:bg-slate-50 dark:hover:bg-white/5">{label}</button>)}</div></nav>}
        </header>

        <section id="home" className="relative px-5 pb-20 pt-36 lg:px-8 lg:pb-32 lg:pt-48">
          <div className="absolute right-[-12%] top-20 -z-0 h-[520px] w-[520px] rounded-full bg-sky-400/15 blur-3xl" />
          <div className="absolute left-[-12%] top-48 -z-0 h-[420px] w-[420px] rounded-full bg-blue-700/10 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-xs font-bold text-blue-700 shadow-sm dark:border-sky-900/70 dark:bg-white/5 dark:text-sky-300"><Sparkles size={15} /> نبني ما يستحق أن يُستخدم</div>
              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.15] tracking-tight sm:text-6xl lg:text-[76px]">نحوّل الأفكار إلى <span className="bg-gradient-to-l from-[#003d7a] via-[#0ea5e9] to-[#003d7a] bg-clip-text text-transparent">حلول رقمية قوية.</span></h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">نصمم ونطوّر مواقع وتطبيقات وأنظمة ذكية تساعد الشركات الطموحة على النمو بثقة وسرعة.</p>
              <div className="mt-9 flex flex-wrap items-center gap-3"><button onClick={() => scrollTo('work')} className="rounded-full bg-[#003d7a] px-6 py-4 font-bold text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-1 hover:bg-blue-700">استكشف أعمالنا <ArrowLeft className="mr-2 inline" size={17} /></button><button onClick={() => scrollTo('about')} className="group rounded-full border border-slate-300 bg-white/60 px-6 py-4 font-bold text-slate-700 transition hover:border-blue-400 hover:text-blue-700 dark:border-white/15 dark:bg-white/5 dark:text-white"><Play className="ml-2 inline fill-current" size={16} /> تعرّف علينا</button></div>
              <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-500 dark:text-slate-400"><span className="flex items-center gap-2"><ShieldCheck size={17} className="text-sky-500" /> جودة تضعها في المقدمة</span><span className="flex items-center gap-2"><Zap size={17} className="text-sky-500" /> سرعة بدون تنازلات</span></div>
            </div>
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="absolute -inset-5 rounded-[42px] bg-gradient-to-br from-blue-700/25 to-sky-300/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[34px] border border-white/70 bg-[#0a2e5d] p-5 shadow-2xl shadow-blue-950/30 dark:border-white/10">
                <div className="flex items-center justify-between border-b border-white/10 pb-5"><div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-red-400" /><i className="h-2.5 w-2.5 rounded-full bg-yellow-300" /><i className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div><span className="text-[10px] tracking-[.25em] text-blue-200">DEVSEED / STUDIO</span></div>
                <div className="grid gap-5 py-8 sm:grid-cols-[.8fr_1.2fr]"><div className="flex flex-col justify-between"><div><div className="mb-3 h-2 w-16 rounded bg-sky-400" /><div className="h-3 w-32 rounded bg-white/70" /><div className="mt-2 h-3 w-24 rounded bg-white/20" /></div><div className="mt-12"><div className="text-4xl font-black text-white">+150</div><div className="mt-1 text-xs text-blue-200">مشروعاً تم إطلاقه</div></div></div><div className="relative flex min-h-[245px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-sky-400/80 to-blue-950"><div className="absolute h-44 w-44 rounded-full border-[22px] border-white/20" /><div className="absolute h-28 w-28 rotate-45 rounded-3xl border border-white/40" /><Code2 className="relative text-white" size={68} strokeWidth={1.2} /></div></div>
                <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-xs text-blue-100"><span>حلول تصنع الفرق</span><span className="flex items-center gap-1 text-white"><span className="h-2 w-2 rounded-full bg-emerald-400" /> متصلون الآن</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-white/70 dark:border-white/10 dark:bg-white/[.03]"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200/70 py-8 sm:grid-cols-4 dark:divide-white/10">{[['150+', 'مشروعاً منجزاً'], ['50+', 'عميلاً سعيداً'], ['15', 'عاماً من الخبرة'], ['99.9%', 'معدل الرضا']].map(([value, label]) => <div key={label} className="px-4 text-center first:border-0"><div className="text-3xl font-extrabold text-[#003d7a] dark:text-sky-400">{value}</div><div className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{label}</div></div>)}</div></section>

        <section id="services" className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><span className="section-kicker">ما نبرع فيه</span><h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl">حلول رقمية <span className="text-sky-500">تفهم طموحك.</span></h2></div><p className="max-w-sm text-base leading-7 text-slate-500 dark:text-slate-400">من الفكرة الأولى إلى النمو المستمر، نمنح مشروعك الأدوات التي يحتاجها ليترك أثراً.</p></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{services.map(({ icon: Icon, number, title, text, tags }) => <article key={title} className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-900/10 dark:border-white/10 dark:bg-white/[.04]"><div className="flex items-start justify-between"><div className="rounded-2xl bg-blue-50 p-3.5 text-[#003d7a] transition group-hover:bg-[#003d7a] group-hover:text-white dark:bg-sky-950/60 dark:text-sky-300"><Icon size={25} /></div><span className="text-xs font-bold text-slate-300 dark:text-slate-600">{number}</span></div><h3 className="mt-8 text-xl font-extrabold">{title}</h3><p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-500 dark:text-slate-400">{text}</p><div className="mt-6 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">{tag}</span>)}</div></article>)}</div><button onClick={() => setShowAllServices(!showAllServices)} className="mx-auto mt-9 flex items-center gap-2 text-sm font-bold text-blue-700 dark:text-sky-400">{showAllServices ? 'إخفاء التفاصيل' : 'اكتشف كيف نعمل'} <ChevronDown className={showAllServices ? 'rotate-180 transition' : 'transition'} size={17} /></button>{showAllServices && <div className="mt-6 rounded-3xl border border-sky-100 bg-sky-50/70 p-6 text-center text-sm leading-8 text-slate-600 dark:border-sky-900/50 dark:bg-sky-950/20 dark:text-slate-300">نبدأ دائماً بفهم أهدافك، ثم نرسم تجربة واضحة، ونبنيها بتقنيات موثوقة، ونبقى معك بعد الإطلاق لنضمن أن الحل يواصل تقديم قيمة حقيقية.</div>}</div></section>

        <section id="about" className="bg-[#003d7a] px-5 py-24 text-white lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2"><div><span className="section-kicker light">لماذا DevSeed؟</span><h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">لسنا مجرد منفذين،<br /><span className="text-sky-300">نحن شركاؤك.</span></h2><p className="mt-6 max-w-lg text-base leading-8 text-blue-100">نجمع بين التفكير الاستراتيجي، التصميم الإنساني، والهندسة المتينة لنصنع منتجات يحب الناس استخدامها وتحب الأعمال نتائجها.</p><div className="mt-9 grid grid-cols-2 gap-4">{[['Target', 'نفهم الصورة الكبيرة'], ['Users', 'نضع الإنسان أولاً'], ['Rocket', 'نطلق بسرعة ووعي'], ['Layers3', 'نبني للمستقبل']].map(([icon, label]) => { const Icon = { Target, Users, Rocket, Layers3 }[icon as 'Target' | 'Users' | 'Rocket' | 'Layers3']; return <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-semibold"><Icon size={20} className="text-sky-300" />{label}</div>})}</div></div><div className="relative rounded-[32px] border border-white/10 bg-white/[.08] p-7"><div className="mb-8 flex items-center justify-between"><span className="text-sm font-bold text-blue-100">رحلة المشروع معنا</span><span className="rounded-full bg-sky-400/20 px-3 py-1 text-xs text-sky-200">منهج واضح</span></div><div className="space-y-0">{process.map((item, i) => <div key={item} className="relative flex items-center gap-5 pb-8 last:pb-0"><div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-sky-300/50 bg-[#0a4b8b] text-sm font-bold text-sky-200">0{i + 1}</div>{i < process.length - 1 && <div className="absolute right-5 top-10 h-8 border-r border-dashed border-sky-300/40" />}<div><div className="font-bold">{item}</div><div className="mt-1 text-xs text-blue-200">خطوة تصنع فرقاً حقيقياً</div></div></div>)}</div></div></div></section>

        <section id="work" className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><span className="section-kicker">مختارات من أعمالنا</span><h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">أفكار تحولت إلى <span className="text-sky-500">أثر.</span></h2></div><div className="flex flex-wrap gap-2">{['الكل', 'المواقع الإلكترونية', 'التطبيقات', 'أنظمة الإدارة'].map(filter => <button key={filter} onClick={() => setProjectFilter(filter)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${projectFilter === filter ? 'bg-[#003d7a] text-white' : 'bg-slate-100 text-slate-500 hover:bg-sky-100 dark:bg-white/10 dark:text-slate-300'}`}>{filter}</button>)}</div></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filteredProjects.map(project => <article key={project.title} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[.04]"><div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.accent} p-6`}><div className="absolute -left-8 -top-10 h-44 w-44 rounded-full border-[28px] border-white/10" /><div className="absolute bottom-[-40px] right-[-12px] h-40 w-40 rotate-45 rounded-[35px] border border-white/30 bg-white/5 transition duration-500 group-hover:rotate-[65deg]" /><div className="relative flex h-full flex-col justify-between"><div className="flex justify-between text-white/70"><Code2 size={24} /><span className="text-xs">{project.category}</span></div><div className="text-4xl font-black tracking-tight text-white/90">{project.title}</div></div></div><div className="p-6"><div className="flex items-start justify-between gap-4"><div><h3 className="text-xl font-extrabold">{project.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{project.description}</p></div><button className="rounded-full bg-slate-100 p-3 text-[#003d7a] transition hover:bg-sky-100 dark:bg-white/10 dark:text-sky-300" aria-label={`تفاصيل ${project.title}`}><ArrowUpLeft size={18} /></button></div><div className="mt-5 flex gap-2">{project.tags.map(tag => <span key={tag} className="text-[11px] font-bold text-sky-600 dark:text-sky-400">#{tag}</span>)}</div></div></article>)}</div></div></section>

        <section className="border-y border-slate-200/70 bg-slate-100/70 px-5 py-20 dark:border-white/10 dark:bg-white/[.03] lg:px-8"><div className="mx-auto max-w-5xl text-center"><Quote className="mx-auto text-sky-500" size={30} /><p className="mx-auto mt-7 max-w-3xl text-2xl font-bold leading-[1.7] sm:text-3xl">“{testimonials[activeTestimonial].quote}”</p><div className="mt-7"><div className="font-extrabold">{testimonials[activeTestimonial].name}</div><div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{testimonials[activeTestimonial].role}</div></div><div className="mt-8 flex justify-center gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => setActiveTestimonial(i)} className={`h-2 rounded-full transition-all ${i === activeTestimonial ? 'w-8 bg-[#003d7a]' : 'w-2 bg-slate-300 dark:bg-slate-600'}`} aria-label={`التقييم ${i + 1}`} />)}</div></div></section>

        <section id="contact" className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><span className="section-kicker">لنبني شيئاً عظيماً</span><h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">لديك فكرة؟<br /><span className="text-sky-500">لدينا الطريقة.</span></h2><p className="mt-6 max-w-md leading-8 text-slate-500 dark:text-slate-400">شاركنا رؤيتك، وسنعود إليك بخطوة واضحة تليق بها.</p><div className="mt-10 space-y-5"><a href="mailto:devseed@gmail.com" className="flex items-center gap-4 font-semibold transition hover:text-sky-600"><span className="rounded-2xl bg-sky-50 p-3 text-sky-600 dark:bg-sky-950/60"><Mail size={21} /></span>devseed@gmail.com</a><a href="tel:+249997143276" className="flex items-center gap-4 font-semibold transition hover:text-sky-600"><span className="rounded-2xl bg-sky-50 p-3 text-sky-600 dark:bg-sky-950/60"><Phone size={21} /></span>+249 99 714 3276</a><div className="flex items-center gap-4 font-semibold"><span className="rounded-2xl bg-sky-50 p-3 text-sky-600 dark:bg-sky-950/60"><Globe2 size={21} /></span>الخرطوم، السودان</div></div><div className="mt-10 flex gap-2"><a href="#contact" className="rounded-full border border-slate-200 p-3 text-slate-500 hover:border-sky-400 hover:text-sky-600 dark:border-white/10"><Linkedin size={18} /></a><a href="#contact" className="rounded-full border border-slate-200 p-3 text-slate-500 hover:border-sky-400 hover:text-sky-600 dark:border-white/10"><Github size={18} /></a><a href="#contact" className="rounded-full border border-slate-200 p-3 text-slate-500 hover:border-sky-400 hover:text-sky-600 dark:border-white/10"><Facebook size={18} /></a></div></div><form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9 dark:border-white/10 dark:bg-white/[.04]">{sent ? <div className="grid min-h-[390px] place-items-center text-center"><div><div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60"><Check size={30} /></div><h3 className="mt-6 text-2xl font-extrabold">وصلت رسالتك بنجاح</h3><p className="mt-3 text-slate-500 dark:text-slate-400">سيتواصل معك فريقنا خلال يوم عمل واحد.</p><button type="button" onClick={() => setSent(false)} className="mt-7 text-sm font-bold text-sky-600">إرسال رسالة أخرى</button></div></div> : <><div className="mb-8 flex items-center justify-between"><div><h3 className="text-2xl font-extrabold">ابدأ محادثة</h3><p className="mt-2 text-sm text-slate-500 dark:text-slate-400">أخبرنا قليلاً عن مشروعك.</p></div><MessageCircle className="text-sky-500" size={28} /></div><div className="grid gap-5 sm:grid-cols-2"><label className="field"><span>الاسم الكامل</span><input required placeholder="كيف نناديك؟" /></label><label className="field"><span>البريد الإلكتروني</span><input required type="email" placeholder="you@company.com" /></label><label className="field"><span>نوع المشروع</span><select defaultValue=""><option value="" disabled>اختر نوع المشروع</option><option>موقع إلكتروني</option><option>تطبيق جوال</option><option>نظام إدارة</option><option>استشارة تقنية</option></select></label><label className="field"><span>الميزانية المتوقعة</span><select defaultValue=""><option value="" disabled>اختر النطاق</option><option>أقل من 5,000$</option><option>5,000$ - 15,000$</option><option>أكثر من 15,000$</option></select></label><label className="field sm:col-span-2"><span>حدثنا عن فكرتك</span><textarea required rows={4} placeholder="ما التحدي الذي نساعدك في حله؟" /></label></div><button className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#003d7a] py-4 font-bold text-white transition hover:bg-blue-700" type="submit">أرسل طلبك <Send size={17} /></button></>}</form></div></section>

        <footer className="border-t border-slate-200/70 px-5 py-8 dark:border-white/10 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center text-xs text-slate-500 sm:flex-row"><div className="flex items-center gap-3"><img src="/assets/images/devseed-stacked.png" alt="DevSeed" className="h-8 w-8 object-contain" /><span>© 2024 DevSeed Tech Solutions. نصنع المستقبل معاً.</span></div><div className="flex gap-5"><a href="#contact" className="hover:text-sky-600">سياسة الخصوصية</a><a href="#contact" className="hover:text-sky-600">شروط الاستخدام</a></div></div></footer>
      </main>
    </div>
  );
}

export default App;
