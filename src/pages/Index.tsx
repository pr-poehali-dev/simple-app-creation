import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Sparkles',
      title: 'Веб-разработка',
      description: 'Создаём современные и быстрые сайты с уникальным дизайном'
    },
    {
      icon: 'Smartphone',
      title: 'Мобильные приложения',
      description: 'Разработка iOS и Android приложений с нативным UX'
    },
    {
      icon: 'Palette',
      title: 'UI/UX дизайн',
      description: 'Проектируем интерфейсы, которые влюбляют в продукт'
    },
    {
      icon: 'TrendingUp',
      title: 'Маркетинг',
      description: 'Продвижение вашего бизнеса в digital-пространстве'
    }
  ];

  const portfolio = [
    {
      title: 'E-commerce платформа',
      category: 'Веб-разработка',
      image: '/placeholder.svg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Финтех приложение',
      category: 'Мобильная разработка',
      image: '/placeholder.svg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'SaaS панель',
      category: 'UI/UX дизайн',
      image: '/placeholder.svg',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const blogPosts = [
    {
      title: 'Тренды веб-дизайна 2025',
      date: '15 марта 2025',
      excerpt: 'Разбираем главные тренды, которые будут определять веб-дизайн в этом году',
      readTime: '5 мин'
    },
    {
      title: 'React vs Vue: что выбрать?',
      date: '10 марта 2025',
      excerpt: 'Сравниваем два популярных фреймворка и помогаем сделать правильный выбор',
      readTime: '7 мин'
    },
    {
      title: 'Оптимизация производительности',
      date: '5 марта 2025',
      excerpt: 'Как ускорить ваш сайт и улучшить пользовательский опыт',
      readTime: '6 мин'
    }
  ];

  const faq = [
    {
      question: 'Сколько времени занимает разработка сайта?',
      answer: 'Срок разработки зависит от сложности проекта. Лендинг можно создать за 1-2 недели, корпоративный сайт за 3-4 недели, а крупный интернет-магазин или web-приложение может занять 2-3 месяца.'
    },
    {
      question: 'Какая стоимость разработки?',
      answer: 'Стоимость рассчитывается индивидуально в зависимости от функционала, дизайна и сложности проекта. Мы предоставляем детальную смету после обсуждения всех требований.'
    },
    {
      question: 'Предоставляете ли вы поддержку после запуска?',
      answer: 'Да, мы предлагаем техническую поддержку и сопровождение проектов. Можем заключить договор на постоянную поддержку или работать по запросу.'
    },
    {
      question: 'Можно ли внести изменения в процессе разработки?',
      answer: 'Конечно! Мы используем гибкую методологию разработки, которая позволяет вносить корректировки на любом этапе проекта.'
    }
  ];

  const catalog = [
    { name: 'Веб-сайты', count: 45, icon: 'Globe' },
    { name: 'Мобильные приложения', count: 28, icon: 'Smartphone' },
    { name: 'Дизайн систем', count: 34, icon: 'Layout' },
    { name: 'Брендинг', count: 52, icon: 'Sparkles' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              BrandName
            </div>
            <div className="hidden md:flex gap-8">
              {['home', 'catalog', 'about', 'services', 'portfolio', 'blog', 'faq', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                    activeSection === section ? 'text-purple-600' : 'text-gray-600'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'about' && 'О нас'}
                  {section === 'services' && 'Услуги'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'blog' && 'Блог'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="hidden md:block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Создаём будущее
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto animate-fade-in">
            Превращаем смелые идеи в digital-продукты, которые меняют правила игры
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6">
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-purple-300 hover:bg-purple-50">
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Каталог услуг
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Полный спектр digital-решений</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalog.map((item, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-100 bg-white/80 backdrop-blur cursor-pointer group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon as any} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-purple-600">
                    {item.count} проектов
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                О нас
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Мы — команда профессионалов, которая создаёт digital-продукты мирового уровня. 
                Наш опыт охватывает разработку веб-сайтов, мобильных приложений и комплексных IT-решений.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                За 8 лет работы мы реализовали более 200 проектов для компаний из России, Европы и США. 
                Наша миссия — помогать бизнесу расти через инновационные технологии.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
                  <div className="text-sm text-gray-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-600 mb-2">8</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-1">
                <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                  <Icon name="Users" size={120} className="text-purple-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Наши услуги
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Всё для вашего успеха в digital</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-100 bg-white/80 backdrop-blur group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                    <Icon name={service.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Портфолио
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Проекты, которыми мы гордимся</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 group cursor-pointer"
              >
                <div className={`h-64 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <Icon name="ExternalLink" className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={48} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.category}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Блог
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Делимся опытом и знаниями</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-100 bg-white/80 backdrop-blur cursor-pointer group"
              >
                <CardHeader>
                  <div className="text-sm text-purple-600 font-medium mb-2 flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    {post.date} · {post.readTime}
                  </div>
                  <CardTitle className="text-xl mb-3 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 text-purple-600 font-semibold">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Вопросы и ответы
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Ответы на частые вопросы</p>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-2 border-purple-100 rounded-2xl px-6 bg-white/80 backdrop-blur"
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-purple-600 py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы обсудим, как воплотить вашу идею в жизнь
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-3 text-white">
              <Icon name="Mail" size={24} />
              <span className="text-lg">hello@brandname.com</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Icon name="Phone" size={24} />
              <span className="text-lg">+7 (999) 123-45-67</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
              <Icon name="Send" size={20} className="mr-2" />
              Отправить заявку
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в чат
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                BrandName
              </h3>
              <p className="text-gray-400">
                Создаём digital-продукты, которые меняют мир
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-white cursor-pointer transition-colors">Команда</li>
                <li className="hover:text-white cursor-pointer transition-colors">Карьера</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Разработка</li>
                <li className="hover:text-white cursor-pointer transition-colors">Дизайн</li>
                <li className="hover:text-white cursor-pointer transition-colors">Поддержка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соц. сети</h4>
              <div className="flex gap-4">
                <Icon name="Github" className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={24} />
                <Icon name="Twitter" className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={24} />
                <Icon name="Linkedin" className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={24} />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 BrandName. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
