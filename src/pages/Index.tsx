import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: '',
    problem: ''
  });

  const services = [
    {
      icon: 'Scan',
      title: 'Комплексная диагностика',
      description: 'Быстрая и точная локализация неисправностей с помощью современного оборудования'
    },
    {
      icon: 'Zap',
      title: 'Ремонт электрооборудования',
      description: 'Стартеры, генераторы, ЭБУ, системы освещения и отопления'
    },
    {
      icon: 'Wifi',
      title: 'Системы связи и мониторинга',
      description: 'Установка тахографов, ГЛОНАСС/GPS, радиостанций'
    },
    {
      icon: 'Shield',
      title: 'Системы безопасности',
      description: 'Ремонт ABS, ASR, EBS, парктроников и систем помощи'
    },
    {
      icon: 'Wrench',
      title: 'Дополнительное оборудование',
      description: 'Лебедки, освещение, отопители, автономные системы питания'
    },
    {
      icon: 'Battery',
      title: 'Обслуживание АКБ',
      description: 'Проверка, зарядка, диагностика, подбор и установка'
    }
  ];



  const faqs = [
    {
      question: 'Какие марки грузовиков обслуживаете?',
      answer: 'Работаем со всеми марками: Scania, Volvo, MAN, DAF, Mercedes, а также отечественными КамАЗ, МАЗ, ГАЗ и другими.'
    },
    {
      question: 'Сколько времени занимает диагностика?',
      answer: 'Стандартная диагностика занимает от 1 до 3 часов в зависимости от сложности проблемы. Используем профессиональное оборудование для точной локализации неисправностей.'
    },
    {
      question: 'Есть ли гарантия на работы?',
      answer: 'Да, предоставляем гарантию на все виды работ и установленные запчасти. Срок гарантии зависит от типа работ.'
    },
    {
      question: 'Можно ли заехать на крупногабаритной технике?',
      answer: 'Да, наш сервис оборудован для приема грузового транспорта любых габаритов, включая автопоезда.'
    },
    {
      question: 'Работаете с юридическими лицами?',
      answer: 'Да, работаем как с физическими, так и с юридическими лицами. Предоставляем полный пакет документов.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Zap" size={32} className="text-primary" />
            <div>
              <h1 className="text-xl font-bold">Автоэлектрика Мастер</h1>
              <p className="text-sm text-muted-foreground">Тюмень</p>
            </div>
          </div>
          <a href="tel:+79224798608" className="flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors">
            <Icon name="Phone" size={20} />
            +7 (922) 479-86-08
          </a>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Профессиональная автоэлектрика для грузового транспорта
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Диагностика, ремонт и обслуживание электросистем коммерческой и грузовой техники в Тюмени
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на диагностику
              </Button>
              <Button size="lg" variant="outline" className="text-lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'Award', title: 'Опытные мастера', text: 'Глубокие знания современных электросистем' },
              { icon: 'Gauge', title: 'Современное оборудование', text: 'Дилерские сканеры и спецоборудование' },
              { icon: 'Clock', title: 'Быстрая диагностика', text: 'Минимизируем время простоя техники' },
              { icon: 'ShieldCheck', title: 'Гарантия качества', text: 'Гарантия на работы и запчасти' }
            ].map((feature, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <Icon name={feature.icon} size={40} className="text-primary mb-3" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр работ по электрооборудованию грузовой и коммерческой техники
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <Icon name={service.icon} size={48} className="text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Запись на диагностику</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами для уточнения деталей
              </p>
            </div>
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      required
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand">Марка и модель автомобиля *</Label>
                    <Input
                      id="brand"
                      required
                      placeholder="Например: Scania R440, Volvo FH12"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="problem">Описание проблемы *</Label>
                    <Textarea
                      id="problem"
                      required
                      placeholder="Опишите неисправность: что не работает, когда началось, были ли предупреждающие сигналы..."
                      rows={5}
                      value={formData.problem}
                      onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Вопросы и ответы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на часто задаваемые вопросы
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Приезжайте на диагностику или позвоните нам
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="text-center">
              <CardHeader>
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Тюмень, ул. Чекистов, 38д</p>
                <p className="text-sm text-muted-foreground mt-2">(с возможностью заезда крупногабаритной техники)</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+79224798608" className="text-xl font-semibold hover:text-primary transition-colors">
                  +7 (922) 479-86-08
                </a>
                <p className="text-sm text-muted-foreground mt-2">Ежедневно с 9:00 до 19:00</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="Clock" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00</p>
                <p className="text-muted-foreground">Сб: 10:00 - 16:00</p>
                <p className="text-sm text-muted-foreground mt-2">Вс: выходной</p>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A7e8f9c8b8d8e8f8e8d8e8f8e8d8e8f8e&amp;source=constructor"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  className="w-full"
                  title="Карта с адресом сервиса"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Zap" size={28} className="text-primary" />
              <div>
                <p className="font-bold">Автоэлектрика Мастер</p>
                <p className="text-sm text-muted-foreground">Надежное электричество для вашего грузовика</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 Автоэлектрика Мастер. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}